const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "438px",
      si: "500px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        minLink: "#3f51d5",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
    },
    animation: {
      fadeIn: "fadeIn 0.4s ease-in-out",
    },
  },
  plugins: [],
};
