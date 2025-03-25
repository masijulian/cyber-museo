/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Solo extensiones personalizadas
      colors: {
        'cyber-dark': '#0a0a1f',
        'cyber-cyan': {
          DEFAULT: '#00f7ff',
          100: '#e6ffff',
          200: '#00f7ff',
          300: '#00dde6'
        },
        'cyber-blue': {
          DEFAULT: '#0066ff',
          100: '#e6f0ff',
          200: '#0066ff',
          300: '#0052cc'
        },
        'cyber-green': {
          DEFAULT: '#00ff88',
          100: '#e6fff4',
          200: '#00ff88',
          300: '#00cc6d'
        },
        'cyber-gray': '#8892b0'
      },
      opacity: {
        '15': '0.15',
        '20': '0.20',
        '40': '0.40'
      },
      animation: {
        'cyber-pulse': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'cyber-glitch': 'glitch 1s linear infinite'
      },
      keyframes: {
        glitch: {
          '2%, 64%': { transform: 'translate(2px,0) skew(0deg)' },
          '4%, 60%': { transform: 'translate(-2px,0) skew(0deg)' },
          '62%': { transform: 'translate(0,0) skew(5deg)' }
        }
      }
    },
  },
  plugins: [],
}