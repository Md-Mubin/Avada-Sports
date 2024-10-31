/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brandColor" : "#FF9600",
      },
    },
    fontFamily:{
      "arizona" : ["Arizonia", "cursive"],
      "inter" : ["Inter", "sans-serif"],
      "imbPlex" : ["IBM Plex Sans", "sans-serif"],
      "yellowTail" : [ "Yellowtail", "cursive"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT : "20px",
        md: '30px',
        lg: "0px"
      },
    }
  },
  plugins: [],
}