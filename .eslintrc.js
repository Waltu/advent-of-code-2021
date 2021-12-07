module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'standard',
    'plugin:jest/all',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname
  },
  env: {
    'jest/globals': true,
    jest: true
  }
}
