import React, { FunctionComponent } from "react";
import Image from "next/image";

import { IMovie, ISeries } from "types/index";
import { MEDIA_TYPES } from "constants/index";
import styles from "./MediaCard.module.scss";

interface IMediaCardProps {
  media: IMovie | ISeries;
}

const MediaCard: FunctionComponent<IMediaCardProps> = ({ media }) => {
  // TODO: dry up code into util fn
  const [startYear] = media.Year?.split("–");
  return (
    <div className={styles.MediaCard}>
      <Image
        className={styles.MediaCard__img}
        src={media.Poster}
        alt={`${media.Title} poster`}
        height={400}
        width={300}
      />

      <section className={styles.MediaCard__details}>
        <h2>{media.Title}</h2>

        <div className={styles.MediaCard__details__subheader}>
          <span>{startYear}</span>
          <span className={styles.MediaCard__details__subheader__rating}>
            {media.Rated}
          </span>
          {/* TODO: format time if over 60m */}
          {media.Type === MEDIA_TYPES.movie && (
            <span>
              {media.Runtime}
              {/* TODO: format plural */}
            </span>
          )}
          {media.Type === MEDIA_TYPES.series && (
            <small>{media.totalSeasons} season(s)</small>
          )}
        </div>

        <div className={styles.MediaCard__details__genres}>
          {media.Genre.split(", ").map((genre, i) => (
            <span key={i}>{genre}</span>
          ))}
        </div>

        <p>{media.Plot}</p>

        <dl className={styles.MediaCard__details__descriptionList}>
          <dt>
            <b>Starring:</b> {media.Actors}
          </dt>
          <dt>
            <b>Directed by:</b> {media.Director}
          </dt>
          <dt>
            <b>Written by:</b> {media.Writer}
          </dt>
          <dt>
            <b>Awards:</b> {media.Awards}
          </dt>
          <dt>
            Released on {media.Released} {`(${media.Country})`}
          </dt>
        </dl>

        <a
          className={styles.MediaCard__details__imdbLink}
          href={`https://www.imdb.com/title/${media.imdbID}`}
          target="_blank"
          rel="noreferrer"
        >
          View on IMDB
        </a>
      </section>
    </div>
  );
};

MediaCard.defaultProps = {
  media: {},
};

export default MediaCard;
