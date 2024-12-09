/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      // Custom color palette with a professional finance vibe
      colors: {
        primary: "#1B5E20", // Dark Green (for headers or accents)
        secondary: "#2E7D32", // Medium Green (for buttons or highlights)
        accent: "#81C784", // Light Green (used for subtle accents or hover states)
        background: "#F1F8E9", // Pale Greenish White (for a clean background)
        foreground: "#0D2818", // Deep Green-Black (text color for good readability)
        danger: "#D32F2F", // Red (for warnings or errors)
        success: "#4CAF50", // Bright Green (used for positive actions like success messages)
        gradientFrom: "#81C784", // Starting point for green gradients
        gradientTo: "#1B5E20", // Ending point for green gradients
      },
      // Gradients for background or button effects
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to right, #81C784, #1B5E20)', // Green gradient for hero sections
        'button-gradient': 'linear-gradient(to bottom, #2E7D32, #1B5E20)', // Subtle gradient for buttons
      },
      // Existing transition properties
      transitionProperty: {
        'height': 'height',
        'width': 'width',
      },
    },
  },
  plugins: [],
}
