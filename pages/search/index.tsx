import type { NextPage } from "next";
import { useState } from "react";

import { MOVIE, SERIES, SEARCH_RESULTS } from "constants/index";
import MediaCard from "components/MediaCard";
import SearchResultCard from "components/SearchResultCard";
import TextField from "components/TextField";
import { OMDB_API_MIN_SEARCH_TERM_LEN } from "constants/index";
import useSearchContainer from "./useSearchContainer";

// TODO: remove
import useFetch from "hooks/useFetch";
import { API_ROUTES } from "constants/index";

const Search: NextPage = () => {
  const { isFetching, searchTerm, onSearchFieldChange, searchResults } =
    useSearchContainer();

  return (
    <div>
      <h1>Search</h1>

      {/* Search bar */}
      <TextField
        name="searchTerm"
        value={searchTerm}
        label="Search by title"
        onChange={onSearchFieldChange}
        helperText={`Enter ${OMDB_API_MIN_SEARCH_TERM_LEN} characters to begin search`}
      />

      {isFetching && <div>Fetching...</div>}

      {/* Search list */}
      {searchResults.map((result, i) => (
        <SearchResultCard searchResult={result} key={i} />
      ))}

      {/* Movie/Series Card */}
      <MediaCard media={SERIES} />
    </div>
  );
};

export default Search;
