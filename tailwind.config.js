/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          "500": "#2D74DA",
        },
        black: {
          "200": "#454749",
        },
      },
      opacity: {
        "96": "0.96",
      },
    },
  },
  plugins: [],
};
