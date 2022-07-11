module.exports = {
  root: true,
  ignorePatterns: ['.eslintrc.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.base.json', './packages/*/tsconfig.json'],
  },
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.jsx', '.tsx'],
      },
    },
  },
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
        jsx: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.stories.tsx',
          '**/.storybook/*.@(js|ts)?(x)',
          '**/*.@(spec|test|e2e-spec).@(js|ts)?(x)',
          '**/jest.*.@(js|ts)?(x)',
          '**/babel.*.@(js|ts)?(x)',
        ],
      },
    ],
  },
  overrides: [
    // Typescript+TsReact specific rules
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        "@typescript-eslint/no-unused-vars": [
          1,
          {
            "args": "all",
            "argsIgnorePattern": "^_",
            "varsIgnorePattern": "^__"
          }
        ],
        "@typescript-eslint/no-var-requires": "warn",
        "@typescript-eslint/no-use-before-define": 2,
        "@typescript-eslint/no-shadow": "error",
        "@typescript-eslint/explicit-function-return-type": [
          "error",
          {
            "allowExpressions": true
          }
        ]
      }
    },
    // Typescript specific rules
    {
      files: ['*.ts'],
      rules: {
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        "no-useless-constructor": "off",
        "lines-between-class-members": [
          "error",
          "always",
          {
            "exceptAfterSingleLine": true
          }
        ],
        "no-use-before-define": "off",
        "no-shadow": "off",
        "max-classes-per-file": "off",
        "class-methods-use-this": "off",
        "import/newline-after-import": "error",
        "import/prefer-default-export": "off",
      },
    },
    // React(jsx,tsx)  specific rules
    {
      files: ['*.jsx', '*.tsx'],
      rules: {
        'react/display-name': 'off',
        'react/jsx-key': 'error',
        'react/jsx-props-no-spreading': ['off'],
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension': [
          2,
          {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
          },
        ],
        'react/require-default-props': 0,
        'react/jsx-wrap-multilines': 'off',
        'react/jsx-indent': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'react/jsx-curly-newline': 'off',
        'react/prop-types': 'off',
        'react/destructuring-assignment': 'off',
        'react/no-unused-prop-types': 'off',
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
        'jsx-a11y/anchor-is-valid': [
          'error',
          {
            components: ['Link'],
            specialLink: ['hrefLeft', 'hrefRight'],
            aspects: ['invalidHref', 'preferButton'],
          },
        ],
      },
    },
    {
      files: ['index.ts', 'index.js'],
      rules: {
        'import/prefer-default-export': 'off'
      }
    }
  ]
};
