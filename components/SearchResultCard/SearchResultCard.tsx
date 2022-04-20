import React, { FunctionComponent } from "react";

import { ISearchResult } from "types/index";
import styles from "./SearchResultCard.module.scss";

type ISearchResultCardProps = {
  searchResult: ISearchResult;
};

const SearchResultCard: FunctionComponent<ISearchResultCardProps> = ({
  searchResult,
}) => {
  // TODO: dry up code into util fn
  const [startYear] = searchResult.Year?.split("–");
  return (
    <div className={styles.SearchResultCard}>
      {/* <img src={searchResult.Poster} alt="Media poster" /> */}

      <section>
        <h4>{searchResult.Title}</h4>

        <div>
          <span>{startYear}</span>
          <span>{searchResult.Type}</span>
        </div>
      </section>
    </div>
  );
};

SearchResultCard.defaultProps = {
  searchResult: {},
};

export default SearchResultCard;
