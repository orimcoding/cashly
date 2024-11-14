/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all React components
    "./public/index.html",       // Include the HTML file
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4CAF50", // Example custom colors
        secondary: "#FF5722",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Example custom font
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};