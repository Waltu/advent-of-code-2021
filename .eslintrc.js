module.exports = {
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint"
  ],
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "standard",
    "plugin:prettier/recommended"
  ],
  "parserOptions": {
    "project": "tsconfig.json",
   "tsconfigRootDir": __dirname
  }
}
