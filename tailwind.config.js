/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./layouts/**/*.{vue,js}",
    "./app.vue",
  ],
  theme: {
    extend: {
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
