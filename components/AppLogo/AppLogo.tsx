import React, { FunctionComponent } from "react";
import classNames from "classnames";

import { APP_ROUTES } from "constants/index";
import styles from "./AppLogo.module.scss";

interface IAppLogoProps {
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  className?: string;
}

const AppLogo: FunctionComponent<IAppLogoProps> = ({
  small,
  medium,
  large,
  className,
}) => {
  const containerClassnames: string = classNames(styles.AppLogo, className, {
    [styles["AppLogo--small"]]: small,
    [styles["AppLogo--medium"]]: medium,
    [styles["AppLogo--large"]]: large,
  });

  return (
    <a className={containerClassnames} href={APP_ROUTES.home}>
      <span className={styles.AppLogo__darkText}>Search</span>
      <span>Flix</span>
    </a>
  );
};

export default AppLogo;
