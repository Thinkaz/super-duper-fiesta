/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        // Couleurs personnalisées basées sur le document original
        "custom-blue-bg": "#0A3D62", // Une teinte bleu sombre
        "custom-yellow-bg": "#FDF5E6", // Une teinte jaune pâle
        "custom-yellow-text": "#F9DA89", // Une teinte jaune pour le texte sur fond bleu
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Merriweather", "Georgia", "serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
