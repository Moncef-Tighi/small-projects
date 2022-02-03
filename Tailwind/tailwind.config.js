module.exports = {
  content: ['./dist/*.{html,js}'],
  theme: {
    extend: {
      fontFamily : {
        headline: ['Oswald']
      }
    },
    debugScreens: {
      position: ['top', 'left']
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'), 
  ],
}
