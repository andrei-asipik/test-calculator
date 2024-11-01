module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': 'warn',
    'no-console': 'warn',
    eqeqeq: 'error',
    curly: 'error',
    'no-var': 'error',
    'prefer-const': 'warn',
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    'no-multiple-empty-lines': ['warn', { max: 1, maxEOF: 0 }],
    'prettier/prettier': 'error',
  },
};
