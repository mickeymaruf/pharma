/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: []
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
