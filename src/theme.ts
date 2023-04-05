import { createTheme } from "@mui/material/styles";
import createCache from "@emotion/cache";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2196f3",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

export type Theme = typeof theme;

export const createEmotionCache = () => {
  return createCache({ key: "css" });
};
