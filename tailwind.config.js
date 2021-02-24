module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        "400px": "400px",
        "500px": "500px",
        "700px": "700px",
        "900px": "900px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
