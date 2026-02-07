/**
 * Colored console logger utility
 */

const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',

  // Foreground colors
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
};

export const logger = {
  /**
   * Log info message (blue)
   */
  info(message) {
    console.log(`${colors.blue}ℹ${colors.reset} ${message}`);
  },

  /**
   * Log success message (green)
   */
  success(message) {
    console.log(`${colors.green}✓${colors.reset} ${message}`);
  },

  /**
   * Log warning message (yellow)
   */
  warn(message) {
    console.log(`${colors.yellow}⚠${colors.reset} ${message}`);
  },

  /**
   * Log error message (red)
   */
  error(message) {
    console.log(`${colors.red}✗${colors.reset} ${message}`);
  },

  /**
   * Log section header
   */
  section(title) {
    console.log(`\n${colors.bright}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}`);
    console.log(`${colors.bright} ${title}${colors.reset}`);
    console.log(`${colors.bright}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}\n`);
  },

  /**
   * Log step
   */
  step(name, duration = null) {
    const time = duration ? `${colors.dim}[${duration}]${colors.reset}` : '';
    console.log(`${colors.cyan}▶${colors.reset} ${name} ${time}`);
  },

  /**
   * Log empty line
   */
  nl() {
    console.log('');
  }
};

export default logger;
