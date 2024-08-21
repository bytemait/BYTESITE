/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}",flowbite.content()],
  theme: {
    extend: {
      colors: {
        "theme-1": "#4afaab", // green
        "theme-2": "#000319", // black blueish
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      fontFamily: {
        'ocr': ['OCR A Extended Regular', 'sans-serif'],
        poppins: ["Poppins", "sans-serif"],
        Space  : ["Space Grotesk", "system-ui"],
      },
    },
  },
  
  plugins: [
    // ...
    flowbite.plugin(),
  ],
};
