import shadcnConfig from "@acme/ui/shadcn-tailwind-config";

export default {
  ...shadcnConfig,
  content: [
    "./src/**/*.{ts,tsx}",
    "../../packages/ui/components/**/*.{ts,tsx}",
  ],
};
