/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      andika: ["Andika", "sans-serif"],
      viga: ["Viga"],
    },
    extend: {},
  },
  plugins: [],
  darkMode: "class",
};
