/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  media: false,
  mode: 'jit',
  theme: {
    extend: {}
  },
  plugins: [require('tailwind-filter-utilities'), require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')]
}
