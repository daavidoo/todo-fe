/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#5e565a',
        'primary-light': '#eaeaea',
        aqua: '#21c6e4',
        ocean: '#237cf1',
        'golden-yellow': '#fac208',
        magenta: '#ea4db3',
        lavender: '#8374dc',
      },
    },
  },
  plugins: [],
}
