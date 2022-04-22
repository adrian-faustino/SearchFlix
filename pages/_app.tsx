import type { AppProps } from "next/app";

import Layout from "components/Layout";
import DialogManagerContextProvider from "contexts/DialogManagerContext";
import ThemeContextProvider from "contexts/ThemeContext";
import "styles/index.scss";
import "styles/utils.scss";
import "styles/normalize.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <DialogManagerContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DialogManagerContextProvider>
    </ThemeContextProvider>
  );
}

export default MyApp;
