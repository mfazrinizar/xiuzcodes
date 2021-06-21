const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        indigo: colors.indigo,
        gray: colors.coolGray,
      },
      fontFamily: {
        mono: ['Montserrat', 'sans-serif'],
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
