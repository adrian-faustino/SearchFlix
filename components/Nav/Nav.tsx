import React, { FunctionComponent } from "react";

import { APP_ROUTES } from "constants/index";
import styles from "./Nav.module.scss";

type INavProps = {};

const Nav: FunctionComponent<INavProps> = () => {
  return (
    <nav className={styles.Nav}>
      <ol>
        <li>
          <a href={APP_ROUTES.welcome}>Home</a>
        </li>

        <li>
          <a href={APP_ROUTES.search}>Search</a>
        </li>
      </ol>
    </nav>
  );
};

export default Nav;
