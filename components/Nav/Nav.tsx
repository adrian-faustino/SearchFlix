import React, { FunctionComponent } from "react";

import AppLogo from "components/AppLogo";
import Anchor from "components/Anchor";
import { APP_ROUTES } from "constants/index";
import styles from "./Nav.module.scss";

interface INavProps {}

const Nav: FunctionComponent<INavProps> = () => {
  return (
    <nav className={styles.Nav}>
      <ol>
        <AppLogo medium />

        <li>
          <Anchor href={APP_ROUTES.welcome}>Home</Anchor>
        </li>

        <li>
          <Anchor href={APP_ROUTES.search}>Search</Anchor>
        </li>
      </ol>
    </nav>
  );
};

export default Nav;
