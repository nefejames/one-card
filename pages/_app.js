import GlobalStyle from "../styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
