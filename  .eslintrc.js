module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'eol-last': 0,
    'max-len': ['error', { code: 180 }],
    'no-shadow': 'off',
    'no-param-reassign': 0,
    quotes: [2, 'single', { avoidEscape: true }],
    'vuejs-accessibility/click-events-have-key-events': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'jsx-a11y/label-has-for': [
      2,
      {
        components: ['Label'],
        required: {
          every: ['nesting', 'id'],
        },
        allowChildren: false,
      },
    ],
    'vuejs-accessibility/form-control-has-label': 'off',
  },
};
