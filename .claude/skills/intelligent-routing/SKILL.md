---
name: intelligent-routing
description: Automatic agent selection and intelligent task routing. Analyzes user requests and automatically selects the best specialist agent(s) without requiring explicit user mentions.
priority: CRITICAL
version: 2.0.0
---

# Intelligent Agent Routing

**Purpose**: Automatically analyze user requests and route them to the most appropriate specialist agent(s) without requiring explicit user mentions.

## Core Principle

> **Act as an intelligent Project Manager**, analyzing each request and automatically selecting the best specialist(s) for the job.

## How It Works

### 1. Automatic Request Analysis (TIER 0 - Always Active)

Before responding to ANY user request, perform automatic analysis:

```
User Request → [ANALYZE] → [SELECT AGENT(s)] → [AUTO-INVOKE] → Response
              ↓
        - Keywords
        - Domains
        - Complexity
```

### 2. Agent Selection Matrix

**Use this matrix to automatically select agents based on detected keywords:**

| User Intent | Keywords | Selected Agent(s) | Auto-invoke? |
|-------------|----------|-------------------|--------------|
| **Authentication/Security** | login, auth, signup, password, jwt, token, oauth | `security-auditor` + `backend-specialist` | ✅ YES |
| **Vue 3 Component** | vue, composition api, pinia, nuxt, ref, reactive | `frontend-specialist` | ✅ YES |
| **React Component** | react, jsx, tsx, next.js, server component, hooks | `frontend-specialist` | ✅ YES |
| **UI/UX Design** | button, card, layout, design, style, tailwind, responsive | `frontend-specialist` | ✅ YES |
| **Mobile (Flutter)** | flutter, dart, widget, stateless, stateful, provider, riverpod | `mobile-developer` | ✅ YES |
| **Mobile (React Native)** | react native, expo, ios, android, navigation | `mobile-developer` | ✅ YES |
| **API Endpoint** | endpoint, route, api, rest, graphql, trpc, post, get | `backend-specialist` | ✅ YES |
| **Database** | schema, migration, query, table, prisma, supabase, postgres | `database-architect` + `backend-specialist` | ✅ YES |
| **Bug Fix** | error, bug, not working, broken, crash, fails, exception | `debugger` | ✅ YES |
| **Testing** | test, coverage, unit test, e2e, integration, jest, vitest | `test-engineer` | ✅ YES |
| **E2E Testing** | playwright, cypress, e2e, integration test, browser test | `qa-automation-engineer` | ✅ YES |
| **Deployment** | deploy, production, ci/cd, docker, kubernetes, pipeline | `devops-engineer` | ✅ YES |
| **Security Review** | security, vulnerability, exploit, owasp, xss, sql injection | `security-auditor` + `penetration-tester` | ✅ YES |
| **Performance** | slow, optimize, performance, speed, cache, lazy load | `performance-optimizer` | ✅ YES |
| **Legacy Code** | refactor, legacy, old code, technical debt, modernize | `code-archaeologist` | ✅ YES |
| **Documentation** | documentation, readme, docs, api docs, comments | `documentation-writer` | ✅ YES |
| **SEO** | seo, meta tags, sitemap, robots.txt, ranking, analytics | `seo-specialist` | ✅ YES |
| **Product Requirements** | requirements, user story, backlog, mvp, features | `product-owner` | ✅ YES |
| **Planning** | plan, roadmap, breakdown, tasks, estimate | `project-planner` | ✅ YES |
| **Game Development** | unity, godot, phaser, game, multiplayer, physics | `game-developer` | ✅ YES |
| **New Feature** | build, create new app, implement feature | `orchestrator` → multi-agent | ⚠️ ASK FIRST |
| **Complex Task** | Multiple domains detected | `orchestrator` → multi-agent | ⚠️ ASK FIRST |

## 3. Domain Detection Rules

### Single-Domain Tasks (Auto-invoke Single Agent)

| Domain | Patterns | Agent |
|--------|----------|-------|
| **Security** | auth, login, jwt, password, hash, token, encryption | `security-auditor` |
| **Frontend (Vue)** | vue, nuxt, pinia, composition api, vite, vueuse | `frontend-specialist` |
| **Frontend (React)** | react, next.js, jsx, tsx, server component, app router | `frontend-specialist` |
| **Mobile (Flutter)** | flutter, dart, widget, material, cupertino, provider | `mobile-developer` |
| **Mobile (RN)** | react native, expo, metro, hermes | `mobile-developer` |
| **Backend** | api, server, express, fastify, hono, node, python | `backend-specialist` |
| **Database** | prisma, sql, postgres, supabase, mongodb, schema | `database-architect` |
| **Testing** | test, jest, vitest, mocha, chai, assertion | `test-engineer` |
| **E2E** | playwright, cypress, detox, maestro, puppeteer | `qa-automation-engineer` |
| **DevOps** | docker, kubernetes, ci/cd, github actions, vercel | `devops-engineer` |
| **Debug** | error, bug, crash, exception, stack trace, not working | `debugger` |
| **Performance** | slow, lag, optimize, cache, performance, web vitals | `performance-optimizer` |
| **Legacy** | refactor, legacy, old code, technical debt | `code-archaeologist` |
| **Docs** | documentation, readme, api docs, jsdoc, comments | `documentation-writer` |
| **SEO** | seo, meta, sitemap, robots, schema markup, analytics | `seo-specialist` |
| **Product** | requirements, user story, acceptance criteria, backlog | `product-owner` |
| **Planning** | plan, roadmap, breakdown, estimate, timeline | `project-planner` |
| **Game** | unity, godot, phaser, game loop, collision, sprite | `game-developer` |

### Multi-Domain Tasks (Auto-invoke Orchestrator)

If request matches **2+ domains from different categories**, automatically use `orchestrator`:

```
Example: "Create a secure login system with dark mode UI"
→ Detected: Security + Frontend
→ Auto-invoke: orchestrator
→ Orchestrator coordinates: security-auditor, frontend-specialist, test-engineer
```

## 4. Complexity Assessment

### SIMPLE (Direct agent invocation)
- Single file edit
- Clear, specific task
- One domain only
- Example: "Fix the login button style"

**Action**: Auto-invoke respective agent

### MODERATE (2-3 agents sequentially)
- 2-3 files affected
- Clear requirements
- 2 domains max
- Example: "Add API endpoint for user profile with validation"

**Action**: Auto-invoke relevant agents sequentially

### COMPLEX (Orchestrator required)
- Multiple files/domains
- Architectural decisions needed
- Unclear requirements
- Example: "Build a social media app"

**Action**: Auto-invoke `orchestrator` → will ask Socratic questions

## 5. Response Format

**When auto-selecting an agent, inform the user concisely:**

```markdown
🤖 **Applying knowledge of `@frontend-specialist`...**

[Proceed with specialized response]
```

**Benefits:**
- ✅ User sees which expertise is being applied
- ✅ Transparent decision-making
- ✅ Still automatic (no /commands needed)

## 6. Implementation Rules

### Rule 1: Silent Analysis
- ✅ Analyze silently in background
- ✅ Inform which agent is being applied
- ❌ Avoid verbose meta-commentary like "I'm analyzing your request..."

### Rule 2: Inform Agent Selection
**DO inform which expertise is being applied:**

```markdown
🤖 **Applying knowledge of `@frontend-specialist`...**

I will create the component with the following characteristics:
[Continue with specialized response]
```

### Rule 3: Seamless Experience
**The user should not notice a difference from talking to the right specialist directly.**

### Rule 4: Override Capability
**User can still explicitly mention agents:**

```text
User: "Use frontend-specialist to review this"
→ Override auto-selection
→ Use explicitly mentioned agent
```

### Rule 5: Skill-based Routing
**Also detect skill invocations:**

```text
User: "/vue3-expert patterns for composables"
→ Load vue3-expert skill
→ Respond with skill knowledge
```

## 7. Edge Cases

### Case 1: Generic Question
```text
User: "How does React work?"
→ Type: QUESTION
→ No agent needed
→ Respond directly with explanation
```

### Case 2: Extremely Vague Request
```text
User: "Make it better"
→ Complexity: UNCLEAR
→ Action: Ask clarifying questions first
→ Then route to appropriate agent
```

### Case 3: Contradictory Patterns
```text
User: "Add mobile support to the web app"
→ Conflict: mobile vs web (responsive)
→ Action: Ask: "Do you want responsive web or native mobile app?"
→ Then route accordingly
```

## 8. Integration with Workflows

### With /orchestrate Command
- **User types `/orchestrate`**: Explicit orchestration mode
- **AI detects complex task**: Auto-invoke orchestrator (same result)

**Difference**: User doesn't need to know the command exists.

### With Skills
- **Auto-routing does NOT conflict with skills**
- Skills provide knowledge, agents execute work
- Example: frontend-specialist can use vue3-expert skill automatically

## 9. Stack-Specific Routing

### Your Tech Stack Priority:

**Frontend:**
1. Vue 3 → `frontend-specialist` (loads vue3-expert skill)
2. React/Next.js → `frontend-specialist` (loads nextjs-react-expert skill)

**Mobile:**
1. Flutter → `mobile-developer` (loads flutter-expert skill)
2. React Native → `mobile-developer` (loads mobile-design skill)

**Backend:**
1. Node.js/Bun → `backend-specialist` (loads nodejs-best-practices skill)
2. APIs → `backend-specialist` (loads api-patterns skill)

**Database:**
1. PostgreSQL/Supabase → `database-architect` (loads database-design skill)

## 10. Testing the System

### Test Cases

#### Test 1: Simple Frontend Task
```text
User: "Create a dark mode toggle button"
Expected: Auto-invoke frontend-specialist
Verify: Response shows "🤖 Applying knowledge of @frontend-specialist..."
```

#### Test 2: Security Task
```text
User: "Review the authentication flow for vulnerabilities"
Expected: Auto-invoke security-auditor
Verify: Security-focused analysis
```

#### Test 3: Flutter Task
```text
User: "Create a product list screen with Provider state management"
Expected: Auto-invoke mobile-developer
Verify: Flutter-specific patterns with Provider
```

#### Test 4: Complex Multi-Domain
```text
User: "Build a chat application with real-time notifications"
Expected: Auto-invoke orchestrator
Verify: Multiple agents coordinated (backend, frontend, mobile, test)
```

#### Test 5: Bug Fix
```text
User: "Login is not working, getting 401 error"
Expected: Auto-invoke debugger
Verify: Systematic debugging approach
```

## Summary

**intelligent-routing skill enables:**

✅ Zero-command operation (no need for "Use X agent")
✅ Automatic specialist selection based on request analysis
✅ Transparent communication of which expertise is being applied
✅ Seamless integration with existing skills and workflows
✅ Override capability for explicit agent mentions
✅ Fallback to orchestrator for complex tasks
✅ Stack-aware routing (Vue 3, Flutter, Node.js, etc.)

**Result**: User gets specialist-level responses without needing to know the system architecture.

---

**Implementation**: This skill is integrated into `.claude/rules.md` as TIER 0 (highest priority).
