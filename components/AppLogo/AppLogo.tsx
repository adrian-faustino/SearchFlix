import React, { FunctionComponent } from "react";

import styles from "./AppLogo.module.scss";

type IAppLogoProps = {};

const AppLogo: FunctionComponent<IAppLogoProps> = ({}) => {
  return <span className={styles.AppLogo}>SearchFlix</span>;
};

export default AppLogo;
