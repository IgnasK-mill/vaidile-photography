/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Softened dark cinematic palette — gentler than pure charcoal
        night: '#1a1817',       // Softer than pure black - warm charcoal
        obsidian: '#100e0d',    // Deep background
        smoke: '#252220',       // Card backgrounds
        ash: '#3a3532',         // Borders, dividers
        // Gold accent — warmer, softer amber
        gold: '#c9a961',        // Softer gold (was #E8A020)
        goldLight: '#e0c891',   // Lighter gold for highlights
        goldDim: '#8a7343',     // Muted gold for subtle accents
        // Text colors
        ivory: '#f5f0e8',       // Warm off-white (softer than pure white)
        pearl: '#e8e0d4',       // Slightly dimmer text
        mist: '#a89f92',        // Muted text
        stone: '#6b6259',       // Very muted
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Lato', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.3em',
        'mega-wide': '0.5em',
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-out forwards',
        'fade-up': 'fadeUp 1s ease-out forwards',
        'gentle-pulse': 'gentlePulse 3s ease-in-out infinite',
        'slow-zoom': 'slowZoom 20s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gentlePulse: {
          '0%, 100%': { opacity: '0.6', transform: 'translateY(0)' },
          '50%': { opacity: '1', transform: 'translateY(6px)' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
      },
    },
  },
  plugins: [],
}
