// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require("./src/colors.js");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      border: {
        5: "5px",
        6: "6px",
        7: "7px",
        8: "8px",
        9: "9px",
        10: "10px",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Inter", "sans-serif"],
      },
      spacing: {
        px: "1px",
        0: "0px",
        0.5: "0.125rem",
        1: "0.25rem",
        1.5: "0.375rem",
        2: "0.5rem",
        2.5: "0.625rem",
        3: "0.75rem",
        3.5: "0.875rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
        11: "2.75rem",
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        28: "7rem",
        32: "8rem",
        36: "9rem",
        40: "10rem",
        44: "11rem",
        48: "12rem",
        52: "13rem",
        56: "14rem",
        60: "15rem",
        64: "16rem",
        72: "18rem",
        80: "20rem",
        96: "24rem",
      },
      zIndex: {
        max: 1000,
      },
      height: {
        120: "46.25rem",
        app: "calc(100vh - 8rem)",
      },
      minWidth: {
        lg: "75vw",
        md: "50vw",
      },
      maxWidth: {
        lg: "720px",
        md: "420px",
      },
    },
    colors,
    fontSize: {
      label: "0.8125rem",
      h1: ["2.25rem", { lineHeight: "1.85rem" }],
      h2: ["1.5rem", { lineHeight: "1.4rem" }],
      h3: ["1.3125rem", { lineHeight: "1.1rem" }],
      xs: ["0.6875rem", { lineHeight: "auto" }],
      sm: ["0.75rem", { lineHeight: "auto" }],
      regular: "0.875rem",
      base: ["1rem", { lineHeight: "auto" }],
      ls: ["1.125rem", { lineHeight: "auto" }],
      lg: ["1.3125rem", { lineHeight: "auto" }],
      xl: ["1.5rem", { lineHeight: "auto" }],
      "2xl": ["2.25rem", { lineHeight: "auto" }],
    },
  },
  variants: {
    extend: {},
  },
  plugin: [],
};
