// tailwind.config.js
const colors = require('tailwindcss/colors')
module.exports = {
    purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
    theme: {
        colors: {
            gray: colors.gray,
            red: colors.red,
            blue: colors.sky,
            yellow: colors.amber,
            pink: colors.pink,
            green: colors.green,
            rose: colors.rose,
            white: 'white',
            transparent: 'transparent',
            black: 'black'
        },
        extend: {
            outline: {
                blue: ['2px dotted #3182ce', '2px'],
                white: ['2px dotted white', '2px'],
                pink: ['2px dotted #ec4899', '2px']
            },
            animation: {
                'spin-slow': 'spin 1.5s linear infinite',
                'spin-slower': 'spin 3s linear infinite',
                'ping-slow': 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite'
            }
        }
    },
    variants: {
        extend: {
            textColor: ['hover', 'group-hover', 'focus'],
            position: ['group-hover', 'group-focus']
        }
    },
    plugins: [require('@tailwindcss/aspect-ratio')]
}
