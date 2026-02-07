---
name: verify-all
description: Comprehensive pre-deployment validation - all checks plus Lighthouse, E2E, bundle analysis
allowed-tools: Bash, Read
version: 1.0
priority: CRITICAL
---

# Verify All - Comprehensive Validation

Complete validation suite for production deployment. Run before deploy.

## What It Checks

### Everything from Checklist
1. Security scan
2. Lint check
3. Schema validation
4. Test runner
5. UX audit
6. SEO check

### Plus Production Checks
7. **Lighthouse Audit** - Performance, accessibility, PWA
8. **E2E Tests** - Playwright end-to-end testing
9. **Bundle Analysis** - Size, tree-shaking, dependencies
10. **Mobile Audit** - Responsive, touch targets
11. **i18n Check** - Translation coverage

## Usage

### From Command Line

```bash
# Full verification (requires URL)
node .agent/scripts/verify-all.js . --url=http://localhost:3000

# Skip E2E tests (faster)
node .agent/scripts/verify-all.js . --url=http://localhost:3000 --no-e2e

# Skip Lighthouse
node .agent/scripts/verify-all.js . --url=http://localhost:3000 --no-lighthouse

# Production URL
node .agent/scripts/verify-all.js . --url=https://staging.example.com
```

### From Claude Code

```bash
# Full verification
claude /verify-all --url http://localhost:3000

# Skip E2E
claude /verify-all --url http://localhost:3000 --no-e2e
```

## How To Invoke

When user requests comprehensive validation:

```javascript
Bash(
    command="node .agent/scripts/verify-all.js . --url=http://localhost:3000",
    description="Run comprehensive pre-deploy validation",
    timeout=300000  # 5 minutes for E2E tests
)
```

Skip E2E for faster feedback:

```javascript
Bash(
    command="node .agent/scripts/verify-all.js . --url=http://localhost:3000 --no-e2e",
    description="Run validation without E2E tests",
    timeout=120000  # 2 minutes
)
```

Or use npm script:

```javascript
Bash(
    command="npm run verify",
    description="Run comprehensive validation"
)
```

## Output Format

```
🔍 Running Comprehensive Verification...

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 QUICK CHECKS (from checklist)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ Security Scan        [0.5s]
✅ Lint Check          [1.2s]
✅ Schema Validation   [0.3s]
✅ Test Runner         [5.4s]
✅ UX Audit            [0.8s]
✅ SEO Check           [0.4s]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 PRODUCTION CHECKS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🚀 Lighthouse Audit    [15.3s]
   Performance: 95/100
   Accessibility: 100/100
   Best Practices: 100/100
   SEO: 98/100
   PWA: 90/100

🎭 E2E Tests           [45.2s]
   ✓ Login flow
   ✓ Checkout process
   ✓ User profile
   12 scenarios passed

📦 Bundle Analysis     [3.1s]
   Main bundle: 245 KB (target: <250 KB)
   Vendor: 520 KB
   Tree-shaking: ✓

📱 Mobile Audit        [2.4s]
   Viewport: ✓
   Touch targets: ✓
   Mobile score: 98/100

🌍 i18n Check          [0.6s]
   Coverage: 100% (en, es, fr)
   Missing keys: 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ All checks passed (11/11)
⏱️  Total time: 74.2 seconds

🚀 Ready for deployment!
```

## When To Use

- **Before production deploy** - Final validation gate
- **Staging verification** - Ensure staging is production-ready
- **Release candidates** - Validate before tagging release
- **Critical updates** - Double-check major changes

## Integration With Workflows

### Pre-Deploy Workflow

```markdown
1. Quick check: claude /checklist
2. If passing → Full verification: claude /verify-all
3. If both pass → Deploy: claude /deploy production
```

### CI/CD Integration

```yaml
# .github/workflows/deploy.yml
- name: Comprehensive Verification
  run: python .agent/scripts/verify_all.py . --url http://localhost:3000
```

## Script Location

`.agent/scripts/verify_all.py`

## Requirements

- Python 3.8+
- Node.js 18+ (for Lighthouse)
- Playwright installed (for E2E)
- Project dependencies installed
- **Server must be running** at specified URL

## Flags

- `--url <URL>` - **Required** - URL to test
- `--no-e2e` - Skip E2E tests (faster)
- `--no-lighthouse` - Skip Lighthouse audit
- `--mobile-only` - Mobile checks only

## Common Issues

**"Server not responding"**
- Start dev server: `npm run dev`
- Verify URL is accessible: `curl http://localhost:3000`

**"Playwright not installed"**
- Install Playwright: `npx playwright install`
- Or skip E2E: `--no-e2e`

**"Lighthouse fails"**
- Ensure Chrome/Chromium installed
- Or skip Lighthouse: `--no-lighthouse`

**"Bundle too large"**
- Analyze: `npm run build -- --analyze`
- Optimize imports, lazy load routes
- Remove unused dependencies

**"E2E timeout"**
- Server too slow - optimize
- Network issues - check connection
- Increase timeout in script

## Example Workflow

```bash
# 1. Start development server
npm run dev

# 2. Run quick validation
claude /checklist

# 3. If passing, run full verification
claude /verify-all --url http://localhost:3000

# 4. Fix any issues found

# 5. Deploy when all checks pass
claude /deploy production
```

## Performance

- **Runtime**: ~1-2 minutes (with --no-e2e)
- **Runtime**: ~2-5 minutes (full with E2E)
- **Comprehensive** - catches production issues
- **Production-ready** gate before deploy

## Customization

Edit `.agent/scripts/verify_all.py` to:
- Add custom checks
- Adjust thresholds (Lighthouse scores, bundle size)
- Configure E2E scenarios
- Integrate with monitoring

## Best Practices

1. **Always run before production deploy**
2. **Run on staging URL first**
3. **Fix all failures** - don't deploy with failures
4. **Keep bundle sizes small** - monitor trends
5. **Maintain high Lighthouse scores** - user experience matters

## Comparison

| Check | Checklist | Verify All |
|-------|-----------|------------|
| Security | ✅ | ✅ |
| Lint | ✅ | ✅ |
| Tests | ✅ | ✅ |
| UX | ✅ | ✅ |
| SEO | ✅ | ✅ |
| Lighthouse | ❌ | ✅ |
| E2E | ❌ | ✅ |
| Bundle | ❌ | ✅ |
| Mobile | ❌ | ✅ |
| i18n | ❌ | ✅ |
| **Time** | ~30s | ~2-5min |
| **Use** | Dev | Deploy |

---

**This is your production readiness gate. Do not deploy without passing verify-all.**
