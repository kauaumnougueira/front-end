/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',        
      }
    },
    colors: {
      'mainGreen': '#00B828',
      'mainGray': '#F4F4F4',
      'secondaryGray': '#D9D9D9',
      'red': '#FF0000',
      'white': '#FFFFFF',
      'cinza': '#FAFAFA'
    },
    extend: {
      boxShadow: {
        'custom': '20px 20px rgba(0, 184, 40, 1)',
      }
    }
  },
  plugins: [],
}