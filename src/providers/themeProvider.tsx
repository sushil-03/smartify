import { createTheme } from "@mui/material/styles";

export const themeLight = createTheme({
  palette: {
    text: {
      primary: "#262D31",
      secondary: "#7B7B7B",
    },
    background: {
      default: "#EFEFEF",
    },
    primary: {
      light: "#FFFFFF",
      main: "#9747FF",
      dark: "#fffffff",
    },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});

export const themeDark = createTheme({
  palette: {
    text: {
      primary: "#FFFFFF",
      secondary: "#b2aeae",
    },
    background: {
      default: "#060606",
    },
    primary: {
      light: "#222222",
      main: "#9747FF",
      dark: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});
