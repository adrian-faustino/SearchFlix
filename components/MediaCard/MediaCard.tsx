import React, { FunctionComponent } from "react";

import { ISeries, IMovie } from "types/index";
import styles from "./MediaCard.module.scss";

type IMediaCardProps = {
  media: IMovie | ISeries;
};

const MediaCard: FunctionComponent<IMediaCardProps> = ({ media = {} }) => {
  return (
    <div className={styles.MediaCard}>
      {/* <img src={media.Poster} alt="Media poster" /> */}

      <section>
        <h3>{media.Title}</h3>

        <div>
          <span>{media.Year}</span>
          <span>{media.Rated}</span>
          {/* TODO: format time if over 60m */}
          <span>{media.Runtime}</span>
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
