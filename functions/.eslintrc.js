/* eslint-env node */
module.exports = {
  root: true,
  env: {
    es6: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module"
  },
  ignorePatterns: [
    "/lib/**/*", // Ignore built files
    "/generated/**/*" // Ignore generated files
  ],
  plugins: [
    "@typescript-eslint"
  ],
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "no-console": "off",
    "no-undef": "off"
  }
};
