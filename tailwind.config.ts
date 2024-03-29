import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {

      content:{
        imageBalance:'url("/assets/Linebackground.svg")'
      },
      screens: {
        smPhone:"500px",
        laptop: "1200px",
      },
      colors: {
        light: {
          transparent: "transparent",
          current: "currentColor",
          primaryBlue: "#0062FF",
          secondaryBlue: "#0F1222",
          success700: "#027A48",
          emerald400: "#EBFBF3",
          pink200: "#FEEDEC",
          gray: {
            200: "#EAECF0",
            250: "#FCFCFD",
            800: "#1D2939",
            900: "#101828",
          },
          background: "#FAFAFB",
        },
        dark: {
          primaryBlue: "#0F1222",
          sencondaryBlue: "#0062FF",
          background: "#1e293b",
          gray700: "#334155",
          gray800: "#1D2939",
          white: "#f1f5f9",
        },
      },
      animation: {
        fadeIn: "fadeIn .4s ease",
      },
      keyframes: {
        fadeIn: {
          "0%": { transform: " translateX(-100px)", opacity: " 0;" },
          "100%": { transform: "translateX(0)", opacity: "1;" },
        },
      },
    },
    fontFamily: {
      manrope: ["Manrope", "sans-serif"],
    },
    
  },
  plugins: [],
};
export default config;
