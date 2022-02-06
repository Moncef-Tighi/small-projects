module.exports = {
  content: ['./dist/*.{html,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily : {
        headline: ['Oswald']
      },
      colors : {
        main: '#212f49'
      },
    },
    debugScreens: {
      position: ['top', 'left']
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'), 
  ],
}
