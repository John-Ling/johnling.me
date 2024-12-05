// /** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
      extend: {},
      colors: {
        "white": "#F8F9F2",
        "orange": "#FF5500",
        "indigo": {
          light: "#1d1e29",
          normal: "#222331"
        },
        "grey": {
          light: "#2e2e2e",
          normal: "#242424",
          dark: "#1b1b1b",
        },
        "blue": "#82AAFF",
        "green": "#50FA7B",
        "red": "#FF5555",
        "yellow": "#FFCB6B",
        "magenta": "#C792EA",
        "cyan": "#8BE9FD",
      },
      transitionProperty: {
        'height': 'height',
      },
      keyframes: {
        "fade_down" : {
          "0%": { transform: "translateY(-1rem)", opacity: "0"},
          "100%": { transform: "translateY(0)", opacity: "1"},
        },
        "fade_up" : {
          "0%": { transform: "translateY(1rem)", opacity: "0"},
          "100%": { transform: "translateY(0)", opacity: "1"},
        }
      },
      animation: {
        "fade-up" : "fade_up 1s ease-out",
        "fade-down" : "fade_down 1s ease-out",
      },
      fontFamily: {
        meslo: ["var(--meslo)"],
      }
  },
  plugins: [],
}

export default config;