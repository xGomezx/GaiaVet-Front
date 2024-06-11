/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-border': '#00E3CC',
      },
      backgroundImage: {
        'fondo': "url('src/assets/FondoPatitas.svg')",
      },
    },
  },
  plugins: [],
}