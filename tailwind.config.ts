import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: "#749378",
        gold: "#D4AF37",
        cream: "#FAFAF9",
        charcoal: "#2C2C2C",
      },
      fontFamily: {
        // Noto Naskh Arabic sits after Inter purely as a glyph fallback for
        // ﷺ and ؓ, which Inter does not contain.
        sans: ["var(--font-inter)", "Inter", "var(--font-naskh)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
