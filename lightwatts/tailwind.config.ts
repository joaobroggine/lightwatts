import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        headerfont: ['Jost', 'sans serif', 'system-ui'],
        lulo: ['Lulo Clean One', 'sans-serif', 'system-ui'],
        gabarito: ['Gabarito', 'sans-serif', 'system-ui']
      }
    },
  },
  plugins: [],
} satisfies Config;
