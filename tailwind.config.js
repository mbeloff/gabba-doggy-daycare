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
      },
      animation: {
        'spin-slow': 'spin 1.5s linear infinite',
        'spin-slower': 'spin 3s linear infinite',
      }
    }
  },
  variants: {},
  plugins: [],
  
}