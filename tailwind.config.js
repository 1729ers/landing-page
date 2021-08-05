module.exports = {
  prefix: "",
  purge: {
    enable: true,
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        md: "0 0px 8px 0 rgba(0, 0, 0, 0.25)",
        highlight: "0 0px 8px 0 rgba(178, 255, 169, 0.25)",
      },
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
    extend: {
      boxShadow: ["hover"],
    },
  },
  plugins: [],
};
