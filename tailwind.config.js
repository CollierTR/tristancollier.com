/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'light': '#ffffff',
      'dark': '#0F0E0C',
      'primary': '#2E8971',
      'light-primary': '#46D3AF',
      'dark-primary': '#1F5244',
    }
  },
  plugins: [],
}