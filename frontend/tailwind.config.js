/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#B71F31",
        secondary: "#F1E9DE",
      },
      backgroundSize: {
        "size-100": "100% 100%",
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
        "pos-150": "105% 105%",
      },
    },
  },
  plugins: [],
};
