import { CssBaseline } from "@mui/material";
import { EmotionCache } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import { createEmotionCache, theme } from "../src/theme";

interface MyAppProps {
  Component: React.ComponentType;
  emotionCache?: EmotionCache;
  pageProps: any;
}

export const cache = createEmotionCache();

const MyApp: React.FC<MyAppProps> = (props) => {
  const { Component, emotionCache = cache, pageProps } = props;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
