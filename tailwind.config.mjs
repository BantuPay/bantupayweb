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
        'display': ['var(--font-sora)', 'Sora', 'system-ui', '-apple-system', 'sans-serif'],
        'script': ['var(--font-dancing)', 'Dancing Script', 'cursive'],
        'feature': ['var(--font-sora)', 'Sora', 'system-ui', '-apple-system', 'sans-serif'],
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
