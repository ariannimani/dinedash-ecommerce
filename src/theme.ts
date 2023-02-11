import { DefaultTheme } from "styled-components";

export const themeTypes = {
  light: "light",
  dark: "dark",
};

const lightPalette = {
  primary: {
    300: "#0C0C23",
    400: "#FFFFFF",
    500: "#EFF5FF",
    600: "#FFBB5E",
    610: "#FFF4EF",
    700: "#FF6D93",
    710: "#ECA3B6",
    720: "#FFEFF3",
    800: "#77777A",
    810: "#8D8C8F",
    820: "#ABAAAD",
    830: "#EAE8ED",
    840: "#F2F0F5",
    850: "#FBFBFB",
  },
};

export const lightTheme: DefaultTheme = {
  type: themeTypes.light,
  background: {
    primary: lightPalette.primary[400],
    secondary: lightPalette.primary[300],
  },
  text: {
    primary: lightPalette.primary[300],
    secondary: lightPalette.primary[820],
  },
  shadow: {
    primary: `0px 1px 0px ${lightPalette.primary[830]}`,
    secondary: "none",
  },
  icons: {
    primary: { background: lightPalette.primary[830], radius: "6px" },
    secondary: { background: lightPalette.primary[300], radius: "none" },
  },
  button: {
    primary: {
      background: lightPalette.primary[300],
      color: lightPalette.primary[400],
      border: "none",
      radius: "6px",
      hover: {
        background: `linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), ${lightPalette.primary[300]}`,
      },
    },
    secondary: {
      background: lightPalette.primary[400],
      border: `1px solid ${lightPalette.primary[830]}`,
      color: lightPalette.primary[800],
      radius: "6px",
      hover: {
        border: `1px solid ${lightPalette.primary[300]}`,
        color: lightPalette.primary[300],
      },
    },
  },
};

export const darkTheme: DefaultTheme = {
  type: themeTypes.dark,
  background: {
    primary: lightPalette.primary[400],
    secondary: lightPalette.primary[300],
  },
  text: {
    primary: lightPalette.primary[300],
    secondary: lightPalette.primary[820],
  },
  shadow: {
    primary: `0px 1px 0px ${lightPalette.primary[830]}`,
    secondary: "none",
  },
  icons: {
    primary: { background: lightPalette.primary[830], radius: "6px" },
    secondary: { background: lightPalette.primary[830], radius: "none" },
  },
};
