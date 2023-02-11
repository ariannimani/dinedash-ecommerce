import { DefaultTheme } from "styled-components";

export const themeTypes = {
  light: "light",
  dark: "dark",
};

export const lightTheme: DefaultTheme = {
  type: themeTypes.light,
  background: {
    primary: "#ffffff ",
    secondary: "#0C0C23",
  },
  text: {
    primary: "#0C0C23",
    secondary: "#ABAAAD",
  },
  shadow: { primary: "0px 1px 0px #EAE8ED", secondary: "none" },
  icons: {
    primary: { background: "#EAE8ED", radius: "6px" },
    secondary: { background: "#0C0C23", radius: "none" },
  },
  button: {
    primary: {
      background: "#0C0C23",
      color: "#FFFFFF",
      border: "none",
      radius: "6px",
      hover: {
        background:
          "linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), #0C0C23",
      },
    },
    secondary: {
      background: "#FFFFFF",
      border: "1px solid #EAE8ED",
      color: "#77777A",
      radius: "6px",
      hover: { border: "1px solid #0C0C23", color: "#0C0C23" },
    },
  },
};

export const darkTheme: DefaultTheme = {
  type: themeTypes.dark,
  background: {
    primary: "#ffffff ",
    secondary: "#0C0C23",
  },
  text: {
    primary: "#0C0C23",
    secondary: "#ABAAAD",
  },
  shadow: { primary: "0px 1px 0px #EAE8ED", secondary: "none" },
  icons: {
    primary: { background: "#EAE8ED", radius: "6px" },
    secondary: { background: "#EAE8ED", radius: "none" },
  },
};
