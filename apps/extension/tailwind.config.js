import shadcnConfig from "@acme/ui/tailwind.config";

const config = {
  ...shadcnConfig,
  jit: true,
  content: ["./src/**/*.{ts,tsx}", "../../packages/ui/**/*.{ts,tsx}"],
};

export default config;
