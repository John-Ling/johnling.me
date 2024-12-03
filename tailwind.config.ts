// /** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
        "move_up" : {
          "0%": { transform: "translateY(10%)", opacity: "1"},
          "100%": { transform: "translateY(0)", opacity: "0"},
        },
        "move_down" : {
          "0%": { transform: "translateY(-10%)", opacity: "0"},
          "100%": { transform: "translateY(0)", opacity: "1"},
        }
      },
      animation: {
        "move-up" : "move_up 5s ease-in-out",
        "move-down" : "move_down 1s ease-in-out",
      },
      fontFamily: {
        meslo: ["var(--meslo)"],
      }
  },
  plugins: [],
}

export default config;