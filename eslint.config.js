const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended
});

module.exports = [
  js.configs.recommended,
  ...compat.config({
    root: true,
    plugins: ['@nx'],
    extends: ['plugin:@nx/typescript']
  }),
];
