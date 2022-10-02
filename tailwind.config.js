module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Roboto",
      secondary: "Lobster",
    },
    container: {
      padding: {
        DEFAULT: "1.5rem",
      },
    },
    
    extend: {
      colors: {
        light: "#666",
        primary: "#e75b1e",
        black: "#141415",
        white: "#fff",
        nav: "#272525",
      },
      backgroundColor: {
        linear: "rgba(231, 91, 30, 0.2)",
        gray: "#E0E0E0",
      },
      dropShadow: {
        primary: "0 .5rem 1.5rem rgba(0, 0, 0, .1",
      },
      letterSpacing: {
        widest: ".1rem",
      },
    },
  },
  plugins: [],
};
