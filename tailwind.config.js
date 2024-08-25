/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {backgroundImage: {
      'custom-gradient': 'linear-gradient(90deg, #87449A -8.99%, #F8F8F8 119.43%, #87449A 119.44%)',
    },gridTemplateColumns: {
      'custom-grid': '1fr 5fr',
      'custom-grid-2':'1fr 3fr'
    }
  },
  },
  plugins: [],
}