import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#217EBE",
        secondary: "#081F3A",
        accent: "#2587c4",
        light: "#EAF2FA",
        border: "#DCE7EE",
        text: "#55636E",
      },
    },
  },
  plugins: [],
};
export default config;
