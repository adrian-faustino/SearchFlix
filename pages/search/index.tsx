import type { NextPage } from "next";

import SearchPage from "components/SearchPage";
import styles from "./search.module.scss";

const Search: NextPage = () => {
  return (
    <div className={styles.search}>
      <SearchPage />
    </div>
  );
};

export default Search;
