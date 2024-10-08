/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        header: '#8ecae6', // Add your custom color here
        button: '#ffc09f',
        clogo: '#183a37',
        card: '#F9F5F6'
      },
    },
  },
  plugins: [],
}

