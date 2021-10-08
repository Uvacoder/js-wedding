module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'display': ['Marisa']
    },
    colors: {
      'gold': {
        DEFAULT: '#B59D5F',
      },
      'black': {
        DEFAULT: '#231F20',
      },
      'white': {
        DEFAULT: '#FEFFFE',
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}