/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", 
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#62B073',           // For the top CSE Department background
        customPurpleLight: '#C9A0C5',     // For 'I Year' background
        customBlue: '#83C3D2',            // For 'II Year' background
        customBrown: '#C79AE3',           // For 'III Year' background
        customPurpleDark: '#C79AE3',      // For 'IV Year' background
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
