import React from "react";
import App from "../pages/App.tsx";

import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { themeLight, themeDark } from "../providers/themeProvider.tsx";

const MainContainer = () => {
  const [light, setLight] = React.useState(true);
  return (
    <ThemeProvider theme={light ? themeLight : themeDark}>
      <CssBaseline />
      <App light={light} setLight={setLight} />
    </ThemeProvider>
  );
};

export default MainContainer;
