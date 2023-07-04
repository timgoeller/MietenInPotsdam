const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'kanit': ['Kanit', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: '#FFEEEE',
        'light-blue': '#2788E2',
        'dark-blue': '#450FB8',
        'dark-purple': '#762F8F',
      }
    },
  },
  plugins: [],
}

