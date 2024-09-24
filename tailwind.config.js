/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./assets/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#3E63F9",
        dark: "#0b061f",
      },
      transitionProperty: {
        "colors-and-bg": "color, background-color",
      },
      fontFamily: {
        poppins: "Poppins",
      },
      animation: {
        "spin-slow": "spin 2s linear infinite",
      },
      transitionDuration: {
        3000: "3000ms",
      },
    },
  },
  plugins: [],
};
