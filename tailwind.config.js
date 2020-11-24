// tailwind.config.js
const colors = require('tailwindcss/colors')
module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  theme: {
    colors: {
      gray: colors.coolGray,
      red: colors.red,
      blue: colors.lightBlue,
      yellow: colors.amber,
      pink: colors.pink,
      white: "white",
      transparent: "transparent",
      black: "black"
    },
    extend: {
      outline: {
        blue: ['2px dotted #3182ce', '2px']
      },
      animation: {
        'spin-slow': 'spin 1.5s linear infinite',
        'spin-slower': 'spin 3s linear infinite',
      },
      
    }
  },
  variants: {},
  plugins: [],
  
}