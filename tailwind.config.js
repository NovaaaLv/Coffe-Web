/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        'bg-nav': '#ffeeb3',
        'sectA': '#c38154',
      },
      colors: {
        'head-text': '#ffeeb3',
        'sectA': '#c38154',
      }
    },
  },
  plugins: [],
}