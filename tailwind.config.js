/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      // for common colors to select
      colors: {
        "brandColor" : "#FF9600",
      },
    },

    // for common fonts to select
    fontFamily:{
      "arizona" : ["Arizonia", "cursive"],
      "inter" : ["Inter", "sans-serif"],
      "imbPlex" : ["IBM Plex Sans", "sans-serif"],
      "yellowTail" : [ "Yellowtail", "cursive"],
    },

    // container part
    container: {
      center: true,

      // padding part
      padding: {
        DEFAULT : "20px",
        md: '30px',
        lg: "0px"
      },
    }
  },
  plugins: [],
}