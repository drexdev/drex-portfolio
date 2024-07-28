/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['"Mono Sans"', 'sans-serif'],
      },
      colors: {
        'background': '#030712',
      }
    },
  },
  plugins: [],
}

