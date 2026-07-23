/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAFAF8',
        ivory: '#F5F3F0',
        stone: '#2B2520',
        sage: '#8B9B7F',
        blush: '#E8D5CC',
        warm: '#F0E6DC',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
