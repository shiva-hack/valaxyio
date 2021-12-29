module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "steel-gray": {
          DEFAULT: "#1E1B28",
          50: "#706596",
          100: "#675D89",
          200: "#554C71",
          300: "#433C59",
          400: "#302B40",
          500: "#1E1B28",
          600: "#050407",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
      },
    },
  },
  plugins: [],
};
