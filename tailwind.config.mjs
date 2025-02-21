
/** @type {import('tailwindcss').Config} */

import { Rajdhani } from 'next/font/google';

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        ox: ["Oxanium", "serif"],
        pira: ["Pirata One", "serif"],
        harry: ["Bigelow Rules", "serif"],
        raj: ["Rajdhani", "serif"],
        bil: ["Hanken Grotesk", "serif"],
      },
      backgroundImage: {
        homeBanner: "url('../public/images/Background.png')",
      },
    },
  },
  plugins: [],
};
