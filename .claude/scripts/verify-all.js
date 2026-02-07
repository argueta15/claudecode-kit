#!/usr/bin/env node

/**
 * Verify All - Comprehensive Pre-Deploy Validation
 *
 * Runs complete validation before deployment:
 * - All checks from checklist.js
 * - Lighthouse audit
 * - E2E tests (optional with --no-e2e)
 * - Bundle analysis
 * - Additional production checks
 */

import { execSync } from 'child_process';
import { existsSync } from 'fs';
import { join } from 'path';
import { detectPackageManager, getExecCommand } from './utils/package-manager.js';
import { logger } from './utils/logger.js';
import Checklist from './checklist.js';

class VerifyAll {
  constructor(dir = '.', options = {}) {
    this.dir = dir;
    this.options = options;
    this.pm = detectPackageManager(dir);
    this.exec = getExecCommand(dir);
    this.results = {
      passed: [],
      failed: [],
      skipped: []
    };
    this.startTime = Date.now();

    if (!options.url) {
      logger.error('--url parameter is required for verification');
      logger.info('Example: node verify-all.js . --url http://localhost:3000');
      process.exit(1);
    }
  }

  /**
   * Run command and capture result
   */
  runCommand(cmd, options = {}) {
    try {
      const result = execSync(cmd, {
        cwd: this.dir,
        encoding: 'utf8',
        stdio: options.silent ? 'pipe' : 'inherit',
        ...options
      });
      return { success: true, output: result };
    } catch (error) {
      return { success: false, error, output: error.stdout || error.stderr };
    }
  }

  /**
   * Run checklist first
   */
  async runChecklist() {
    logger.section('QUICK CHECKS (from checklist)');

    const checklist = new Checklist(this.dir, { noBuild: false });

    try {
      await checklist.securityScan();
      await checklist.lintCheck();
      await checklist.typescriptCheck();
      await checklist.testRunner();
      await checklist.buildCheck();

      // Aggregate results
      this.results.passed.push(...checklist.results.passed);
      this.results.failed.push(...checklist.results.failed);
      this.results.skipped.push(...checklist.results.skipped);
    } catch (error) {
      logger.error('Checklist failed');
      this.results.failed.push('Checklist');
    }
  }

  /**
   * Lighthouse Audit
   */
  async lighthouseAudit() {
    const start = Date.now();
    logger.step('Lighthouse Audit');

    // Check if lighthouse is installed
    try {
      execSync('which lighthouse', { stdio: 'ignore' });
    } catch {
      logger.warn('Lighthouse not installed - skipping');
      logger.info('Install with: npm install -g lighthouse');
      this.results.skipped.push('Lighthouse Audit');
      logger.nl();
      return;
    }

    try {
      // Run lighthouse
      const result = this.runCommand(
        `lighthouse ${this.options.url} --output=json --output-path=/tmp/lighthouse.json --chrome-flags="--headless" --quiet`,
        { silent: true }
      );

      if (result.success) {
        // Parse results
        const report = JSON.parse(execSync('cat /tmp/lighthouse.json', { encoding: 'utf8' }));
        const categories = report.categories;

        const scores = {
          performance: Math.round(categories.performance.score * 100),
          accessibility: Math.round(categories.accessibility.score * 100),
          'best-practices': Math.round(categories['best-practices'].score * 100),
          seo: Math.round(categories.seo.score * 100),
          pwa: Math.round(categories.pwa.score * 100)
        };

        console.log(`   Performance: ${scores.performance}/100`);
        console.log(`   Accessibility: ${scores.accessibility}/100`);
        console.log(`   Best Practices: ${scores['best-practices']}/100`);
        console.log(`   SEO: ${scores.seo}/100`);
        console.log(`   PWA: ${scores.pwa}/100`);

        // Check if scores meet thresholds
        const allPassed = scores.performance >= 80 &&
                         scores.accessibility >= 90 &&
                         scores['best-practices'] >= 90 &&
                         scores.seo >= 80;

        if (allPassed) {
          logger.success('Lighthouse scores meet thresholds');
          this.results.passed.push('Lighthouse Audit');
        } else {
          logger.warn('Some Lighthouse scores below thresholds');
          this.results.failed.push('Lighthouse Audit');
        }
      } else {
        logger.error('Lighthouse audit failed');
        this.results.failed.push('Lighthouse Audit');
      }
    } catch (error) {
      logger.error(`Lighthouse error: ${error.message}`);
      this.results.failed.push('Lighthouse Audit');
    }

    logger.nl();
  }

  /**
   * E2E Tests
   */
  async e2eTests() {
    const start = Date.now();
    logger.step('E2E Tests');

    if (this.options.noE2e) {
      logger.warn('E2E tests skipped (--no-e2e flag)');
      this.results.skipped.push('E2E Tests');
      logger.nl();
      return;
    }

    // Check if playwright is configured
    const hasPlaywright = existsSync(join(this.dir, 'playwright.config.js')) ||
                         existsSync(join(this.dir, 'playwright.config.ts'));

    if (!hasPlaywright) {
      logger.warn('No Playwright config found - skipping');
      this.results.skipped.push('E2E Tests');
      logger.nl();
      return;
    }

    try {
      const result = this.runCommand(`${this.exec} playwright test`, { silent: false });

      if (result.success) {
        logger.success('All E2E scenarios passed');
        this.results.passed.push('E2E Tests');
      } else {
        logger.error('E2E tests failed');
        this.results.failed.push('E2E Tests');
      }
    } catch (error) {
      logger.error('E2E tests failed');
      this.results.failed.push('E2E Tests');
    }

    logger.nl();
  }

  /**
   * Bundle Analysis
   */
  async bundleAnalysis() {
    const start = Date.now();
    logger.step('Bundle Analysis');

    // Check if build exists
    const commonBuildDirs = ['dist', 'build', '.next', '.output'];
    const buildDir = commonBuildDirs.find(dir => existsSync(join(this.dir, dir)));

    if (!buildDir) {
      logger.warn('No build directory found - skipping');
      this.results.skipped.push('Bundle Analysis');
      logger.nl();
      return;
    }

    try {
      // Simple size check
      const result = this.runCommand(`du -sh ${buildDir}`, { silent: true });

      if (result.success) {
        const size = result.output.trim().split('\t')[0];
        console.log(`   Bundle size: ${size}`);

        logger.success('Bundle analyzed');
        this.results.passed.push('Bundle Analysis');
      } else {
        logger.error('Bundle analysis failed');
        this.results.failed.push('Bundle Analysis');
      }
    } catch (error) {
      logger.error('Bundle analysis failed');
      this.results.failed.push('Bundle Analysis');
    }

    logger.nl();
  }

  /**
   * Accessibility Check
   */
  async accessibilityCheck() {
    const start = Date.now();
    logger.step('Accessibility Check');

    // Check with axe-core if installed
    try {
      execSync('which axe', { stdio: 'ignore' });

      const result = this.runCommand(`axe ${this.options.url}`, { silent: true });

      if (result.success && result.output.includes('0 violations')) {
        logger.success('No accessibility violations');
        this.results.passed.push('Accessibility Check');
      } else {
        logger.warn('Accessibility violations found');
        this.results.failed.push('Accessibility Check');
      }
    } catch {
      logger.warn('axe-core not installed - using Lighthouse accessibility score');
      this.results.skipped.push('Accessibility Check');
    }

    logger.nl();
  }

  /**
   * Print final summary
   */
  printSummary() {
    const duration = ((Date.now() - this.startTime) / 1000).toFixed(1);

    logger.section('FINAL SUMMARY');

    console.log(`✅ Passed: ${this.results.passed.length}`);
    if (this.results.passed.length > 0) {
      this.results.passed.forEach(check => console.log(`   • ${check}`));
    }

    if (this.results.failed.length > 0) {
      console.log(`\n❌ Failed: ${this.results.failed.length}`);
      this.results.failed.forEach(check => console.log(`   • ${check}`));
    }

    if (this.results.skipped.length > 0) {
      console.log(`\n⊘ Skipped: ${this.results.skipped.length}`);
      this.results.skipped.forEach(check => console.log(`   • ${check}`));
    }

    console.log(`\n⏱️  Total time: ${duration}s`);

    if (this.results.failed.length === 0) {
      logger.nl();
      logger.success('🚀 All checks passed! Ready for deployment.');
    } else {
      logger.nl();
      logger.error(`❌ ${this.results.failed.length} check(s) failed. Fix errors before deploying.`);
      process.exit(1);
    }
  }

  /**
   * Run all verification checks
   */
  async run() {
    console.log('🔍 Running Comprehensive Verification...\n');

    // Phase 1: Quick checks
    await this.runChecklist();

    // Phase 2: Production checks
    logger.section('PRODUCTION CHECKS');

    await this.lighthouseAudit();
    await this.e2eTests();
    await this.bundleAnalysis();
    await this.accessibilityCheck();

    this.printSummary();
  }
}

// CLI
if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  const dir = args.find(arg => !arg.startsWith('--')) || '.';
  const options = {
    url: args.find(arg => arg.startsWith('--url='))?.split('=')[1],
    noE2e: args.includes('--no-e2e'),
    noLighthouse: args.includes('--no-lighthouse')
  };

  const verifyAll = new VerifyAll(dir, options);
  verifyAll.run().catch(error => {
    logger.error(`Verification failed: ${error.message}`);
    process.exit(1);
  });
}

export default VerifyAll;
