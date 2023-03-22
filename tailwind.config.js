/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        fondo: "#0F172A",
        fondoMenu: "#334155",
      },

      fontFamily: {
        poppins: ["'Poppins'", "sans-serif;"],
      },

      backgroundImage: {
        logo: "url('/src/img/Logo.png')",
      },
    },

    screens: {
      desktop: "900px",
      "400px": "400px",
      "1000px": "1000px",
      "1200px": "1200px",
    },
  },
  plugins: [],
};
