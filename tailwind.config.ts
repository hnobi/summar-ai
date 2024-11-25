import type { Config } from "tailwindcss";
import LineClamp from '@tailwindcss/line-clamp';

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#753fea",
        secondary: "#e9e8fe"
      },
    },
  },
  plugins: [
    LineClamp
  ],
} satisfies Config;
