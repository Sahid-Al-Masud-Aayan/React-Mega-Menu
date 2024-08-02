/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-regular': '#000',
        'white-regular': '#fff'
      },
    },
    container: {
      center: true,
    },
    fontFamily: {
      'HeadFont': ["Open Sans", 'sans-serif'],
    }
  },
  plugins: [],
}
