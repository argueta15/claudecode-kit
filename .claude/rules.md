# Claude Code Kit - Agent & Skill System

## 🎯 TIER 0: Intelligent Routing (ALWAYS ACTIVE)

**Before responding to ANY user request, you MUST:**

1. **Analyze the request** for keywords, domains, and complexity
2. **Auto-select the appropriate agent(s)** using the intelligent-routing skill matrix
3. **Inform the user** which specialist knowledge you're applying
4. **Respond with specialized expertise** from that agent

### Quick Reference:

| If user mentions... | Auto-select agent... |
|---------------------|---------------------|
| login, auth, password, jwt | `security-auditor` + `backend-specialist` |
| vue, pinia, nuxt, composition api | `frontend-specialist` (vue3-expert) |
| react, next.js, jsx, hooks | `frontend-specialist` (nextjs-react-expert) |
| flutter, dart, widget, provider | `mobile-developer` (flutter-expert) |
| api, endpoint, rest, graphql | `backend-specialist` |
| schema, database, postgres, supabase | `database-architect` |
| error, bug, not working, crash | `debugger` |
| test, coverage, e2e, playwright | `test-engineer` or `qa-automation-engineer` |
| deploy, docker, ci/cd | `devops-engineer` |
| security, vulnerability, xss | `security-auditor` |
| slow, optimize, performance | `performance-optimizer` |

**Full routing matrix**: Read `.agent/skills/intelligent-routing/SKILL.md`

### Response Format:

```markdown
🤖 **Applying knowledge of `@agent-name`...**

[Proceed with specialized response]
```

### Override:

User can still explicitly say "Use X agent" to override auto-selection.

---

## Agent Discovery

Claude Code has access to 20 specialized agents in `.agent/agents/`:

### Frontend & Mobile
- **frontend-specialist** - React + Vue 3, UI/UX, performance
- **mobile-developer** - React Native, Flutter, iOS, Android

### Backend & Data
- **backend-specialist** - Node.js, Python, APIs, serverless
- **database-architect** - PostgreSQL, schema design, optimization

### Testing & QA
- **test-engineer** - Testing strategies, TDD
- **qa-automation-engineer** - E2E testing, Playwright, CI/CD

### Security
- **security-auditor** - OWASP Top 10, vulnerability scanning
- **penetration-tester** - Red team tactics, security testing

### DevOps
- **devops-engineer** - CI/CD, Docker, Kubernetes, deployment

### Architecture & Planning
- **code-archaeologist** - Legacy code, refactoring
- **project-planner** - Task breakdown, planning
- **product-manager** - Requirements, user stories
- **product-owner** - Product strategy, backlog
- **orchestrator** - Multi-agent coordination

### Specialized
- **documentation-writer** - Technical documentation
- **performance-optimizer** - Performance, Web Vitals
- **game-developer** - Game development, Unity, Godot
- **seo-specialist** - SEO optimization, ranking
- **explorer-agent** - Codebase exploration
- **debugger** - Systematic debugging

## Skill Discovery

69 skills available in `.agent/skills/` for specialized knowledge:

### System Skills (Priority)
- **intelligent-routing** - 🎯 TIER 0: Automatic agent selection based on request analysis

### Framework Skills
- **vue3-expert** - Vue 3 Composition API, Pinia, Nuxt 3
- **nextjs-react-expert** - React, Next.js, Server Components
- **flutter-expert** - Flutter/Dart, widgets, state management, Supabase
- **frontend-design** - UI/UX patterns, design systems
- **tailwind-patterns** - Tailwind CSS v4
- **mobile-design** - Mobile UI/UX patterns

### Development Skills
- **clean-code** - Coding standards, best practices
- **testing-patterns** - Jest, Vitest, testing strategies
- **tdd-workflow** - Test-driven development
- **webapp-testing** - E2E testing with Playwright
- **systematic-debugging** - Debug methodologies

### Backend Skills
- **api-patterns** - REST, GraphQL, tRPC
- **nodejs-best-practices** - Node.js patterns
- **python-patterns** - Python, FastAPI
- **database-design** - Schema design, optimization

### Architecture Skills
- **architecture** - System design patterns
- **plan-writing** - Task breakdown, planning
- **brainstorming** - Socratic questioning
- **app-builder** - Full-stack scaffolding

### Security Skills
- **vulnerability-scanner** - OWASP Top 10, security auditing
- **red-team-tactics** - Penetration testing

### Workflow Skills (Converted)
- **test** - Test generation and execution
- **brainstorm** - Structured brainstorming
- **create** - Application creation wizard
- **debug** - Systematic debugging workflow
- **deploy** - Deployment workflow
- **enhance** - Code enhancement
- **orchestrate** - Multi-agent orchestration
- **plan** - Planning workflow
- **preview** - Preview changes
- **status** - Project status check
- **ui-ux-pro-max** - Design with 50+ styles

## Usage Patterns

### For React Projects

Use these agents and skills:
- Agents: `frontend-specialist`, `test-engineer`
- Skills: `nextjs-react-expert`, `testing-patterns`, `clean-code`

```bash
claude "Use frontend-specialist to review my React component"
claude /nextjs-react-expert "Server Components patterns"
```

### For Vue 3 Projects

Use these agents and skills:
- Agents: `frontend-specialist`, `test-engineer`
- Skills: `vue3-expert`, `testing-patterns`, `clean-code`

```bash
claude "Use frontend-specialist to review my Vue component"
claude /vue3-expert "Pinia store patterns"
```

### For Backend Projects

Use these agents and skills:
- Agents: `backend-specialist`, `database-architect`, `security-auditor`
- Skills: `api-patterns`, `nodejs-best-practices`, `database-design`

```bash
claude "Use backend-specialist to design this API"
claude /api-patterns "tRPC vs REST for TypeScript monorepo"
```

### For Full-Stack Projects

Use orchestrator for coordination:
- Agent: `orchestrator`
- Skills: `parallel-agents`, `architecture`

```bash
claude /orchestrate "Build a todo app with Vue 3 and FastAPI"
```

## Auto-Loading

Claude Code automatically discovers:
- Agents in `.agent/agents/*.md`
- Skills in `.agent/skills/*/SKILL.md`

No manual configuration needed.

## Validation Scripts

Run validation before commits/deploys:

```bash
# Quick check (development)
python .agent/scripts/checklist.py .

# Full verification (pre-deploy)
python .agent/scripts/verify_all.py . --url http://localhost:3000
```

## Framework Support

✅ **React** - Full support with nextjs-react-expert skill
✅ **Vue 3** - Full support with vue3-expert skill
✅ **Next.js** - Server Components, App Router
✅ **Nuxt 3** - SSR, SSG, Pinia
✅ **TypeScript** - Type-safe patterns throughout

## Behavioral Guidelines

When working with this kit:

1. **Agent Selection**: Choose the most specific agent for the task
2. **Skill Loading**: Agents auto-load relevant skills from their frontmatter
3. **Framework Detection**: Auto-detect React vs Vue from file extensions
4. **Testing**: Always generate tests for new code
5. **Security**: Run security audits for API/auth code
6. **Performance**: Check Web Vitals for UI changes

## Notes

- All agents support both React and Vue 3 where applicable
- Skills can be invoked directly or loaded by agents
- Workflows have been converted to invocable skills
- Scripts are standalone Python tools

---

**Version**: 2.2.0
**Agents**: 22
**Skills**: 69
**Routing**: Intelligent (automatic)
**Compatibility**: Claude Code native format
