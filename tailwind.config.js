/** @type {import('tailwindcss').Config} */
export default {
  content: ['./public/**/*.html', './src/js/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        accent:  'var(--color-accent)'
      },
      animation: {
        ambient: 'ambient 30s linear infinite'
      }
    }
  },
  plugins: []
};
