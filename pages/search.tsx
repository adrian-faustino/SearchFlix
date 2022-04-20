import type { NextPage } from "next";
import { useState } from "react";

import { MOVIE, SERIES, SEARCH_RESULTS } from "constants/index";
import MediaCard from "components/MediaCard";
import SearchResultCard from "components/SearchResultCard";
import TextField from "components/TextField";
import { OMDB_API_MIN_SEARCH_TERM_LEN } from "constants/index";

// TODO: remove
import useFetch from "hooks/useFetch";
import { API_ROUTES } from "constants/index";

const emptyStr = "";

const Search: NextPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>(emptyStr);

  const url = searchTerm
    ? `${API_ROUTES.omdb}/?searchTerm=${searchTerm}`
    : emptyStr; //
  const { response, error, isFetching } = useFetch(url);

  const onChange = (e) => {
    const value = e?.target?.value || emptyStr;
    setSearchTerm(value);
  };

  return (
    <div>
      <h1>Search</h1>

      {/* Search bar */}
      <TextField
        name="searchTerm"
        value={searchTerm}
        label="Search by title"
        onChange={onChange}
        helperText={`Enter ${OMDB_API_MIN_SEARCH_TERM_LEN} characters to begin search`}
      />

      {/* Search list */}
      {SEARCH_RESULTS.Search.map((result, i) => (
        <SearchResultCard searchResult={result} key={i} />
      ))}

      {/* Movie/Series Card */}
      <MediaCard media={SERIES} />
    </div>
  );
};

export default Search;
