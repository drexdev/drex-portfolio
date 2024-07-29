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
        'rebond': ['"Rebond Grotesque"', 'sans-serif'],
      },
      colors: {
        'background': '#0a0118',
        'primary': '#525eff'
      }
    },
  },
  plugins: [],
}

