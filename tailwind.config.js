module.exports = {
  prefix: "",
  purge: {
    enable: true,
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: {
          DEFAULT: "#565656",
        },
        highlight: {
          DEFAULT: "#B2FFA9",
        },
        secondary: {
          DEFAULT: "#B2ABF2",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
