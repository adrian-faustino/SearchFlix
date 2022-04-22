import React, { FunctionComponent } from "react";

import AppLogo from "components/AppLogo";
import { APP_ROUTES } from "constants/index";
import styles from "./Nav.module.scss";

interface INavProps {}

const Nav: FunctionComponent<INavProps> = () => {
  return (
    <nav className={styles.Nav}>
      <ol>
        <AppLogo medium />

        <li>
          <a href={APP_ROUTES.home}>Home</a>
        </li>

        <li>
          <a href={APP_ROUTES.search}>Search</a>
        </li>
      </ol>
    </nav>
  );
};

export default Nav;
