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
        "backgroundColor": "#f5f8ff",
        'border': '#eee',
        'lightBlack': '#333'
      },
      boxShadow: {
        'navShadow': 'rgb(0 0 0 /15%) 0px 8px 24px',
      },
      maxWidth: {
        'maxWidth': 'max-width: 80%'
      }
    },
  },
  plugins: [],
}


