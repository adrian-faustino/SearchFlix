import type { NextPage } from "next";

import SearchResultCard from "components/SearchResultCard";
import Dialog from "components/Dialog";
import TextField from "components/TextField";
import AsyncComponentWrapper from "components/AsyncComponentWrapper";
import AppLogo from "components/AppLogo";
import { OMDB_API_MIN_SEARCH_TERM_LEN } from "constants/index";
import useSearchContainer from "./useSearchContainer";
import styles from "./search.module.scss";

// TODO: Remove
import { SEARCH_RESULTS } from "constants/index";

const Search: NextPage = () => {
  const { isFetching, searchTerm, onSearchFieldChange, searchResults } =
    useSearchContainer();

  return (
    <div className={styles.search}>
      <section className={styles.search__field}>
        <AppLogo />

        {/* Search bar */}
        <TextField
          name="searchTerm"
          value={searchTerm}
          label="Search by title"
          onChange={onSearchFieldChange}
          helperText={`Enter ${OMDB_API_MIN_SEARCH_TERM_LEN} characters to begin search`}
        />
      </section>

      {/* Search list */}
      <section className={styles.search__results}>
        <AsyncComponentWrapper isFetching={isFetching}>
          {SEARCH_RESULTS.Search.map((result, i) => (
            <SearchResultCard searchResult={result} key={i} />
          ))}
        </AsyncComponentWrapper>
      </section>
    </div>
  );
};

export default Search;
