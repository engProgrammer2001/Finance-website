/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-green": "#66bb6a",
        "yellow-accent": "#ffeb3b",
        "goldenrod": "#fbc02d",
        "soft-gray": "#f5f5f5",
      },
    },
  },
  plugins: [],
};
