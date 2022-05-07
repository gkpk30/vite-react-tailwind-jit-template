const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  darkMode: "media", // 'media' or 'class'
  theme: {

    extend: {
      fontFamily: {
       
        Josefin: ['Josefin', ...defaultTheme.fontFamily.sans],
        Cormorant: ['Cormorant', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'background-beige': '#243c5a',
        'secondary': '#54595F',
        'third' : '#3f4347',
        'text': '#7A7A7A',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
