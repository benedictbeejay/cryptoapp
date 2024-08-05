/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px'
      },
      colors: {
        'primaryColor': "#118c4f",
        "backgroundColor": "#eee",
        'border': ' #f5f8ff',
        'lightBlack': '#333'
      },
      boxShadow: {
        'navShadow': 'rgb(0 0 0 /12%) 0px 8px 24px',
        'hoverShadow': 'rgb(0 0 0 /20%) 0px 8px 24px',
      },
      maxWidth: {
        'maxWidth': 'max-width: 80%'
      },
      clipPath: {
        'custom': 'polygon(0 0, 100% 5%, 100% 100%, 0 95%)',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.clip-custom': {
          clipPath: 'polygon(0 0, 100% 5%, 100% 100%, 0 95%)',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
}


