module.exports = {
  root: true,
  extends: [
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'airbnb',
    'prettier',
  ],
  plugins: [
    'jest',
    'detox',
    '@typescript-eslint',
    'react-native',
    'react',
    'eslint-plugin-react-hooks',
    'react-hooks',
    'prettier',
  ],

  rules: {
    'prettier/prettier': 'error',
    'no-shadow': 'off',
    'no-console': ['warn', { allow: ['tron'] }],
    'spaced-comment': ['error', 'always', { markers: ['/'] }],
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off',
    'no-unused-expressions': 'off',
    // "no-unused-vars": "off",
    // "no-undef": "off",
    'no-use-before-define': 'off',
    'consistent-return': 'off',
    'no-param-reassign': 'off',
    'import/no-extraneous-dependencies': 'off',

    // TypeScript
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-expressions': 'error',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-use-before-define': ['error'],

    // React
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'react/prop-types': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: ['arrow-function'],
        unnamedComponents: 'arrow-function',
      },
    ],
    // React Hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  settings: {
    'react': {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    'import/resolver': {
      'node': {
        paths: ['./src'],
      },
      'babel-module': {},
    },
  },
  env: {
    es6: true,
    jest: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: 'readonly',
  },
};
