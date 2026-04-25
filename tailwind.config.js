/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tw-primary': '#E63946',
        'tw-dark': '#222222',
        'tw-text-secondary': '#717171',
        'tw-border': '#DDDDDD',
        'tw-bg-alt': '#F7F7F7',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
