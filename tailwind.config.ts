import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "olympus-gold": "#FFD700",
        "marble-white": "#F8F8FF",
        "aegean-blue": "#1E3A8A",
        "mythic-purple": "#6B21A8",
      },
    },
  },
  plugins: [],
};

export default config;
