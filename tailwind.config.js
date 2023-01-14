/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "dark-border": "#ffffff1a",
        "dark-bg": "#050509",
        "dark-secondary": "#0f0f13",
        primary: "#7994ff",
      },
    },
  },
  plugins: [],
}
