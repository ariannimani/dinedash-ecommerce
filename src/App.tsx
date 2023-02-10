import { useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import { Footer, Header } from "components";

import { darkTheme, lightTheme, themeTypes } from "theme";
import { AppRoutes } from "routes";

export const GlobalStyle = createGlobalStyle`
*{
  font-family: "Montserrat", Helvetica, Arial, serif; 
}`;

const App = () => {
  const [themeType, setThemeType] = useState(themeTypes.light);

  const updateTheme = () =>
    themeType === themeTypes.light
      ? setThemeType(themeTypes.dark)
      : setThemeType(themeTypes.light);

  return (
    <ThemeProvider
      theme={themeType === themeTypes.dark ? darkTheme : lightTheme}
    >
      <GlobalStyle />

      <Header updateTheme={updateTheme} />
      <AppRoutes />

      <Footer />
    </ThemeProvider>
  );
};

export default App;
