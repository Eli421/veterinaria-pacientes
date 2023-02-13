/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {},
  },
  plugins: [],
}


// ./src/**/*.jsx quiere decir: en este archivo entra a la carpeta src, luego revisa TODAS las carpetas que esten dentro y seleccioname solo los que terminen en .jsx asi no hay que escribir uno por uno