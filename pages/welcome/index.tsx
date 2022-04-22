import type { NextPage } from "next";

import styles from "./welcome.module.scss";

const Welcome: NextPage = () => {
  return (
    <div className={styles.welcome}>
      <h3>Welcome</h3>
    </div>
  );
};

export default Welcome;
