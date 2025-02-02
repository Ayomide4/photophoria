import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F6F3F1",
        primary: "#FFDF61",
        secondary: "#D2C4FF",
        dark: "#21200E",
      },
      fontFamily: {
        "museo-moderno": ["var(--font-museo-moderno)", ...fontFamily.sans],
        "red-hat-display": ["var(--font-red-hat-display)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
