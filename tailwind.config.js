/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}",flowbite.content()],
  theme: {
    extend: {
      colors: {
        "theme-1": "#4afaab", // green
        "theme-2": "#000319", // black blueish
      },
      fontFamily: {
        'ocr': ['OCR A Extended Regular', 'sans-serif']
      },
    },
  },
  
  plugins: [
    // ...
    flowbite.plugin(),
  ],
};
