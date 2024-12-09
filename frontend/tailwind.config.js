/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {},
    colors: {}, // Removes Tailwind's default colors
  },
  plugins: [],
};
