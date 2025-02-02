/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "false",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm0: "540px",
        md2: "913px",
        lg1: "1100px",
        xl3: "1600px",
      },
      fontFamily: {
        lato: ['"Lato"', "sans-serif"],
        signature: ['"signature"', "sans-serif"],
      },
      colors: {
        offWhite: "#fffaf0",
        lightPink: "#EC6164",
        navyBlue: "#071C40",
        peanut: "#e58c10",
        lightBlue: "#c3e9da",
        royalBlue: "#1214EB",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "light", // name of one of the included themes for dark mode
    base: false, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};

