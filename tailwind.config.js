/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "offmoon-black": "#000000",
      },
       fontFamily: {
      wushin: ['Wushin', 'sans-serif'],
    },
    },
  },
  plugins: [],
}

