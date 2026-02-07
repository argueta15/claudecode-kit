# Claude Code Kit v2.1.0 - Installation Guide

Complete installation and setup guide for Claude Code Kit with 22 agents, 66 skills, hooks system, and MCP integrations.

---

## 📋 Prerequisites

### Required

- **Claude Code CLI** installed ([Installation guide](https://github.com/anthropics/claude-code))
- **Node.js 16+** for validation scripts (checklist.js, verify-all.js)
- **Git** for version control

### Optional (for full features)

- **Lighthouse** (included in verify-all.js dependencies)
- **Playwright** for E2E tests (included in verify-all.js dependencies)
- **MCP Server configs** for GitHub, Supabase, Vercel, Railway integrations

---

## 🚀 Quick Install

### Option 1: Install to Project (Recommended)

Copy the kit to your project's `.claude/` directory:

```bash
# Navigate to your project
cd your-project/

# Clone or copy claudecode-kit
git clone https://github.com/yourusername/claudecode-kit.git temp-kit

# Copy .claude directory
cp -r temp-kit/.claude .

# Clean up
rm -rf temp-kit

# Verify installation
ls -la .claude/
```

Your project structure:
```
your-project/
├── .claude/
│   ├── agents/       (22 agents - includes build-error-resolver, refactor-cleaner)
│   ├── skills/       (66 skills - includes continuous-learning-v2, verification-loop, etc.)
│   ├── scripts/      (2 Node.js scripts - checklist.js, verify-all.js)
│   ├── hooks/        (hooks.json - memory, learning, compaction) ⭐ NEW
│   ├── mcp-configs/  (GitHub, Supabase, Vercel, Railway) ⭐ NEW
│   ├── .shared/      (design resources)
│   ├── rules.md      (agent discovery)
│   └── settings.local.json
└── [your project files]
```

### Option 2: Global Installation

Install globally for use across all projects:

```bash
# Clone to a permanent location
git clone https://github.com/yourusername/claudecode-kit.git ~/claudecode-kit

# Create symlink (macOS/Linux)
ln -s ~/claudecode-kit/.claude/agents ~/.claude/agents

# Or copy to global location
cp -r ~/claudecode-kit/.claude/agents ~/.claude/agents
```

---

## 🔧 Configuration

### 1. Verify Agent Discovery

Claude Code should auto-discover agents and skills.

Test with:
```bash
cd your-project
claude "list available agents"
```

Expected output:
```
I have access to 22 specialized agents:
- frontend-specialist (React + Vue 3)
- backend-specialist
- test-engineer
- security-auditor
- build-error-resolver ⭐ NEW
- refactor-cleaner ⭐ NEW
...
```

### 2. Configure Permissions (Optional)

Edit `.claude/settings.local.json` to set permissions:

```json
{
  "permissions": {
    "allow": [
      "Bash(node:*)",
      "Bash(npm:*)",
      "Bash(npx:*)"
    ]
  }
}
```

### 3. Validate Installation

Run validation to ensure everything works:

```bash
# Quick check (requires Node.js)
node .claude/scripts/checklist.js .

# Or use npm script
npm run checklist

# Full validation with dev server
node .claude/scripts/verify-all.js . --url http://localhost:3000 --no-e2e

# Or
npm run verify
```

### 4. Configure Hooks (Automatic) ⭐ NEW

The hooks system works automatically - no configuration needed:

```bash
# Hooks are already configured in .claude/hooks/hooks.json
# They run automatically on events:
# - on_task_complete: Learns from completed tasks
# - on_session_start: Restores context
# - on_context_limit: Compacts strategically

# To verify hooks config:
cat .claude/hooks/hooks.json
```

### 5. Setup MCP Integrations (Optional) ⭐ NEW

For GitHub, Supabase, Vercel, Railway integrations:

```bash
# Copy MCP config to Claude settings
cp .claude/mcp-configs/mcp-servers.json ~/.claude/mcp-servers/

# Edit to add your credentials
# ~/.claude/mcp-servers/mcp-servers.json
# Add: GITHUB_TOKEN, SUPABASE_URL, VERCEL_TOKEN, etc.

# Restart Claude Code to load MCP configs
```

---

## 🎯 Framework-Specific Setup

### For Vue 3 Projects

The kit is ready for Vue 3 out of the box:

```bash
# Test Vue 3 skill
claude /vue3-expert "show me composable patterns"

# Use frontend specialist with Vue
claude "Use frontend-specialist to review my Vue component"
```

**Skills to use:**
- `vue3-expert` - Composition API, Pinia, Nuxt 3
- `frontend-design` - UI/UX patterns
- `testing-patterns` - Vue Test Utils

### For React Projects

Works seamlessly with React:

```bash
# Test React skill
claude /nextjs-react-expert "show me Server Component patterns"

# Use frontend specialist with React
claude "Use frontend-specialist to review my React component"
```

**Skills to use:**
- `nextjs-react-expert` - React, Next.js, Server Components
- `frontend-design` - UI/UX patterns
- `testing-patterns` - React Testing Library

### For Backend Projects

Backend support for Node.js and Python:

```bash
# Test backend skills
claude /api-patterns "show me tRPC patterns"
claude /nodejs-best-practices "async error handling"

# Use backend specialist
claude "Use backend-specialist to design my API"
```

**Skills to use:**
- `api-patterns` - REST, GraphQL, tRPC
- `nodejs-best-practices` - Node.js patterns
- `python-patterns` - Python, FastAPI

---

## 🧪 Testing Your Installation

### Test 1: Agent Invocation

```bash
claude "Use frontend-specialist to explain Vue 3 Composition API"
```

Expected: Detailed explanation of Vue 3 Composition API.

### Test 2: Skill Invocation

```bash
claude /vue3-expert "composable patterns"
```

Expected: Vue 3 composable patterns and examples.

### Test 3: Workflow Skill

```bash
claude /test "show me test patterns"
```

Expected: Testing patterns and strategies.

### Test 4: Validation Scripts

```bash
# Create a test file
echo "console.log('test')" > test.js

# Run quick validation
python .agent/scripts/checklist.py .
```

Expected: Validation results (may have lint errors for simple test).

---

## 🔍 Verification Checklist

After installation, verify:

- [ ] `.claude/` directory exists with agents, skills, scripts
- [ ] `.claude/rules.md` exists
- [ ] Claude can list available agents
- [ ] Skills can be invoked (e.g., `/vue3-expert`)
- [ ] Agents can be used (e.g., "Use frontend-specialist")
- [ ] Python scripts run without errors
- [ ] No permission errors when using Bash tool

---

## 📦 What Gets Installed

```
.claude/
├── agents/              20 specialized agents
│   ├── frontend-specialist.md
│   ├── backend-specialist.md
│   ├── test-engineer.md
│   ├── security-auditor.md
│   └── ... (16 more)
│
├── skills/              50 skills
│   ├── vue3-expert/SKILL.md
│   ├── nextjs-react-expert/SKILL.md
│   ├── clean-code/SKILL.md
│   ├── testing-patterns/SKILL.md
│   ├── test/SKILL.md           (workflow converted)
│   ├── deploy/SKILL.md         (workflow converted)
│   ├── checklist/SKILL.md      (script wrapper)
│   ├── verify-all/SKILL.md     (script wrapper)
│   └── ... (42 more)
│
├── scripts/             4 Python validation scripts
│   ├── checklist.py
│   ├── verify_all.py
│   ├── auto_preview.py
│   └── session_manager.py
│
├── .shared/             Design resources
│   └── ui-ux-pro-max/   50 styles, 21 palettes, templates
│
├── rules.md             Agent/skill discovery
└── settings.local.json  Permissions (optional)
```

**Total:**
- 20 agents
- 50 skills
- 4 scripts
- Design resources
- Documentation

---

## 🚨 Troubleshooting

### Issue: "Agent not found"

**Solution:**
```bash
# Verify .claude/agents directory exists
ls -la .claude/agents/

# Check Claude Code working directory
claude "what is my current working directory?"

# Ensure agents are in correct location
```

### Issue: "Skill not found"

**Solution:**
```bash
# Verify skills directory
ls -la .claude/skills/

# Check skill name (use exact name from SKILL.md)
# Example: /vue3-expert not /vue-3-expert
```

### Issue: "Python script fails"

**Solution:**
```bash
# Check Python version
python3 --version

# Should be 3.8 or higher

# Install dependencies if needed
pip install -r requirements.txt
```

### Issue: "Permission denied for Bash"

**Solution:**

Edit `.claude/settings.local.json`:
```json
{
  "permissions": {
    "allow": [
      "Bash(python3:*)",
      "Bash(*)"
    ]
  }
}
```

### Issue: "Lighthouse not found"

**Solution:**
```bash
# Install Lighthouse globally
npm install -g lighthouse

# Or skip Lighthouse in verify_all
python .claude/scripts/verify_all.py . --url URL --no-lighthouse
```

### Issue: "E2E tests timeout"

**Solution:**
```bash
# Install Playwright
npx playwright install

# Or skip E2E tests
python .claude/scripts/verify_all.py . --url URL --no-e2e
```

---

## 🔄 Updating

To update the kit to latest version:

```bash
# Pull latest changes (if using git clone)
cd ~/claudecode-kit
git pull origin main

# Copy updated files to project
cp -r .claude/* your-project/.claude/
```

Or simply re-install following the Quick Install steps.

---

## 🗑️ Uninstalling

To remove the kit:

```bash
# Remove from project
cd your-project
rm -rf .claude

# Or remove global installation
rm -rf ~/.claude/agents
```

---

## 💡 Next Steps

After installation:

1. **Read the Quick Start**: [QUICKSTART.md](QUICKSTART.md)
2. **Explore the Architecture**: [ARCHITECTURE.md](ARCHITECTURE.md)
3. **Check Framework Support**: [FRAMEWORKS.md](FRAMEWORKS.md)
4. **Try a workflow**: `claude /test` or `claude /brainstorm`
5. **Use validation**: `python .claude/scripts/checklist.py .`

---

## 🤝 Getting Help

- **Documentation**: Check README.md, QUICKSTART.md, ARCHITECTURE.md
- **Examples**: See QUICKSTART.md for usage examples
- **Issues**: Report bugs or ask questions on GitHub Issues
- **Skills**: Browse `.claude/skills/` for available knowledge modules

---

## ✅ Installation Complete!

You're ready to use Claude Code Kit. Try:

```bash
# List available agents
claude "what agents are available?"

# Use Vue 3 skill
claude /vue3-expert "show me Pinia patterns"

# Use frontend specialist
claude "Use frontend-specialist to review my component"

# Run validation
python .claude/scripts/checklist.py .
```

**Happy coding! 🚀**
