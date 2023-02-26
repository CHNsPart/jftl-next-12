/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ['light', 'night']
  },
  darkMode: ['class', '[data-theme="light"]'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        arsenica: ['Arsenica', 'sans-serif'],
        sans: ['(--font-arsenica-bold)'],
      },
      colors: {
        transparent: 'transparent',
        brandBlue: '#4DBAE7',
        lightBrandBlue: '#57BFE9',
        darkBrandBlue: '#0B94D5',
      },
      keyframes: {
        wiggle: {
        '0%, 100%': { transform: 'rotate(-6deg)'  
        },
          '50%': { transform: 'rotate(6deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
    },
  },
  plugins: [require('daisyui')],
}
