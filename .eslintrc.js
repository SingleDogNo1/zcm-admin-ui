module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true,
      tsx: true,
      modules: true
    }
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended'
  ],
  plugins: ['vue', 'prettier', '@typescript-eslint'],
  settings: {
    'import/resolver': {
      alias: {
        map: [['@packages', '@website', './packages', './website']],
        extensions: ['.ts', '.js', '.vue', '.json']
      }
    }
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-var-requires': 2,
    '@typescript-eslint/no-empty-function': 2,
    'vue/custom-event-name-casing': 2,
    'no-use-before-define': 2,
    '@typescript-eslint/no-use-before-define': 2,
    '@typescript-eslint/ban-ts-comment': 2,
    '@typescript-eslint/ban-types': 2,
    '@typescript-eslint/no-non-null-assertion': 2,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^h$',
        varsIgnorePattern: '^h$'
      }
    ],
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^h$',
        varsIgnorePattern: '^h$'
      }
    ],
    'vue/attributes-order': 2,
    'vue/one-component-per-file': 2,
    'vue/html-closing-bracket-newline': 2,
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 10,
        multiline: {
          max: 10,
          allowFirstLine: true
        }
      }
    ],
    // 组件 name 首字母必须大写
    'vue/component-definition-name-casing': 2,
    'vue/multiline-html-element-content-newline': 2,
    'vue/attribute-hyphenation': 2,
    'vue/require-default-prop': 2,
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    'prettier/prettier': 'warn'
  }
}
