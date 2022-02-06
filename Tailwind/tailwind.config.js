module.exports = {
  content: ['./dist/*.{html,js}'],
  mode: 'jit',
  darkMode: 'class',
  purge: {
    enabled : true,
    content:['./dist/*.{html,js}']
  },
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
