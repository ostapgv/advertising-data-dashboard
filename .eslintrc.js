module.exports = {
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/recommended',
    "plugin:import/errors",
    "plugin:import/typescript",
    'plugin:prettier/recommended',
    'plugin:jest/recommended',
  ],
  plugins: ['react', 'import', '@typescript-eslint', 'prettier', 'jest'],
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  rules: {
    quotes: [2, 'single', { avoidEscape: true }],
    'linebreak-style': 0,
    "@typescript-eslint/require-await": 0,
    'prettier/prettier': [
      1,
      {
        semi: true,
        trailingComma: 'all',
        singleQuote: true,
        printWidth: 120,
        tabWidth: 2,
        endOfLine: 'auto',
      },
    ],
  },
  ignorePatterns: ['/.eslintrc.js'],
};
