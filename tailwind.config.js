/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this path depending on where your files are located
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
        // You can also create a custom name like 'roboto': ['Roboto', 'sans-serif']
      },
      colors: {
        "secondarydark": "#2f2f2f",
        "primarydark": "#161616"
      },
    },
  },
  plugins: [],
}


