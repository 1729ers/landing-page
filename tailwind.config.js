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
          light: "#B2BBF2",
          DEFAULT: "#B2ABF2",
          dark: "#B29BF2",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
