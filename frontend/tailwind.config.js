/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: '#050505',
        surface: '#0D0D0D',
        elevated: '#161616',
        zinc: {
          400: '#A1A1AA',
          500: '#71717A',
          600: '#52525B',
          800: '#27272A',
          900: '#18181B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(255, 255, 255, 0.25)',
        'glow-md': '0 0 25px rgba(255, 255, 255, 0.35)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.7)',
      }
    },
  },
  plugins: [],
}
