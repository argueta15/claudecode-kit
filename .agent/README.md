# Claude Code Kit - Agent System

This directory contains the complete agent and skill system for Claude Code.

## Structure

```
.agent/
├── agents/          20 specialized agents
├── skills/          48 skills (37 original + 11 workflows)
├── scripts/         4 Python validation scripts
├── workflows/       11 original workflows (for reference)
└── .shared/         Design resources (ui-ux-pro-max)
```

## Agents (20)

Specialized AI agents for different development tasks. Invoked with Task tool:

```bash
Task(subagent_type="frontend-specialist", prompt="Review component")
```

### Categories

**Frontend:**
- frontend-specialist - React + Vue 3 expert
- mobile-developer - React Native, Flutter, Swift

**Backend:**
- backend-specialist - Node.js, Python, APIs
- database-architect - Schema, queries, optimization

**Testing & QA:**
- test-engineer - Testing strategies
- qa-automation-engineer - E2E, CI/CD

**Security:**
- security-auditor - OWASP, vulnerabilities
- penetration-tester - Security testing

**DevOps:**
- devops-engineer - CI/CD, Docker, deployment

**Architecture:**
- code-archaeologist - Legacy code, refactoring
- project-planner - Task planning
- product-manager - Requirements
- product-owner - Product strategy
- orchestrator - Multi-agent coordination

**Specialized:**
- documentation-writer - Technical docs
- performance-optimizer - Speed, optimization
- game-developer - Game development
- seo-specialist - SEO optimization
- explorer-agent - Codebase analysis
- debugger - Systematic debugging

## Skills (48)

Knowledge modules and patterns. Invoked with Skill tool or loaded by agents:

```bash
# Direct invocation
claude /vue3-expert "composable patterns"

# Loaded by agents
skills: vue3-expert, clean-code, testing-patterns
```

### Categories

**Frontend (5):**
- vue3-expert - Vue 3 Composition API, Nuxt 3, Pinia
- nextjs-react-expert - React, Next.js, Server Components
- frontend-design - UI/UX patterns
- tailwind-patterns - Tailwind CSS v4
- web-design-guidelines - Design audit (100+ rules)

**Backend (4):**
- api-patterns - REST, GraphQL, tRPC
- nodejs-best-practices - Node.js patterns
- python-patterns - Python, FastAPI
- database-design - Schema, optimization

**Testing (5):**
- testing-patterns - Jest, Vitest
- tdd-workflow - Test-driven development
- webapp-testing - E2E with Playwright
- code-review-checklist - Review standards
- lint-and-validate - ESLint, Prettier

**Security (2):**
- vulnerability-scanner - OWASP Top 10
- red-team-tactics - Penetration testing

**Architecture (4):**
- architecture - System design patterns
- plan-writing - Task breakdown
- brainstorming - Socratic questioning
- app-builder - Full-stack scaffolding

**Mobile (1):**
- mobile-design - Mobile UI/UX

**Game Development (1):**
- game-development - 2D/3D games, mechanics

**SEO (2):**
- seo-fundamentals - SEO optimization
- geo-fundamentals - GenAI optimization

**Performance (1):**
- performance-profiling - Lighthouse, Web Vitals

**Shell/CLI (2):**
- bash-linux - Linux commands
- powershell-windows - PowerShell

**Infrastructure (2):**
- deployment-procedures - CI/CD
- server-management - Infrastructure

**Development Tools (7):**
- clean-code - Coding standards
- systematic-debugging - Debug methodologies
- documentation-templates - Doc formats
- i18n-localization - Internationalization
- behavioral-modes - Agent personas
- parallel-agents - Multi-agent coordination
- intelligent-routing - Smart routing
- mcp-builder - Model Context Protocol

**Workflows (11) - Now Skills:**
- test - Test generation/execution
- brainstorm - Structured brainstorming
- create - App creation wizard
- debug - Systematic debugging
- deploy - Deployment workflow
- enhance - Code enhancement
- orchestrate - Multi-agent coordination
- plan - Planning workflow
- preview - Preview changes
- status - Project status
- ui-ux-pro-max - Design with 50 styles

## Scripts (4)

Python validation and automation scripts:

1. **checklist.py** - Quick validation (dev)
2. **verify_all.py** - Comprehensive validation (pre-deploy)
3. **auto_preview.py** - Auto preview
4. **session_manager.py** - Session management

## Design Resources

**.shared/ui-ux-pro-max:**
- 50 design styles
- 21 color palettes
- 50 font collections
- Framework templates (React, Vue, Svelte, Flutter, etc.)

## Usage

### For Users

```bash
# Use an agent
claude "Use frontend-specialist to review my Vue component"

# Use a skill
claude /vue3-expert "composable patterns"

# Use a workflow (now skill)
claude /test "src/components/UserCard.vue"
claude /deploy
claude /brainstorm "new feature ideas"
```

### For Claude

```python
# Invoke agent
Task(
    subagent_type="frontend-specialist",
    description="Review Vue component",
    prompt="Review src/components/UserCard.vue"
)

# Load skill
Skill(skill="vue3-expert", args="composable patterns")
```

## Installation

See [INSTALLATION.md](../INSTALLATION.md) for setup instructions.

## Compatibility

✅ **Claude Code Compatible** - All agents and skills follow Claude Code format
✅ **Dual Framework** - React and Vue 3 support
✅ **Auto-Discovery** - Place in `.agent/` directory for auto-loading

## Version

- **Agents**: v1.0 (20 agents)
- **Skills**: v1.0 (48 skills)
- **Format**: Claude Code native
- **Migration**: Completed from antigravity-kit

---

**Built for Claude Code CLI** 🚀
