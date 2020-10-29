// tailwind.config.js
module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  theme: {
    extend: {
      outline: {
        blue: ['2px dotted #3182ce', '2px']
      }
    }
  },
  variants: {},
  plugins: [],
  
}