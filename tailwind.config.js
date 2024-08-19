/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        'bgcol1': '#161A2E',
        'primCol': '#E0F7FA',
        'secCol': '#B2EBF2',
        'accent': '#ba0676',
        'bgcol2': '#2A3053'
      },
      fontFamily: {
        custom: ['"Exo 2"', 'sans-serif'],
      },

    },
  },
  plugins: [],
}

