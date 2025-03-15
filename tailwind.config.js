// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Our color scheme: black, purple, red, blue
        primary: {
          DEFAULT: "#0a0a0a", // Black
          light: "#1a1a1a",
          dark: "#050505",
        },
        secondary: {
          DEFAULT: "#6b46c1", // Purple
          light: "#805ad5",
          dark: "#553c9a",
        },
        accent: {
          DEFAULT: "#e53e3e", // Red
          light: "#f56565",
          dark: "#c53030",
        },
        highlight: {
          DEFAULT: "#3182ce", // Blue
          light: "#4299e1",
          dark: "#2b6cb0",
        },
      },
      fontFamily: {
        sans: ["Inter var", "Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "grid-pattern":
          "linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
      },
      boxShadow: {
        "glow-purple": "0 0 15px 5px rgba(107, 70, 193, 0.3)",
        "glow-red": "0 0 15px 5px rgba(229, 62, 62, 0.3)",
        "glow-blue": "0 0 15px 5px rgba(49, 130, 206, 0.3)",
      },
    },
  },
  plugins: [],
};
