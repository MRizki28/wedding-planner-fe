/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        poppinsSemiBold: 'poppins-semibold',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

