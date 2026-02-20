import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // This maps the 'font-primary' class to your local font
        primary: ['var(--font-zalando)', 'sans-serif'],
      },
      colors: {
        // Adding a custom gold/platinum color for your branding
        brand: {
          gold: '#EAB308', // yellow-500
          platinum: '#E5E7EB', // gray-200
        }
      }
    },
  },
  plugins: [],
};
export default config;