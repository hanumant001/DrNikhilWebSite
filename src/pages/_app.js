import "@/styles/globals.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "@/theme/theme";
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
  <Component {...pageProps} />
  </ThemeProvider>
);
}
