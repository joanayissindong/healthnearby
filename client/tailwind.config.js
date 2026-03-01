/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0D9488',
        'primary-dark': '#0F766E',
        accent: '#F97316',
        open: '#22C55E',
        closed: '#EF4444',
      },
    },
  },
  plugins: [],
};

