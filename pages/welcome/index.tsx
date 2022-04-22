import type { NextPage } from "next";

import { APP_ROUTES } from "constants/index";
import Anchor from "components/Anchor";
import styles from "./welcome.module.scss";

const Welcome: NextPage = () => {
  return (
    <div className={styles.welcome}>
      <h3>Welcome!</h3>
      <p>
        This site can be used to search data about Movies, TV Series, and Games
        by their title. Navigate to the{" "}
        <Anchor href={APP_ROUTES.search}>Search</Anchor> page to begin your
        search.
      </p>

      <h4>
        Here are links to some of the resources I used to create this website:
      </h4>
      <ul>
        <li>
          <Anchor isOpenNewTab href="https://github.com/adrian-faustino">
            GitHub code repository
          </Anchor>
        </li>
        <li>
          <Anchor isOpenNewTab href="https://www.omdbapi.com/">
            OMDb API
          </Anchor>
        </li>
        <li>
          <Anchor isOpenNewTab href="https://www.imdb.com/">
            IMDd
          </Anchor>
        </li>
      </ul>
    </div>
  );
};

export default Welcome;
