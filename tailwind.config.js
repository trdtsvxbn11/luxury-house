/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#faf8f5',
          100: '#f5f1ea',
          200: '#ebe5d8',
          300: '#ddd4c0',
        },
        beige: {
          400: '#c9bda3',
          500: '#b5a684',
        },
        gold: {
          400: '#c9a96a',
          500: '#b89346',
          600: '#9e7d36',
        },
        dark: {
          700: '#2a2520',
          800: '#1e1a16',
          900: '#14110e',
          950: '#0d0b08',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [],
};
