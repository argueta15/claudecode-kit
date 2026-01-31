/**
 * Package Manager Detection Utility
 * Detects npm, pnpm, yarn, or bun based on lock files
 */

import { existsSync } from 'fs';
import { join } from 'path';

/**
 * Detect which package manager is being used in a directory
 * @param {string} dir - Directory to check (default: current directory)
 * @returns {string} - Package manager name: 'bun', 'pnpm', 'yarn', or 'npm'
 */
export function detectPackageManager(dir = '.') {
  // Check for lock files in order of specificity
  if (existsSync(join(dir, 'bun.lockb'))) {
    return 'bun';
  }

  if (existsSync(join(dir, 'pnpm-lock.yaml'))) {
    return 'pnpm';
  }

  if (existsSync(join(dir, 'yarn.lock'))) {
    return 'yarn';
  }

  // Default to npm
  return 'npm';
}

/**
 * Get the run command for the detected package manager
 * @param {string} dir - Directory to check
 * @returns {string} - Run command (e.g., 'npm run', 'pnpm', 'yarn', 'bun')
 */
export function getRunCommand(dir = '.') {
  const pm = detectPackageManager(dir);

  switch (pm) {
    case 'bun':
      return 'bun';
    case 'pnpm':
      return 'pnpm';
    case 'yarn':
      return 'yarn';
    default:
      return 'npm run';
  }
}

/**
 * Get install command for the detected package manager
 * @param {string} dir - Directory to check
 * @returns {string} - Install command
 */
export function getInstallCommand(dir = '.') {
  const pm = detectPackageManager(dir);
  return `${pm} install`;
}

/**
 * Get execute command for the detected package manager
 * @param {string} dir - Directory to check
 * @returns {string} - Execute command (npx, pnpm exec, etc.)
 */
export function getExecCommand(dir = '.') {
  const pm = detectPackageManager(dir);

  switch (pm) {
    case 'bun':
      return 'bunx';
    case 'pnpm':
      return 'pnpm exec';
    case 'yarn':
      return 'yarn';
    default:
      return 'npx';
  }
}

export default {
  detectPackageManager,
  getRunCommand,
  getInstallCommand,
  getExecCommand
};
