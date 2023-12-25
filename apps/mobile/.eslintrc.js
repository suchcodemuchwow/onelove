// This configuration only applies to the package manager root.
/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: "@repo/eslint-config",
  overrides: [
    {
      files: ["*.js"],
      env: {
        node: true,
      },
    },
  ],
  ignorePatterns: ["node_modules", "build", ".expo", ".expo-shared"],
};
