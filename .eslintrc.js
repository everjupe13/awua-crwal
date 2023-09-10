module.exports = {
  parser: '@typescript-eslint/parser',

  root: true,

  env: { 
    browser: true,
    es2020: true
  },

  ignorePatterns: ['.eslintrc.js'],

  extends: [
    'next/core-web-vitals',

    'plugin:@typescript-eslint/recommended',
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended',
    'prettier'
  ],

  plugins: [
    '@typescript-eslint/eslint-plugin',
    'simple-import-sort',
    'import',
    'prettier'
  ],

  rules: {
    'no-console': 'warn',
    curly: 'error',

    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    'unicorn/prevent-abbreviations': 'off',
    'unicorn/filename-case': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/no-null': 'off',
    'unicorn/no-useless-undefined': 'off',

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_'
      }
    ],

    'no-restricted-syntax': [
      'error',
      {
        selector: 'ImportDeclaration[source.value="lodash"]',
        message: 'Do not import huge vanilla lodash. Use lodash-es'
      }
    ],

    'no-restricted-syntax': [
      'error',
      {
        selector: 'TSInterfaceDeclaration',
        message: "Don't declare interface. Use type instead"
      }
    ],

    'import/order': 'off',
    'simple-import-sort/imports': 'error',
    'import/newline-after-import': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error'
  }
}