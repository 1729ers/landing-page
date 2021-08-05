module.exports = {
  prefix: "",
  purge: {
    enable: true,
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        sm: "14px",
        lg: "34px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
