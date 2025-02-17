import { heroui } from "@heroui/theme";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        "plus-jakarta": ["Plus Jakarta Sans", "sans-serif"],
        satisfy: ["Satisfy", "cursive"],
        courgette: ["Courgette", "cursive"],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
} satisfies Config;
