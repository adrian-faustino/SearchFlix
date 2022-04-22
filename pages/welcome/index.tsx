import type { NextPage } from "next";

import { APP_ROUTES } from "constants/index";
import Anchor from "components/Anchor";
import styles from "./welcome.module.scss";

const Welcome: NextPage = () => {
  return (
    <div className={styles.welcome}>
      <section className={styles.welcome__about}>
        <h1 className="color-attention margin-bottom-16">Welcome!</h1>
        <p>
          This site can be used to search data about Movies, TV Series, and
          Games by their title.
        </p>
        <p>
          Navigate to the{" "}
          <Anchor className="bold" href={APP_ROUTES.search}>
            Search
          </Anchor>{" "}
          page to begin your search.
        </p>

        <h4 className="margin-top-16">
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
      </section>
    </div>
  );
};

export default Welcome;
