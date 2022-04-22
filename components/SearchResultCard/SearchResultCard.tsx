import React, { useContext, FunctionComponent } from "react";

import { ISearchResult } from "types/index";
import { DialogManagerContext } from "contexts/DialogManagerContext";
import MediaCardDialog from "components/MediaCardDialog";
import styles from "./SearchResultCard.module.scss";

// TODO: remove
import { SERIES } from "constants/index";

type ISearchResultCardProps = {
  searchResult: ISearchResult;
};

const SearchResultCard: FunctionComponent<ISearchResultCardProps> = ({
  searchResult,
}) => {
  const { onOpenDialog } = useContext(DialogManagerContext);

  // TODO: dry up code into util fn
  const [startYear] = searchResult.Year?.split("–");

  const onCardClick = () => {
    onOpenDialog(<MediaCardDialog imdbID={searchResult.imdbID} />);
  };

  return (
    <div className={styles.SearchResultCard} onClick={onCardClick}>
      <img
        className={styles.SearchResultCard__img}
        src={searchResult.Poster}
        alt={`${searchResult.Title} poster`}
      />

      <section className={styles.SearchResultCard__details}>
        <h3>{searchResult.Title}</h3>

        <div className={styles.SearchResultCard__metaData}>
          <span>{startYear}</span>
          <span>•</span>
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
