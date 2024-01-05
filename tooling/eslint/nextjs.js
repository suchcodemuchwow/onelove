/** @type {import('eslint').Linter.Config} */
const config = {
  extends: ["plugin:@next/next/recommended"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "@typescript-eslint/require-await": "off",
    "react/jsx-curly-brace-presence": [
      "error",
      {
        props: "always",
        children: "ignore",
        propElementValues: "always",
      },
    ],
  },
};

module.exports = config;
