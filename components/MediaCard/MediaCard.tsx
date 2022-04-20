import React, { FunctionComponent } from "react";

import { ISeries, IMovie } from "types/index";
import { MEDIA_TYPES } from "constants/index";
import styles from "./MediaCard.module.scss";

type IMediaCardProps = {
  media: IMovie | ISeries;
};

const MediaCard: FunctionComponent<IMediaCardProps> = ({ media = {} }) => {
  const [startYear] = media.Year?.split("–");
  return (
    <div className={styles.MediaCard}>
      {/* <img src={media.Poster} alt="Media poster" /> */}

      <section>
        <h3>{media.Title}</h3>

        <div>
          <span>{startYear}</span>
          <span>{media.Rated}</span>
          {/* TODO: format time if over 60m */}
          {media.Type === MEDIA_TYPES.movie && (
            <span>
              {media.Runtime}
              {/* TODO: format plural */}
            </span>
          )}
          {media.Type === MEDIA_TYPES.series && (
            <span>{media.totalSeasons} season(s)</span>
          )}
        </div>

        <div>
          {media.Genre.split(", ").map((genre) => (
            <span>{genre}</span>
          ))}
        </div>

        <p>{media.Plot}</p>

        <div>Starring: {media.Actors}</div>

        <div>Directed by: {media.Director}</div>
        <div>Written by: {media.Writer}</div>
        <div>Awards: {media.Awards}</div>
        <div>
          Released on {media.Released} {`(${media.Country})`}
        </div>

        <a href={`https://www.imdb.com/title/${media.imdbID}`} target="_blank">
          View on IMDB
        </a>
      </section>
    </div>
  );
};

export default MediaCard;
