// /** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
      extend: {},
      colors: {
        "cream": "#fffff1",
        "white": "#F8F9F2",
        "muted-white": "#B0B0B0",
        "orange": "#FF5500",
        "orange-light": "#fd7202",
        "indigo": {
          light: "#1d1e29",
          normal: "#222331"
        },
        "grey": {
          light: "#22262E",
          normal: "#171A1F",
          dark: "#0D0F12",
          card: "#14171b"
        },
        "blue": "#82AAFF",
        "green": "#50FA7B",
        "red": "#e43b58",
        "yellow": "#FFCB6B",
        "magenta": "#C792EA",
        "cyan": "#8BE9FD",
        "teal": "#73DACA",
      },
      keyframes: {
        "fade_down" : {
          "0%": { transform: "translateY(-0.5rem)", opacity: "0"},
          "100%": { transform: "translateY(0)", opacity: "1"},
        },
        "fade_up" : {
          "0%": { transform: "translateY(0.5rem)", opacity: "0"},
          "100%": { transform: "translateY(0)", opacity: "1"},
        },
        "flicker_on": {
          "0%": { color: "#2e2e2e"},
          "20%": {color: "#a63700"},
          "40%": {color: "#2e2e2e"},
          "80%": {color: "#FF5500"},
          "100%": {color: "#FF5500"},
        }
      },
      animation: {
        "fade-up" : "fade_up 0.4s ease-out forwards",
        "fade-down" : "fade_down 0.4s ease-out forwards",
        "flicker-on": "flicker_on 1s linear forwards",
      },
      fontFamily: {
        meslo: ["var(--meslo)"],
      }
  },
  plugins: [],
}

export default config;