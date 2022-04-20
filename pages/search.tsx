import type { NextPage } from "next";

import { MOVIE, SERIES, SEARCH_RESULTS } from "constants/index";
import MediaCard from "components/MediaCard";
import SearchResultCard from "components/SearchResultCard";

const Search: NextPage = () => {
  return (
    <div>
      <h1>Search</h1>

      {/* Search bar */}

      {/* Search list */}
      {SEARCH_RESULTS.Search.map((result) => (
        <SearchResultCard searchResult={result} />
      ))}

      {/* Movie/Series Card */}
      <MediaCard media={SERIES} />
    </div>
  );
};

export default Search;
