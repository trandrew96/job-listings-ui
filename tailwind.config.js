/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#fff",
      darkCyan: "hsl(180, 29%, 50%)",
      lightGrayishCyan: "hsl(180, 52%, 96%)",
      darkGrayishCyan: "hsl(180, 8%, 52%)",
    },
    extend: {
      backgroundImage: {
        "header-pattern": "url('/src/img/bg-header-desktop.svg')",
      },
    },
  },
  plugins: [],
};
