import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: { campus: { 50:"#eef8ff",100:"#d9efff",500:"#1683d8",600:"#0d6fb8",700:"#095b95" } }
    }
  },
  plugins: []
};
export default config;
