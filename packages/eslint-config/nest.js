/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["plugin:@typescript-eslint/recommended", "prettier"],
  env: {
    node: true,
    jest: true,
  },
  plugins: ["@typescript-eslint/eslint-plugin"],
  ignorePatterns: [".eslintrc.js"],
  rules: {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
  },
};
