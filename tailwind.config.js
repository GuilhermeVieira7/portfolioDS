/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './cases/*.html',
    './blog/*.html',
    './app.js'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brandDark: '#0B0B0B',
        cardDark: '#121217',
        cardBorder: 'rgba(255, 255, 255, 0.08)',
        limeBrand: '#D4FF3D',
        violetBrand: '#7C3AED',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        heading: ['Sora', 'sans-serif'],
      }
    }
  },
  plugins: [],
}
