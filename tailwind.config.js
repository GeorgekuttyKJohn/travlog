/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '430px',  // Mobile breakpoint
      'xl': '1440px', // Large desktop breakpoint
    }
  },
  plugins: [],
}

