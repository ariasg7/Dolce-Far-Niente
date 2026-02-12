import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // This MUST be named 'cormorant' to use the class 'font-cormorant'
        cormorant: ["var(--font-cormorant)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;