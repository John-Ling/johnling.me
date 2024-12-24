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
        "muted-white": "#D0D0D0",
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
        "teal": "#73DACA",
      },
      transitionProperty: {
        'height': 'height',
      },
      keyframes: {
        "fade_down" : {
          "0%": { transform: "translateY(-0.5rem)", opacity: "0"},
          "100%": { transform: "translateY(0)", opacity: "1"},
        },
        "fade_up" : {
          "0%": { transform: "translateY(0.5rem)", opacity: "0"},
          "100%": { transform: "translateY(0)", opacity: "1"},
        }
      },
      // maybe create own bezier curve for nicer animation doesn't feel right rn
      animation: {
        "fade-up" : "fade_up 0.4s ease-out forwards",
        "fade-down" : "fade_down 0.4s ease-out var(--delay, 0) forwards",
      },
      fontFamily: {
        meslo: ["var(--meslo)"],
      }
  },
  plugins: [],
}

export default config;