import type { NextPage } from "next";
import { useState } from "react";

import { MOVIE, SERIES, SEARCH_RESULTS } from "constants/index";
import MediaCard from "components/MediaCard";
import SearchResultCard from "components/SearchResultCard";
import TextField from "components/TextField";

// TODO: remove
import useFetch from "hooks/useFetch";
import { IMDB_API_BASE_URL } from "constants/index";

const emptyStr = "";

const Search: NextPage = () => {
  const [searchVal, setSearchVal] = useState<string>(emptyStr);

  const url = searchVal ? `${IMDB_API_BASE_URL}&s=${searchVal}` : emptyStr; //
  const { response, error, isFetching } = useFetch(url);

  const onChange = (e) => {
    const value = e?.target?.value || emptyStr;
    setSearchVal(value);
  };

  return (
    <div>
      <h1>Search</h1>

      {/* Search bar */}
      <TextField
        name="searchVal"
        value={searchVal}
        label="Search by title"
        onChange={onChange}
        helperText="Enter more than 3 chars"
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
