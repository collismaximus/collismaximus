/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          cm: {
            red: '#B23427',      // Mattone Rosso
            sky: '#1566AE',      // Azzurro Cielo Profondo
            gray: '#707070',     // Cemento Grigio Caldo
            green: '#5A814E',    // Verde Selvatico
            yellow: '#D9BE54',   // Giallo Sporco
          },
        },
        fontFamily: {
          title: ['"Barlow Condensed"', 'sans-serif'],
          display: ['"Playfair Display"', 'serif'],
          brutal: ['"League Spartan"', 'sans-serif'],
          body: ['Inter', 'sans-serif'],
          raw: ['"Work Sans"', 'sans-serif'],
          serif: ['"Source Serif Pro"', 'serif'],
        },
      },
    },
    plugins: [],
  }
  