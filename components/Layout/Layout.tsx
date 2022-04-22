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
        <title>SearchFlix</title>
        <meta
          name="description"
          content="Search Movies, TV Series, and Games data"
        />
        <link rel="icon" href="/favicon.ico" />
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
