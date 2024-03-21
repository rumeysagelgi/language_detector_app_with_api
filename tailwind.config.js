module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    screens: {
      md: { max: "767px" },
    },
    fontFamily: {
      slackside: ["Slackside One", "cursive"],
      raleway: ["Raleway", "sans-serif"],
    },
    colors: {
      primary: "#000000",
      secondary: "#FFFFFF",
      blue: "#3ba9f7",
    },
    boxShadow: {
      'textarea': "0 20px 50px rgba(8, 112, 184, 0.7)",
      'detected': "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset", 
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

