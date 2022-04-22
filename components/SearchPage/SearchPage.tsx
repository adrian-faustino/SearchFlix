import React, { FunctionComponent } from "react";

import SearchResultCard from "components/SearchResultCard";
import TextField from "components/TextField";
import AsyncComponentWrapper from "components/AsyncComponentWrapper";
import AppLogo from "components/AppLogo";
import { OMDB_API_MIN_SEARCH_TERM_LEN } from "constants/index";
import { ISearchResult } from "types/index";
import useSearchContainer from "./useSearchContainer";

import styles from "./SearchPage.module.scss";

interface ISearchPageProps {}

const SearchPage: FunctionComponent<ISearchPageProps> = () => {
  const { isFetching, searchTerm, onSearchFieldChange, searchResults } =
    useSearchContainer();

  return (
    <div className={styles.SearchPage}>
      <section className={styles.SearchPage__field}>
        <AppLogo large />

        {/* Search bar */}
        <TextField
          name="searchTerm"
          value={searchTerm}
          label="Search by title"
          onChange={onSearchFieldChange}
          helperText={`Enter ${OMDB_API_MIN_SEARCH_TERM_LEN} characters to trigger a search`}
        />
      </section>

      {/* Search list */}
      <section className={styles.SearchPage__results}>
        <AsyncComponentWrapper isFetching={isFetching}>
          {searchResults.map((result: ISearchResult) => (
            <SearchResultCard searchResult={result} key={result.imdbID} />
          ))}

          {searchResults.length === 0 &&
            searchTerm.length >= OMDB_API_MIN_SEARCH_TERM_LEN && (
              <span className="color-secondary margin-top-16">
                No results found.
              </span>
            )}
        </AsyncComponentWrapper>
      </section>
    </div>
  );
};

export default SearchPage;
