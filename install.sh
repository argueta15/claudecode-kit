#!/bin/bash
# Claude Code Kit - Auto Installer
# Installs agents, skills, and configuration for Claude Code

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Print colored messages
print_info() { echo -e "${BLUE}ℹ${NC} $1"; }
print_success() { echo -e "${GREEN}✓${NC} $1"; }
print_warning() { echo -e "${YELLOW}⚠${NC} $1"; }
print_error() { echo -e "${RED}✗${NC} $1"; }

# Banner
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  Claude Code Kit - Installation"
echo "  20 Agents + 50 Skills + Scripts"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Detect installation directory
if [ -d ".git" ]; then
    print_info "Detected git repository"
    INSTALL_DIR="."
else
    print_info "Installing to current directory"
    INSTALL_DIR="."
fi

# Check if already installed
if [ -d ".claude/agents" ]; then
    print_warning ".claude/agents directory already exists"
    read -p "Overwrite? (y/n): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        print_error "Installation cancelled"
        exit 1
    fi
    print_info "Removing existing agent directories..."
    rm -rf .claude/agents .claude/skills .claude/scripts .claude/.shared
fi

# Get script directory (where claudecode-kit is)
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

print_info "Installing from: $SCRIPT_DIR"
print_info "Installing to: $INSTALL_DIR"
echo ""

# Step 1: Copy agent system
print_info "Copying agent system..."
if [ -d "$SCRIPT_DIR/.claude" ]; then
    # Create directory if needed
    mkdir -p "$INSTALL_DIR/.claude"
    
    # Copy directories
    cp -r "$SCRIPT_DIR/.claude/agents" "$INSTALL_DIR/.claude/"
    cp -r "$SCRIPT_DIR/.claude/skills" "$INSTALL_DIR/.claude/"
    cp -r "$SCRIPT_DIR/.claude/scripts" "$INSTALL_DIR/.claude/"
    cp -r "$SCRIPT_DIR/.claude/.shared" "$INSTALL_DIR/.claude/"
    
    print_success "Agents and skills installed"
else
    print_error ".claude directory not found in $SCRIPT_DIR"
    exit 1
fi

# Step 2: Copy .claude configuration
print_info "Copying Claude Code configuration..."
if [ ! -d "$INSTALL_DIR/.claude" ]; then
    mkdir -p "$INSTALL_DIR/.claude"
fi

if [ -f "$SCRIPT_DIR/.claude/rules.md" ]; then
    cp "$SCRIPT_DIR/.claude/rules.md" "$INSTALL_DIR/.claude/"
    print_success "Rules installed"
fi

if [ -f "$SCRIPT_DIR/.claude/settings.local.json" ]; then
    if [ -f "$INSTALL_DIR/.claude/settings.local.json" ]; then
        print_warning "settings.local.json already exists, skipping"
    else
        cp "$SCRIPT_DIR/.claude/settings.local.json" "$INSTALL_DIR/.claude/"
        print_success "Settings installed"
    fi
fi

# Step 3: Count installed components
echo ""
print_info "Counting installed components..."

AGENT_COUNT=$(find "$INSTALL_DIR/.claude/agents" -name "*.md" | wc -l | tr -d ' ')
SKILL_COUNT=$(find "$INSTALL_DIR/.claude/skills" -name "SKILL.md" | wc -l | tr -d ' ')
SCRIPT_COUNT=$(find "$INSTALL_DIR/.claude/scripts" -name "*.py" | wc -l | tr -d ' ')

print_success "Agents: $AGENT_COUNT"
print_success "Skills: $SKILL_COUNT"
print_success "Scripts: $SCRIPT_COUNT"

# Step 4: Check prerequisites
echo ""
print_info "Checking prerequisites..."

# Check Python
if command -v python3 &> /dev/null; then
    PYTHON_VERSION=$(python3 --version | cut -d' ' -f2)
    print_success "Python $PYTHON_VERSION detected"
else
    print_warning "Python 3 not found (needed for validation scripts)"
fi

# Check Node.js
if command -v node &> /dev/null; then
    NODE_VERSION=$(node --version)
    print_success "Node.js $NODE_VERSION detected"
else
    print_warning "Node.js not found (needed for frontend projects)"
fi

# Check Claude Code
if command -v claude &> /dev/null; then
    print_success "Claude Code CLI detected"
else
    print_warning "Claude Code CLI not found"
    print_info "Install from: https://github.com/anthropics/claude-code"
fi

# Step 5: Create .gitignore entry if needed
if [ -f "$INSTALL_DIR/.gitignore" ]; then
    if ! grep -q ".claude/agents" "$INSTALL_DIR/.gitignore"; then
        echo "" >> "$INSTALL_DIR/.gitignore"
        echo "# Claude Code Kit - Optional: uncomment to exclude installed agents" >> "$INSTALL_DIR/.gitignore"
        echo "# .claude/agents/" >> "$INSTALL_DIR/.gitignore"
        echo "# .claude/skills/" >> "$INSTALL_DIR/.gitignore"
        print_success "Added .claude paths to .gitignore (commented)"
    fi
fi

# Installation complete
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo -e "${GREEN}✓ Installation Complete!${NC}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📦 Installed:"
echo "   • $AGENT_COUNT agents in .claude/agents/"
echo "   • $SKILL_COUNT skills in .claude/skills/"
echo "   • $SCRIPT_COUNT scripts in .claude/scripts/"
echo "   • Design resources in .claude/.shared/"
echo ""
echo "🚀 Quick Start:"
echo "   1. Test agents:   claude \"list available agents\""
echo "   2. Try a skill:   claude /vue3-expert \"composable patterns\""
echo "   3. Use workflow:  claude /test"
echo "   4. Run checks:    python .claude/scripts/checklist.py ."
echo ""
echo "📚 Documentation:"
echo "   • Quick Start:    cat QUICKSTART.md"
echo "   • Installation:   cat INSTALLATION.md"
echo "   • Architecture:   cat ARCHITECTURE.md"
echo ""
echo "🎯 Framework Support:"
echo "   • Vue 3:  Use /vue3-expert skill"
echo "   • React:  Use /nextjs-react-expert skill"
echo ""
print_success "Ready to code with Claude Code Kit!"
