// @ts-check

import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig(
  {
    files: ["./src/**/*.{js,ts}"],
    linterOptions: {
      reportUnusedDisableDirectives: "error"
    },
    extends: [
      js.configs.recommended,
      tseslint.configs.strict,
      tseslint.configs.stylistic,
    ],
    rules: {
      "@typescript-eslint/no-extraneous-class": "off"
    }
  },
  {
    files: ["./src/**/*.action.{js,ts}"],
    rules: {
      "@typescript-eslint/no-namespace": "off"
    }
  }
);