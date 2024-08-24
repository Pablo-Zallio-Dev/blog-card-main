/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "yellow": "hsl(47, 88%, 63%)",
        "grey-500": "hsl(0, 0%, 42%)",
        "grey-950": "hsl(0, 0%, 7%)",
      },
      fontFamily:{
        "Figtree-italic":'Figtree-italic',
        "Figtree":'Figtree',
      },
      boxShadow: {
        "full": "10px 10px 0px -1px rgba(0,0,0,0.75)"
      }
    },
  },
  plugins: [],
}

