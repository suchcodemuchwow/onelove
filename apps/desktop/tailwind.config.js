import shadcnConfig from "@acme/ui/tailwind.config";

const combined = {
  content: ["./src/**/*.tsx"],
  presets: [shadcnConfig],
  jit: true,
};

export default combined;
