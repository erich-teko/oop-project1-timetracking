import js from '@eslint/js';
import globals from 'globals';
import { defineConfig, globalIgnores } from 'eslint/config';

/**
 * ESLint für das ganze Repository (NFR-13).
 * Das Frontend ergänzt hier später seinen eigenen Block für React.
 */
export default defineConfig([
  globalIgnores(['**/node_modules/', '**/coverage/', '**/dist/']),

  {
    files: ['**/*.js'],
    extends: [js.configs.recommended],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      eqeqeq: 'error',
      'no-var': 'error',
      'prefer-const': 'error',
    },
  },

  {
    files: ['backend/**/*.js', '*.config.js'],
    languageOptions: {
      globals: globals.node,
    },
  },
]);
