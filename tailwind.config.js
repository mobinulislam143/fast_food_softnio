// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "light",
  theme: {
    extend: {
      colors: {
        bg_primary: '#FEBF00',
        bg_secondary: "#B52B1D"
      },
      fontFamily: {
        bebas: ['Bebas Neue'],
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'], 
        inter: ['Inter', 'sans-serif']
      },
    },
  },
  plugins: [require('daisyui')],
}
