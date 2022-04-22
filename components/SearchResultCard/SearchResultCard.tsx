import React, { useContext, FunctionComponent } from "react";

import Image from "components/Image";
import { ISearchResult } from "types/index";
import { DialogManagerContext } from "contexts/DialogManagerContext";
import MediaCardDialog from "components/MediaCardDialog";
import { toTitleCase } from "utils/string";
import styles from "./SearchResultCard.module.scss";

interface ISearchResultCardProps {
  searchResult: ISearchResult;
}

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
      <Image
        className={styles.SearchResultCard__img}
        src={searchResult.Poster}
        alt={`${searchResult.Title} poster`}
        height={300}
        width={250}
      />

      <section className={styles.SearchResultCard__details}>
        <h3>{searchResult.Title}</h3>

        <div className={styles.SearchResultCard__metaData}>
          <span>{startYear}</span>
          <span>•</span>
          <span>{toTitleCase(searchResult.Type)}</span>
        </div>
      </section>
    </div>
  );
};

export default SearchResultCard;
