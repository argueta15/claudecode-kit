#!/usr/bin/env node

/**
 * Quick Checklist - Development Validation
 *
 * Runs fast validation checks during development:
 * - Security scan
 * - Lint check
 * - TypeScript check
 * - Tests
 * - Basic performance (optional with --url)
 */

import { execSync } from 'child_process';
import { existsSync } from 'fs';
import { join } from 'path';
import { detectPackageManager, getExecCommand } from './utils/package-manager.js';
import { logger } from './utils/logger.js';

class Checklist {
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
   * Check if command exists
   */
  commandExists(cmd) {
    try {
      execSync(`which ${cmd}`, { stdio: 'ignore' });
      return true;
    } catch {
      return false;
    }
  }

  /**
   * 1. Security Scan
   */
  async securityScan() {
    const start = Date.now();
    logger.step('Security Scan');

    try {
      const result = this.runCommand(`${this.pm} audit --audit-level=moderate`, { silent: true });

      if (result.success || result.output.includes('0 vulnerabilities')) {
        logger.success('No vulnerabilities found');
        this.results.passed.push('Security Scan');
      } else {
        logger.warn('Vulnerabilities found - review npm audit output');
        this.results.failed.push('Security Scan');
      }
    } catch (error) {
      logger.error('Security scan failed');
      this.results.failed.push('Security Scan');
    }

    logger.nl();
    return Date.now() - start;
  }

  /**
   * 2. Lint Check
   */
  async lintCheck() {
    const start = Date.now();
    logger.step('Lint Check');

    // Check if ESLint config exists
    const hasEslint = existsSync(join(this.dir, '.eslintrc.json')) ||
                     existsSync(join(this.dir, '.eslintrc.js')) ||
                     existsSync(join(this.dir, 'eslint.config.js'));

    if (!hasEslint) {
      logger.warn('No ESLint config found - skipping');
      this.results.skipped.push('Lint Check');
      logger.nl();
      return Date.now() - start;
    }

    try {
      const result = this.runCommand(`${this.exec} eslint .`, { silent: false });

      if (result.success) {
        logger.success('All files pass linting');
        this.results.passed.push('Lint Check');
      } else {
        logger.error('Lint errors found');
        this.results.failed.push('Lint Check');
      }
    } catch (error) {
      logger.error('Lint check failed');
      this.results.failed.push('Lint Check');
    }

    logger.nl();
    return Date.now() - start;
  }

  /**
   * 3. TypeScript Check
   */
  async typescriptCheck() {
    const start = Date.now();
    logger.step('TypeScript Check');

    // Check if TypeScript is configured
    const hasTsConfig = existsSync(join(this.dir, 'tsconfig.json'));

    if (!hasTsConfig) {
      logger.warn('No tsconfig.json found - skipping');
      this.results.skipped.push('TypeScript Check');
      logger.nl();
      return Date.now() - start;
    }

    try {
      const result = this.runCommand(`${this.exec} tsc --noEmit`, { silent: true });

      if (result.success) {
        logger.success('No type errors');
        this.results.passed.push('TypeScript Check');
      } else {
        logger.error('Type errors found');
        console.log(result.output);
        this.results.failed.push('TypeScript Check');
      }
    } catch (error) {
      logger.error('TypeScript check failed');
      this.results.failed.push('TypeScript Check');
    }

    logger.nl();
    return Date.now() - start;
  }

  /**
   * 4. Test Runner
   */
  async testRunner() {
    const start = Date.now();
    logger.step('Test Runner');

    // Check if package.json has test script
    const packageJson = JSON.parse(
      execSync('cat package.json', { cwd: this.dir, encoding: 'utf8' })
    );

    if (!packageJson.scripts?.test || packageJson.scripts.test.includes('no test')) {
      logger.warn('No test script found - skipping');
      this.results.skipped.push('Test Runner');
      logger.nl();
      return Date.now() - start;
    }

    try {
      const result = this.runCommand(`${this.pm} test`, { silent: false });

      if (result.success) {
        logger.success('All tests passed');
        this.results.passed.push('Test Runner');
      } else {
        logger.error('Tests failed');
        this.results.failed.push('Test Runner');
      }
    } catch (error) {
      logger.error('Test runner failed');
      this.results.failed.push('Test Runner');
    }

    logger.nl();
    return Date.now() - start;
  }

  /**
   * 5. Build Check (if build script exists)
   */
  async buildCheck() {
    const start = Date.now();
    logger.step('Build Check');

    const packageJson = JSON.parse(
      execSync('cat package.json', { cwd: this.dir, encoding: 'utf8' })
    );

    if (!packageJson.scripts?.build) {
      logger.warn('No build script found - skipping');
      this.results.skipped.push('Build Check');
      logger.nl();
      return Date.now() - start;
    }

    try {
      const result = this.runCommand(`${this.pm} run build`, { silent: true });

      if (result.success) {
        logger.success('Build successful');
        this.results.passed.push('Build Check');
      } else {
        logger.error('Build failed');
        this.results.failed.push('Build Check');
      }
    } catch (error) {
      logger.error('Build check failed');
      this.results.failed.push('Build Check');
    }

    logger.nl();
    return Date.now() - start;
  }

  /**
   * Print summary
   */
  printSummary() {
    const duration = ((Date.now() - this.startTime) / 1000).toFixed(1);

    logger.section('SUMMARY');

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
      logger.success('All checks passed! Ready to commit.');
    } else {
      logger.nl();
      logger.error(`${this.results.failed.length} check(s) failed. Fix errors before committing.`);
      process.exit(1);
    }
  }

  /**
   * Run all checks
   */
  async run() {
    console.log('🔍 Running Quick Checklist...\n');

    logger.section('QUICK CHECKS');

    await this.securityScan();
    await this.lintCheck();
    await this.typescriptCheck();
    await this.testRunner();

    if (!this.options.noBuild) {
      await this.buildCheck();
    }

    this.printSummary();
  }
}

// CLI
if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  const dir = args.find(arg => !arg.startsWith('--')) || '.';
  const options = {
    noBuild: args.includes('--no-build'),
    url: args.find(arg => arg.startsWith('--url='))?.split('=')[1]
  };

  const checklist = new Checklist(dir, options);
  checklist.run().catch(error => {
    logger.error(`Checklist failed: ${error.message}`);
    process.exit(1);
  });
}

export default Checklist;
