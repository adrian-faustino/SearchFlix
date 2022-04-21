import type { AppProps } from "next/app";

import Layout from "components/Layout";
import DialogManagerContextProvider from "contexts/DialogManagerContext";
import "styles/index.scss";
import "styles/colors.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DialogManagerContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DialogManagerContextProvider>
  );
}

export default MyApp;
