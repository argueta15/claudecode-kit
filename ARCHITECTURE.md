# Claude Code Kit v2.1.0 Architecture

> Comprehensive AI Agent Capability Expansion Toolkit for Claude Code

---

## 📋 Overview

Claude Code Kit v2.1.0 is a modular system consisting of:

- **22 Specialist Agents** - Role-based AI personas (includes build-error-resolver, refactor-cleaner)
- **66 Skills** - Domain-specific knowledge modules (includes continuous-learning-v2, verification-loop, strategic-compact, iterative-retrieval)
- **11 Workflows** - Slash command procedures (converted to skills)
- **Hooks System** - Automatic memory, learning, and compaction ⭐ NEW
- **MCP Integrations** - GitHub, Supabase, Vercel, Railway ⭐ NEW
- **Node.js Scripts** - Validation and verification tools ⭐ NEW

---

## 🏗️ Directory Structure

```plaintext
.claude/
├── agents/                  # 22 Specialist Agents
│   ├── frontend-specialist.md
│   ├── backend-specialist.md
│   ├── build-error-resolver.md    ⭐ NEW
│   ├── refactor-cleaner.md        ⭐ NEW
│   └── ... (18 more)
├── skills/                  # 66 Skills
│   ├── vue3-expert/         # Vue 3 Composition API
│   ├── nextjs-react-expert/ # React + Next.js
│   ├── continuous-learning-v2/    ⭐ NEW
│   ├── verification-loop/         ⭐ NEW
│   ├── strategic-compact/         ⭐ NEW
│   ├── iterative-retrieval/       ⭐ NEW
│   └── ... (62 more)
├── hooks/                   ⭐ NEW
│   └── hooks.json           # Memory, learning, compaction
├── mcp-configs/             ⭐ NEW
│   └── mcp-servers.json     # GitHub, Supabase, Vercel, Railway
├── scripts/                 # Node.js Validation Scripts
│   ├── checklist.js         # Quick validation
│   ├── verify-all.js        # Full verification
│   └── utils/
│       ├── package-manager.js
│       └── logger.js
└── .shared/                 # Design resources
    └── ui-ux-pro-max/

.claude/
├── rules.md                 # Agent discovery configuration
└── settings.local.json      # Optional permissions
```

---

## 🤖 Agents (22)

Specialist AI personas for different domains.

| Agent | Focus | Skills Used |
| ----- | ----- | ----------- |
| `orchestrator` | Multi-agent coordination | parallel-agents, behavioral-modes |
| `project-planner` | Discovery, task planning | brainstorming, plan-writing, architecture |
| `frontend-specialist` | Web UI/UX | frontend-design, nextjs-react-expert, tailwind-patterns |
| `backend-specialist` | API, business logic | api-patterns, nodejs-best-practices, database-design |
| `database-architect` | Schema, SQL | database-design, prisma-expert |
| `mobile-developer` | iOS, Android, RN | mobile-design |
| `game-developer` | Game logic, mechanics | game-development |
| `devops-engineer` | CI/CD, Docker | deployment-procedures, docker-expert |
| `security-auditor` | Security compliance | vulnerability-scanner, red-team-tactics |
| `penetration-tester` | Offensive security | red-team-tactics |
| `test-engineer` | Testing strategies | testing-patterns, tdd-workflow, webapp-testing |
| `debugger` | Root cause analysis | systematic-debugging |
| `performance-optimizer` | Speed, Web Vitals | performance-profiling |
| `seo-specialist` | Ranking, visibility | seo-fundamentals, geo-fundamentals |
| `documentation-writer` | Manuals, docs | documentation-templates |
| `product-manager` | Requirements, user stories | plan-writing, brainstorming |
| `product-owner` | Strategy, backlog, MVP | plan-writing, brainstorming |
| `qa-automation-engineer` | E2E testing, CI pipelines | webapp-testing, testing-patterns |
| `code-archaeologist` | Legacy code, refactoring | clean-code, code-review-checklist |
| `explorer-agent` | Codebase analysis | - |
| `build-error-resolver` ⭐ NEW | TypeScript/build errors | Minimal diffs, auto-recovery |
| `refactor-cleaner` ⭐ NEW | Dead code cleanup | Safe refactoring, deletion tracking |

---

## 🧩 Skills (66)

Modular knowledge domains that agents can load on-demand based on task context. Includes 42 base skills + 11 workflows + 5 everything-claude-code skills + 8 additional.

### Frontend & UI

| Skill | Description |
| ----- | ----------- |
| `nextjs-react-expert` | React & Next.js performance optimization (Vercel - 57 rules) |
| `web-design-guidelines` | Web UI audit - 100+ rules for accessibility, UX, performance (Vercel) |
| `tailwind-patterns` | Tailwind CSS v4 utilities |
| `frontend-design` | UI/UX patterns, design systems |
| `ui-ux-pro-max` | 50 styles, 21 palettes, 50 fonts |

### Backend & API

| Skill | Description |
| ----- | ----------- |
| `api-patterns` | REST, GraphQL, tRPC |
| `nestjs-expert` | NestJS modules, DI, decorators |
| `nodejs-best-practices` | Node.js async, modules |
| `python-patterns` | Python standards, FastAPI |

### Database

| Skill | Description |
| ----- | ----------- |
| `database-design` | Schema design, optimization |
| `prisma-expert` | Prisma ORM, migrations |

### TypeScript/JavaScript

| Skill | Description |
| ----- | ----------- |
| `typescript-expert` | Type-level programming, performance |

### Cloud & Infrastructure

| Skill | Description |
| ----- | ----------- |
| `docker-expert` | Containerization, Compose |
| `deployment-procedures` | CI/CD, deploy workflows |
| `server-management` | Infrastructure management |

### Testing & Quality

| Skill | Description |
| ----- | ----------- |
| `testing-patterns` | Jest, Vitest, strategies |
| `webapp-testing` | E2E, Playwright |
| `tdd-workflow` | Test-driven development |
| `code-review-checklist` | Code review standards |
| `lint-and-validate` | Linting, validation |

### Security

| Skill | Description |
| ----- | ----------- |
| `vulnerability-scanner` | Security auditing, OWASP |
| `red-team-tactics` | Offensive security |

### Architecture & Planning

| Skill | Description |
| ----- | ----------- |
| `app-builder` | Full-stack app scaffolding |
| `architecture` | System design patterns |
| `plan-writing` | Task planning, breakdown |
| `brainstorming` | Socratic questioning |

### Mobile

| Skill | Description |
| ----- | ----------- |
| `mobile-design` | Mobile UI/UX patterns |

### Game Development

| Skill | Description |
| ----- | ----------- |
| `game-development` | Game logic, mechanics |

### SEO & Growth

| Skill | Description |
| ----- | ----------- |
| `seo-fundamentals` | SEO, E-E-A-T, Core Web Vitals |
| `geo-fundamentals` | GenAI optimization |

### Shell/CLI

| Skill | Description |
| ----- | ----------- |
| `bash-linux` | Linux commands, scripting |
| `powershell-windows` | Windows PowerShell |

### Other

| Skill | Description |
| ----- | ----------- |
| `clean-code` | Coding standards (Global) |
| `behavioral-modes` | Agent personas |
| `parallel-agents` | Multi-agent patterns |
| `mcp-builder` | Model Context Protocol |
| `documentation-templates` | Doc formats |
| `i18n-localization` | Internationalization |
| `performance-profiling` | Web Vitals, optimization |
| `systematic-debugging` | Troubleshooting |

### Everything-Claude-Code Integration ⭐ NEW

| Skill | Description |
| ----- | ----------- |
| `continuous-learning-v2` | Pattern extraction, instinct-based learning, dynamic skill generation |
| `verification-loop` | Checkpoint/continuous evaluation, quality metrics, systematic validation |
| `strategic-compact` | Token optimization, context compression, smart summarization |
| `iterative-retrieval` | Context management, retrieval strategies, large codebase navigation |
| MCP configs (not a skill) | GitHub, Supabase, Vercel, Railway integrations |

---

## 🪝 Hooks System ⭐ NEW

Automatic background processes that enhance Claude Code's capabilities:

### Features
- **Memory Persistence**: Auto-save/load context between sessions
- **Strategic Compaction**: Automatic token optimization when approaching limits
- **Continuous Learning**: Extracts patterns from completed tasks and learns preferences

### Events
- `on_task_complete`: Triggered when tasks finish
- `on_session_start`: Restores saved context
- `on_context_limit`: Compacts context strategically

### Configuration
Located in `.claude/hooks/hooks.json` - works automatically without manual intervention.

---

## 🔌 MCP Integrations ⭐ NEW

Pre-configured Model Context Protocol servers for external service integration:

| Service | Capabilities |
| ------- | ------------ |
| **GitHub** | Repos, PRs, Issues, CI status |
| **Supabase** | Database queries, Auth, Real-time |
| **Vercel** | Deployments, Previews, Logs |
| **Railway** | Infrastructure, Environment vars |

Configuration: `.claude/mcp-configs/mcp-servers.json` → `~/.claude/mcp-servers/`

---

## 🔄 Workflows (11)

Slash command procedures. Invoke with `/command`.

| Command | Description |
| ------- | ----------- |
| `/brainstorm` | Socratic discovery |
| `/create` | Create new features |
| `/debug` | Debug issues |
| `/deploy` | Deploy application |
| `/enhance` | Improve existing code |
| `/orchestrate` | Multi-agent coordination |
| `/plan` | Task breakdown |
| `/preview` | Preview changes |
| `/status` | Check project status |
| `/test` | Run tests |
| `/ui-ux-pro-max` | Design with 50 styles |

---

## 🎯 Skill Loading Protocol

```plaintext
User Request → Skill Description Match → Load SKILL.md
                                            ↓
                                    Read references/
                                            ↓
                                    Read scripts/
```

### Skill Structure

```plaintext
skill-name/
├── SKILL.md           # (Required) Metadata & instructions
├── scripts/           # (Optional) Python/Bash scripts
├── references/        # (Optional) Templates, docs
└── assets/            # (Optional) Images, logos
```

### Enhanced Skills (with scripts/references)

| Skill | Files | Coverage |
| ----- | ----- | -------- |
| `typescript-expert` | 5 | Utility types, tsconfig, cheatsheet |
| `ui-ux-pro-max` | 27 | 50 styles, 21 palettes, 50 fonts |
| `app-builder` | 20 | Full-stack scaffolding |

---

## 🛠️ Scripts Node.js (2) ⭐ MIGRATED

Node.js validation scripts (migrated from Python for better integration).

### Main Scripts

| Script | Purpose | When to Use |
| ------ | ------- | ----------- |
| `checklist.js` | Quick validation (Core checks) | Development, pre-commit |
| `verify-all.js` | Full verification (All checks) | Pre-deployment, releases |

### Utilities

| Utility | Purpose |
| ------- | ------- |
| `package-manager.js` | Auto-detect npm/pnpm/yarn/bun |
| `logger.js` | Colored console output |

### Usage

```bash
# Quick validation during development
node .claude/scripts/checklist.js .

# Or use npm scripts
npm run checklist

# Full verification before deployment
node .claude/scripts/verify-all.js . --url http://localhost:3000

# Or
npm run verify

# Skip specific checks
node .claude/scripts/checklist.js . --no-build
node .claude/scripts/verify-all.js . --url http://localhost:3000 --no-e2e
```

### What They Check

**checklist.js** (Core checks):

- ✅ Security scan (npm audit)
- ✅ Lint check (ESLint)
- ✅ TypeScript check (tsc --noEmit)
- ✅ Test runner (npm test)
- ✅ Build check (npm run build)

**verify-all.js** (Full suite):

- Everything in checklist.js PLUS:
- ✅ Lighthouse audit (native)
- ✅ Playwright E2E (native)
- ✅ Bundle analysis
- ✅ Accessibility check

### Features

- ⚡ Auto-detection of package manager
- 🎨 Colored output profesional
- 🚀 Single runtime (Node.js only)
- 📊 Detailed reporting

---

## 📊 Statistics v2.1.0

| Metric | Value |
| ------ | ----- |
| **Total Agents** | 22 (+2 de everything-claude-code) |
| **Total Skills** | 66 (42 base + 11 workflows + 5 everything-claude-code + 8 adicionales) |
| **Total Workflows** | 11 (convertidos a skills invocables) |
| **Scripts Node.js** | 2 maestros + 2 utilities |
| **Hooks** | Sistema completo (3 automáticos) ⭐ |
| **MCP Configs** | 4 servicios pre-configurados ⭐ |
| **Total Files** | 229+ |
| **Coverage** | ~95% web/mobile development + DevOps automation ⭐ |

---

## 🔗 Quick Reference

| Need | Agent | Skills |
| ---- | ----- | ------ |
| Web App | `frontend-specialist` | nextjs-react-expert, frontend-design |
| API | `backend-specialist` | api-patterns, nodejs-best-practices |
| Mobile | `mobile-developer` | mobile-design |
| Database | `database-architect` | database-design, prisma-expert |
| Security | `security-auditor` | vulnerability-scanner |
| Testing | `test-engineer` | testing-patterns, webapp-testing |
| Debug | `debugger` | systematic-debugging |
| Plan | `project-planner` | brainstorming, plan-writing |
| Build Errors | `build-error-resolver` ⭐ NEW | Minimal diffs, auto-recovery |
| Refactoring | `refactor-cleaner` ⭐ NEW | Safe cleanup, deletion tracking |
| Validation | Use `/verification-loop` ⭐ NEW | Quality metrics, systematic checks |
