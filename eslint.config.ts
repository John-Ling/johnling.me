import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true }
      }
    },
    plugins: {
      js,
      react: pluginReact
    },
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      pluginReact.configs.flat.recommended
    ],
    rules: {
      // ✅ Disable the outdated rule
      'react/react-in-jsx-scope': 'off',
      // (Optional) helps with TS + React detection
      'react/jsx-uses-react': 'off',
      'react/jsx-uses-vars': 'warn'
    },
    settings: {
      react: {
        version: 'detect' // auto-detect React version
      }
    }
  }
]);
