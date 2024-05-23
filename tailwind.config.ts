import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {},
  plugins: [],
  safelist: [
    // Cols
    "grid-cols-2",
    "grid-cols-3",
    "grid-cols-4",
    "grid-cols-6",
    "grid-cols-5",
    "grid-cols-7",
    "grid-cols-8",
    // Row
    "grid-rows-2",
    "grid-rows-3",
    "grid-rows-4",
    "grid-rows-6",
    "grid-rows-5",
    "grid-rows-7",
    "grid-rows-8",
    // Gap
    "gap-2",
    "gap-3",
    "gap-4",
    "gap-6",
    "gap-5",
    "gap-7",
    "gap-8",
    // Grid
    "grid-flow-col",
    "grid-flow-row",
  ],
};
export default config;
