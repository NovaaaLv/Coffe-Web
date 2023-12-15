/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
    "./index.html",],
  theme: {
    extend: {
      backgroundColor: {
        'bg_nav': '#ffeeb3',
        'sectA': '#c38154',
      },
      colors: {
        'head_text': '#ffeeb3',
        'sectA': '#c38154',
      }
    },
  },
  plugins: [],
}