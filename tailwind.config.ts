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
      "grey": {
        50: "#2e2e2e",
        100: "#242424",
      },
      "blue": "#82AAFF",
      "green": "#50FA7B",
      "red": "#FF5555",
      "yellow": "#FFCB6B",
      "magenta": "#C792EA",
      "cyan": "#8BE9FD",
    },
    extend: {},
  },
  plugins: [],
}

export default config;