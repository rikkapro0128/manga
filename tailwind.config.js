/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'menu-genres': 'repeat(4, minmax(120px, 1fr))'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
