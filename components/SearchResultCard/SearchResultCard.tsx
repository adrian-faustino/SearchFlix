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
      <img src={searchResult.Poster} alt="Media poster" />

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
