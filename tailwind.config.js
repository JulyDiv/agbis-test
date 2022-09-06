/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{jsx}",
    "./public/**/*.html",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      blue: "#0084CA",
      gold: "#CD9933",
      grey: "#7E7E7E",
      dark: "#2A3B45",
      header: "#1D252E",
    },
  },
  plugins: [require("flowbite/plugin")],
};
