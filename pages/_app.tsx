import type { AppProps } from "next/app";

import Layout from "components/Layout";
import DialogManagerContextProvider from "contexts/DialogManagerContext";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import "styles/index.scss";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <DialogManagerContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DialogManagerContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
