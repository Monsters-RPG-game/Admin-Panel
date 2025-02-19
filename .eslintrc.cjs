module.exports = {
  env: {
    commonjs: true,
    node: false,
    browser: true,
    es6: true,
  },
  globals: {
    React: true,
    expect: true,
    JSX: true,
  },
  extends: [
    'airbnb',
    'erb',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'eslint-plugin-prettier', 'react', 'jsx-a11y'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    createDefaultProgram: true,
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
  rules: {
    'class-methods-use-this': 0,
    eqeqeq: 2,
    'import/extensions': [
      2,
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-cycle': 2,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 2,
    'import/prefer-default-export': 2,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/control-has-associated-label': 0,
    'max-classes-per-file': 2,
    'no-await-in-loop': 2,
    'no-console': 0,
    'no-constructor-return': 0,
    'no-invalid-this': 2,
    'no-nested-ternary': 0,
    'no-non-null-assertion': 0,
    'no-param-reassign': [2, { props: false }],
    'no-plusplus': 0,
    'no-restricted-modules': 2,
    'no-shadow': 0,
    'no-throw-literal': 2,
    'no-trailing-spaces': 2,
    'no-underscore-dangle': 0,
    'no-var': 2,
    'object-curly-newline': [
      2,
      {
        consistent: true,
      },
    ],
    'prefer-const': 2,
    'prefer-template': 2,
    'prettier/prettier': 2,
    'react/react-in-jsx-scope': 2,
    'react/function-component-definition': [
      'error',
      {
        namedComponents: ['function-declaration', 'arrow-function'],
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.tsx'],
      },
    ],
    'react/prop-types': 0,
    'require-jsdoc': 2,
    semi: 2,
    '@typescript-eslint/consistent-type-assertions': [
      2,
      {
        assertionStyle: 'as',
      },
    ],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/consistent-type-imports': [
      2,
      {
        prefer: 'type-imports',
        disallowTypeAnnotations: false,
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 2,
    '@typescript-eslint/explicit-module-boundary-types': 2,
    '@typescript-eslint/naming-convention': [
      2,
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true,
        },
      },
      {
        selector: 'enum',
        format: ['PascalCase'],
        custom: {
          regex: '^E[A-Z]',
          match: true,
        },
      },
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'classProperty',
        modifiers: ['private'],
        format: ['camelCase'],
        leadingUnderscore: 'require',
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase'],
      },
    ],
    '@typescript-eslint/no-dynamic-delete': 0,
    '@typescript-eslint/no-empty-interface': 2,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-explicit-any': 2,
    '@typescript-eslint/no-extraneous-class': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-shadow': 0,
    '@typescript-eslint/no-unnecessary-condition': 0,
    '@typescript-eslint/no-unsafe-member-access': 0,
    '@typescript-eslint/no-unused-expressions': 0,
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-this-alias': [
      2,
      {
        allowedNames: ['self'],
      },
    ],
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/prefer-nullish-coalescing': 2,
    '@typescript-eslint/typedef': 2,
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
      },
    ],
  },
};
