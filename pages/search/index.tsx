import type { NextPage } from "next";

import MediaCard from "components/MediaCard";
import SearchResultCard from "components/SearchResultCard";
import Dialog from "components/Dialog";
import TextField from "components/TextField";
import AsyncComponentWrapper from "components/AsyncComponentWrapper";
import { OMDB_API_MIN_SEARCH_TERM_LEN } from "constants/index";
import useSearchContainer from "./useSearchContainer";
import styles from "./search.module.scss";

// TODO: Remove
import { SERIES, SEARCH_RESULTS } from "constants/index";

const Search: NextPage = () => {
  const { isFetching, searchTerm, onSearchFieldChange, searchResults } =
    useSearchContainer();

  return (
    <div className={styles.search}>
      <section className={styles.search__field}>
        <h1>Search</h1>

        {/* Search bar */}
        <TextField
          name="searchTerm"
          value={searchTerm}
          label="Search by title"
          onChange={onSearchFieldChange}
          helperText={`Enter ${OMDB_API_MIN_SEARCH_TERM_LEN} characters to begin search`}
        />
      </section>

      <section className={styles.search__results}>
        <AsyncComponentWrapper isFetching={isFetching}>
          {/* Search list */}
          {SEARCH_RESULTS.Search.map((result, i) => (
            <SearchResultCard searchResult={result} key={i} />
          ))}
        </AsyncComponentWrapper>
      </section>

      {/* Movie/Series Card */}
      <MediaCard media={SERIES} />
    </div>
  );
};

export default Search;
