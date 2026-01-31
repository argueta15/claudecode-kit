---
name: checklist
description: Quick validation script for development - security, lint, tests, UX, SEO checks
allowed-tools: Bash, Read
version: 1.0
priority: HIGH
---

# Checklist - Quick Validation

Fast validation checks for development workflow. Run before commits.

## What It Checks

1. **Security Scan** - Dependency vulnerabilities, hardcoded secrets
2. **Lint Check** - ESLint, Prettier, TypeScript errors
3. **Schema Validation** - Database schema integrity
4. **Test Runner** - Run unit tests
5. **UX Audit** - Accessibility, responsiveness
6. **SEO Check** - Meta tags, semantic HTML

## Usage

### From Command Line

```bash
# Basic check (current directory)
node .agent/scripts/checklist.js .

# Or use npm script
npm run checklist

# With flags
node .agent/scripts/checklist.js . --no-build

# Specific directory
node .agent/scripts/checklist.js ./src
```

### From Claude Code

```bash
# Quick validation
claude /checklist

# With URL
claude /checklist --url http://localhost:3000
```

## How To Invoke

When user requests validation, use Bash tool:

```javascript
Bash(
    command="node .agent/scripts/checklist.js .",
    description="Run quick validation checks"
)
```

Or use npm script:

```javascript
Bash(
    command="npm run checklist",
    description="Run quick validation checks"
)
```

With flags:

```javascript
Bash(
    command="node .agent/scripts/checklist.js . --no-build",
    description="Run validation without build check"
)
```

## Output Format

```
🔍 Running Quick Checklist...

✅ Security Scan
   No vulnerabilities found

✅ Lint Check
   All files pass

✅ Schema Validation
   Database schema valid

✅ Test Runner
   42 tests passed

✅ UX Audit
   Accessibility: 95/100
   Responsive: ✓

✅ SEO Check
   Meta tags: ✓
   Semantic HTML: ✓

📊 Overall: PASS (6/6 checks)
```

## When To Use

- **Before git commit** - Ensure code quality
- **During development** - Quick feedback loop
- **Pull request prep** - Verify changes
- **Feature completion** - Final check

## Integration With Workflows

### With /test Workflow

```markdown
1. Run tests: claude /test
2. Validate: claude /checklist
3. Commit if passing
```

### With /deploy Workflow

```markdown
1. Quick check: claude /checklist
2. If passing → Full verification: claude /verify-all
3. Deploy if both pass
```

## Script Location

`.agent/scripts/checklist.py`

## Requirements

- Python 3.8+
- Project dependencies installed
- Development server running (for URL checks)

## Common Issues

**"Python not found"**
- Ensure Python 3 is installed
- Use `python3` instead of `python`

**"Module not found"**
- Install project dependencies: `npm install` or `pip install -r requirements.txt`

**"Tests failed"**
- Fix failing tests before committing
- Review test output for details

**"Lint errors"**
- Run `npm run lint:fix` or `npx eslint . --fix`
- Fix remaining manual errors

## Example Workflow

```bash
# 1. Make changes to code
# 2. Run quick validation
claude /checklist

# 3. If errors found, fix them
# 4. Run again until passing
# 5. Commit changes
git add .
git commit -m "feat: add user profile"
```

## Customization

Edit `.agent/scripts/checklist.py` to:
- Add/remove checks
- Adjust thresholds
- Customize output format
- Integrate with custom tools

## Performance

- **Runtime**: ~30 seconds
- **Fast feedback** for development
- **Skips** slow checks (Lighthouse, E2E)
- **Ideal** for pre-commit hooks

---

**Use this for rapid development validation. For comprehensive pre-deploy checks, use /verify-all skill.**
