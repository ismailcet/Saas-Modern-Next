/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-color": "#02073E",
        "second-color": "#8D448B",
        "disabled-color": "#343d48",
      },
      backgroundImage: {
        "header-image": "url('/images/banner-bg.jpg')",
      },
    },
  },
  plugins: [],
};
