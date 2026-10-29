/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#1F4B43',
          dark: '#163530',
          light: '#2E6B5E'
        },
        amber: {
          DEFAULT: '#E8A33D',
          light: '#F2C177',
          dark: '#C9822A'
        },
        paper: '#FAF6EE',
        ink: '#26251F',
        sage: '#B8C9B8',
        coral: '#E2725B'
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Public Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace']
      },
      backgroundImage: {
        'dotted-path': "repeating-linear-gradient(90deg, #1F4B43 0, #1F4B43 6px, transparent 6px, transparent 14px)"
      }
    },
  },
  plugins: [],
}
