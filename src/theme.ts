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
    secondary: { background: "#EAE8ED", radius: "none" },
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
