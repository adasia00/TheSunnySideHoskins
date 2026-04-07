import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: "#fdfbf7",
          100: "#faf6ed",
          200: "#f4ead3",
          300: "#ecd5a1",
          400: "#e4bb6f",
          500: "#d9a03c",
          600: "#c9872b",
          700: "#a85e0f",
          800: "#8a4307",
          900: "#6d2a01",
        },
        cream: "#faf8f5",
        charcoal: "#1a1a1a",
        "sky-blue": "#8ecae6",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "Montserrat", "sans-serif"],
      },
      backgroundImage: {
        "gradient-gold": "linear-gradient(135deg, #d9a03c 0%, #e4bb6f 100%)",
        "gradient-dark": "linear-gradient(135deg, #1a1a1a 0%, #8ecae6 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-in-out",
        "slide-up": "slideUp 0.8s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(40px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
