const ui = require("@repo/ui/tailwind.config");

module.exports = {
  ...ui,
  mode: "jit",
  darkMode: "class",
  content: ["./src/**/*.tsx", "../../packages/ui/**/*.tsx"],
};
