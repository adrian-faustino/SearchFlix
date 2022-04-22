import React, { FunctionComponent } from "react";

import styles from "./Footer.module.scss";

interface IFooterProps {}

const Footer: FunctionComponent<IFooterProps> = () => {
  return <footer className={styles.Footer}>Footer</footer>;
};

export default Footer;
