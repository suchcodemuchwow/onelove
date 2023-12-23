const ui = require("@repo/ui/tailwind.config");

module.exports = {
  ...ui,
  content: ["./src/**/*.tsx", "../../packages/ui/**/*.tsx"],
};
