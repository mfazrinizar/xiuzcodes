const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.vue'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        indigo: colors.indigo,
        gray: colors.coolGray,
      },
      fontFamily: {
        mono: ['Asap', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      padding: ['hover', 'focus'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
