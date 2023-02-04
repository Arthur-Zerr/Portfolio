/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      width: {
        'fullHd': '1920px',
      },
      maxWidth: {
        'fullHd': '1920px',
      },
      boxShadow: {
        "widget": "0px 0px 15px 4px rgba(0, 0, 0, 0.3)",
      },
      colors: {
        'portfolioBg': '#ffffff',
        'portfolioBgDark': '#171717',
        'widgetBg': '#ececec',
        'widgetBgDark': '#1b1b19'
      },
      fontFamily: {
        'kanya': 'Kanya',
        'OpenSans-Bold': 'OpenSans-Bold',
        'OpenSans-Regular': 'OpenSans-Regular'

      }
    },
  },
  plugins: [],
}
