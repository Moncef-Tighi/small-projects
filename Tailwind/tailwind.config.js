module.exports = {
  content: ['./dist/*.{html,js}'],
  theme: {
    extend: {},
    debugScreens: {
      position: ['top', 'left']
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ],
}
