import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Cormorant Garamond'", "Georgia", "serif"],
        body: ["'DM Sans'", "sans-serif"],
        accent: ["'Italiana'", "serif"],
      },
      colors: {
        nude: {
          50: "#fdf8f5",
          100: "#f9ede4",
          200: "#f2d9c8",
          300: "#e8bfa5",
          400: "#d9a07e",
          500: "#c8825b",
          600: "#b06845",
          700: "#925238",
          800: "#784330",
          900: "#63392a",
        },
        blush: {
          50: "#fdf4f4",
          100: "#fbe8e8",
          200: "#f8d4d4",
          300: "#f2b0b0",
          400: "#e88080",
          500: "#d95858",
          600: "#c43c3c",
          700: "#a42f2f",
          800: "#882929",
          900: "#712626",
        },
        champagne: {
          50: "#fefcf5",
          100: "#fdf7e5",
          200: "#faedc6",
          300: "#f5df96",
          400: "#eecb5e",
          500: "#e5b83a",
          600: "#cc9a28",
          700: "#aa7b22",
          800: "#8a6121",
          900: "#725021",
        },
        rose: {
          50: "#fff0f3",
          100: "#ffe0e7",
          200: "#ffc0ce",
          300: "#ff91aa",
          400: "#ff587e",
          500: "#ff2056",
          600: "#f50040",
          700: "#cc0036",
          800: "#a80031",
          900: "#8c002e",
        },
        cream: "#faf7f4",
        pearl: "#f5f0eb",
        silk: "#ede8e3",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
