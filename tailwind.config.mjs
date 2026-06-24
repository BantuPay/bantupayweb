/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'manuka': ['var(--font-pacifico)', 'Pacifico', 'cursive'],
        'feature': ['var(--font-montserrat)', 'Montserrat', 'system-ui', '-apple-system', 'sans-serif'],
        'sohne': ['var(--font-inter)', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],

  // Performance optimizations
  corePlugins: {
    // Disable unused features in production
    // container: process.env.NODE_ENV === 'production' ? false : undefined,
    // accessibility: process.env.NODE_ENV === 'production' ? false : undefined,
  },
};
