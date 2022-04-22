import React, { useContext, FunctionComponent } from "react";
import Head from "next/head";

import Nav from "components/Nav";
import Footer from "components/Footer";
import Dialog from "components/Dialog";
import { DialogManagerContext } from "contexts/DialogManagerContext";
import { TGenericChildren } from "types/index";
import styles from "./Layout.module.scss";

interface ILayoutProps {
  children: TGenericChildren;
}

const Layout: FunctionComponent<ILayoutProps> = ({ children }) => {
  const { dialogComponent, dialogProps } = useContext(DialogManagerContext);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Search Movies and TV Series" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <Nav />
      <main className={styles.Layout__main}>{children}</main>
      <Footer />

      <Dialog
        open={!!dialogComponent}
        title={dialogProps?.title}
        content={dialogComponent}
        onPrimaryBtnClick={dialogProps?.onPrimaryBtnClick}
        onSecondaryBtnClick={dialogProps?.onSecondaryBtnClick}
      />
    </>
  );
};

export default Layout;
