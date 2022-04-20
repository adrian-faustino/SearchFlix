import type { NextPage } from "next";

import { MOVIE, SERIES } from "constants/index";
import MediaCard from "components/MediaCard";

const Search: NextPage = () => {
  return (
    <div>
      <h1>Search</h1>

      {/* Search bar */}

      {/* Movie/Series Card */}
      <MediaCard media={SERIES} />
    </div>
  );
};

export default Search;
