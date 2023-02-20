/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#131432",
      secondary: "#4A3AFF",
      hover: "#07D2FF",
      background: "#FFFFFF",
      lang: "#CBC9D7",
      footprint: "#E9EFFF",
      inputColor: "#F6F9FF",
      black: "rgb(0,0,0)",
      white: "#FFFFFF",
    },
    borderColor: {
      primary: "#131432",
      secondary: "#4A3AFF",
      hover: "#07D2FF",
      background: "#FFFFFF",
      lang: "#CBC9D7",
      footprint: "#E9EFFF",
      inputColor: "#F6F9FF",
      black: "rgb(0,0,0)",
      white: "#FFFFFF",
    },
    backgroundColor: {
      primary: "#131432",
      secondary: "#4A3AFF",
      hover: "#07D2FF",
      background: "#FFFFFF",
      lang: "#CBC9D7",
      footprint: "#E9EFFF",
      inputColor: "#F6F9FF",
      black: "rgb(0,0,0)",
      white: "#FFFFFF",
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1090px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      xxl: "1440px",
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      sans: ["Pretendard"],
    },
  },
};
