/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./hugo_stats.json'],
  theme: {
    extend: {
      fontFamily: {
        ja: ["Helvetica Neue", "Arial", "Hiragino Kaku Gothic ProN", "Hiragino Sans", "BIZ UDPGothic", "Meiryo", "sans-serif"],
        jamin: ['游明朝', 'Yu Mincho', 'YuMincho', 'Hiragino Mincho Pro', 'serif'],
      },
    },
  },
  plugins: [],
}