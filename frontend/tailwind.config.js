/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // customize colors
    extend: {
      colors: {
        "e-red": "#ea2e0e",
      },
    },
  },
  plugins: [],
};
