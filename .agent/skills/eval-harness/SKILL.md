---
name: eval-harness
description: Formal evaluation framework for Claude Code sessions implementing eval-driven development (EDD) principles. Measure quality of outputs, track regressions, define success criteria before coding.
tools: Read, Write, Edit, Bash, Grep, Glob
allowed-tools: Read, Write, Edit, Bash, Grep, Glob
version: 1.0
priority: HIGH
---

# Eval Harness - Eval-Driven Development

A formal evaluation framework for Claude Code sessions, implementing eval-driven development (EDD) principles.

## Philosophy

**Eval-Driven Development treats evals as the "unit tests of AI development":**
- Define expected behavior BEFORE implementation
- Run evals continuously during development
- Track regressions with each change
- Use pass@k metrics for reliability measurement

> Just like TDD for traditional code, EDD ensures Claude Code outputs meet defined criteria.

---

## Eval Types

### Capability Evals
Test if Claude can do something it couldn't before:

```markdown
[CAPABILITY EVAL: feature-name]
Task: Description of what Claude should accomplish
Success Criteria:
  - [ ] Criterion 1
  - [ ] Criterion 2
  - [ ] Criterion 3
Expected Output: Description of expected result
```

### Regression Evals
Ensure changes don't break existing functionality:

```markdown
[REGRESSION EVAL: feature-name]
Baseline: SHA or checkpoint name
Tests:
  - existing-test-1: PASS/FAIL
  - existing-test-2: PASS/FAIL
  - existing-test-3: PASS/FAIL
Result: X/Y passed (previously Y/Y)
```

---

## Grader Types

### 1. Code-Based Grader (Preferred)
Deterministic checks using code:

```bash
# Check if file contains expected pattern
grep -q "export function handleAuth" src/auth.ts && echo "PASS" || echo "FAIL"

# Check if tests pass
npm test -- --testPathPattern="auth" && echo "PASS" || echo "FAIL"

# Check if build succeeds
npm run build && echo "PASS" || echo "FAIL"

# Check type safety
npx tsc --noEmit && echo "PASS" || echo "FAIL"
```

### 2. Model-Based Grader
Use Claude to evaluate open-ended outputs:

```markdown
[MODEL GRADER PROMPT]
Evaluate the following code change:
1. Does it solve the stated problem?
2. Is it well-structured?
3. Are edge cases handled?
4. Is error handling appropriate?

Score: 1-5 (1=poor, 5=excellent)
Reasoning: [explanation]
```

### 3. Human Grader
Flag for manual review:

```markdown
[HUMAN REVIEW REQUIRED]
Change: Description of what changed
Reason: Why human review is needed
Risk Level: LOW/MEDIUM/HIGH
```

---

## Metrics

### pass@k
**"At least one success in k attempts"**
- `pass@1`: First attempt success rate
- `pass@3`: Success within 3 attempts
- Typical target: `pass@3 > 90%`

### pass^k
**"All k trials succeed"**
- Higher bar for reliability
- `pass^3`: 3 consecutive successes
- Use for critical paths

---

## Eval Workflow

### Phase 1: Define (Before Coding)

```markdown
## EVAL DEFINITION: feature-xyz

### Capability Evals
1. Can create new user account
2. Can validate email format
3. Can hash password securely

### Regression Evals
1. Existing login still works
2. Session management unchanged
3. Logout flow intact

### Success Metrics
- pass@3 > 90% for capability evals
- pass^3 = 100% for regression evals
```

### Phase 2: Implement
Write code to pass the defined evals.

### Phase 3: Evaluate

```bash
# Run capability evals
[Run each capability eval, record PASS/FAIL]

# Run regression evals
npm test -- --testPathPattern="existing"

# Generate report
```

### Phase 4: Report

```markdown
EVAL REPORT: feature-xyz
========================

Capability Evals:
  create-user:     PASS (pass@1)
  validate-email:  PASS (pass@2)
  hash-password:   PASS (pass@1)
  Overall:         3/3 passed

Regression Evals:
  login-flow:      PASS
  session-mgmt:    PASS
  logout-flow:     PASS
  Overall:         3/3 passed

Metrics:
  pass@1: 67% (2/3)
  pass@3: 100% (3/3)

Status: READY FOR REVIEW
```

---

## Integration with Claude Code

### Commands Pattern

**Define evals before coding:**
```bash
claude "Define evals for user authentication feature"
```

**Check evals during development:**
```bash
claude "Check authentication evals"
```

**Generate final report:**
```bash
claude "Generate eval report for authentication"
```

---

## Eval Storage

Store evals in project:

```
.claude/
  evals/
    feature-xyz.md      # Eval definition
    feature-xyz.log     # Eval run history
    baseline.json       # Regression baselines
```

---

## Best Practices

1. **Define evals BEFORE coding** - Forces clear thinking about success criteria
2. **Run evals frequently** - Catch regressions early
3. **Track pass@k over time** - Monitor reliability trends
4. **Use code graders when possible** - Deterministic > probabilistic
5. **Human review for security** - Never fully automate security checks
6. **Keep evals fast** - Slow evals don't get run
7. **Version evals with code** - Evals are first-class artifacts

---

## Complete Example: Adding Authentication

```markdown
## EVAL: add-authentication

### Phase 1: Define (10 min)

Capability Evals:
- [ ] User can register with email/password
- [ ] User can login with valid credentials
- [ ] Invalid credentials rejected with proper error
- [ ] Sessions persist across page reloads
- [ ] Logout clears session

Regression Evals:
- [ ] Public routes still accessible
- [ ] API responses unchanged
- [ ] Database schema compatible

Graders:
- Code grader: npm test (unit tests)
- Code grader: npm run build (TypeScript)
- Model grader: Security review of auth code
- Human grader: Review token expiration logic

### Phase 2: Implement (varies)
[Write authentication code]

### Phase 3: Evaluate

Code Graders:
```bash
npm test -- auth.test.ts          # PASS
npm run build                      # PASS
grep -q "bcrypt" package.json     # PASS (secure hashing)
```

Model Grader:
```
Prompt: "Review authentication code for security best practices"
Score: 4/5
Reasoning: Uses bcrypt, JWT properly, but missing rate limiting
```

Human Grader:
```
FLAGGED: Token expiration set to 24h - confirm with product team
```

### Phase 4: Report

```
EVAL REPORT: add-authentication
================================

Capability Evals:
  user-registration:   PASS (pass@1)
  user-login:          PASS (pass@2)
  invalid-credentials: PASS (pass@1)
  session-persistence: PASS (pass@3)
  logout:              PASS (pass@1)
  Overall:             5/5 passed

Regression Evals:
  public-routes:       PASS
  api-responses:       PASS
  database-schema:     PASS
  Overall:             3/3 passed

Metrics:
  pass@1: 80% (4/5)
  pass@3: 100% (5/5)

Security Review:
  Score: 4/5
  Flagged: Token expiration needs confirmation

Status: READY FOR REVIEW (pending token expiration confirmation)
```

---

## When to Use Eval Harness

**Use for:**
- Critical features (auth, payments, data handling)
- Features with complex requirements
- Features prone to regressions
- When you need to prove quality to stakeholders

**Don't use for:**
- Quick prototypes or experiments
- One-off scripts
- Documentation updates
- Simple bug fixes

---

## Eval Templates

### Template: API Endpoint

```markdown
EVAL: new-api-endpoint

Capability:
- [ ] Returns correct data format
- [ ] Handles all query parameters
- [ ] Returns appropriate status codes
- [ ] Validates input data

Regression:
- [ ] Other endpoints still work
- [ ] Database queries performant
- [ ] Auth middleware still applies

Graders:
- npm test -- api.test.ts
- curl localhost:3000/api/endpoint | jq
- npx tsc --noEmit
```

### Template: UI Component

```markdown
EVAL: new-component

Capability:
- [ ] Renders correctly
- [ ] Handles user interactions
- [ ] Displays loading states
- [ ] Shows error states
- [ ] Accessible (ARIA)

Regression:
- [ ] Other components still render
- [ ] Styling consistent
- [ ] Performance not degraded

Graders:
- npm test -- Component.test.tsx
- npm run build (bundle size)
- Lighthouse accessibility score
```

---

**Remember:** Evals are not just tests - they're a development methodology. Define success criteria first, then code to meet them. Track metrics over time to improve reliability.
