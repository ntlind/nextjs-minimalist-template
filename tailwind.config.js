module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: "#00b0ff",
      secondary: "#1886E4",
      tertiary: "#33C0FF",
      green: "#00ff51",
      yellow: "#ffd500",
      coral: "#ff5500",
      gray: "#222222",
      purple: "#2600ff",
      lightGrayText: "#757575",
      black: "#000",
      white: "#fff",
      nearWhite: "#ccc",
      nearBlack: "#3C4858",
      lightGrayBackground: "#F5F7FC",
      eggshell: "#fafafa",
    },
    extend: {},
  },
  fontFamily: {
    sans: ["Poppins"],
  },
  variants: {
    extend: {},
  },
  plugins: [],
};