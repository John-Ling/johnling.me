// /** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],
    theme: {
        colors: {
            "white": "#F8F9F2",
            "orange": "#FF5500",
            "grey": "#242424",
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