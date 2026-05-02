import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        'landscape': { 'raw': '(orientation: landscape)' },
        'portrait': { 'raw': '(orientation: portrait)' },
        'touch': { 'raw': '(hover: none) and (pointer: coarse)' },
        'no-touch': { 'raw': '(hover: hover) and (pointer: fine)' },
      },
      colors: {
        gold: {
          50: "#FEF8EB",
          100: "#FDEFD1",
          200: "#FBEAA3",
          300: "#F9E085",
          400: "#F7E7B0",
          500: "#E6C77B",
          600: "#D4A72A",
          700: "#B8860B",
          800: "#704214",
          900: "#5C3817",
        },
        cream: "#fdfbf7",
        "text-primary": "#0f172a",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        "source-sans": ["var(--font-source-sans)", "sans-serif"],
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      spacing: {
        'safe-top': 'max(1rem, env(safe-area-inset-top))',
        'safe-bottom': 'max(1rem, env(safe-area-inset-bottom))',
        'safe-left': 'max(1rem, env(safe-area-inset-left))',
        'safe-right': 'max(1rem, env(safe-area-inset-right))',
        safe: "max(1rem, env(safe-area-inset-bottom))",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#0f172a",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
