import React, { FunctionComponent } from "react";

import Image from "components/Image";
import Anchor from "components/Anchor";
import { IMovie, ISeries } from "types/index";
import { MEDIA_TYPES } from "constants/index";
import styles from "./MediaCard.module.scss";

interface IMediaCardProps {
  media: IMovie | ISeries;
}

const MediaCard: FunctionComponent<IMediaCardProps> = ({ media }) => {
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
        <h1 className="color-attention">{media.Title}</h1>

        <div className={styles.MediaCard__details__subheader}>
          <span className="bold">{startYear}</span>
          <span className={styles.MediaCard__details__subheader__rating}>
            {media.Rated}
          </span>
          {media.Type === MEDIA_TYPES.movie && (
            <span className="bold">{media.Runtime}</span>
          )}

          {/* TODO: format noun to plural/singular depending on series count */}
          {media.Type === MEDIA_TYPES.series && (
            <span>{media.totalSeasons} season(s)</span>
          )}
        </div>

        <div className={styles.MediaCard__details__genres}>
          {media.Genre.split(", ").map((genre, i) => (
            <small key={i}>{genre}</small>
          ))}
        </div>

        <p className="color-secondary">{media.Plot}</p>

        <dl className={styles.MediaCard__details__descriptionList}>
          <dt>
            <small>
              <b>Starring: </b>
              {media.Actors}
            </small>
          </dt>
          <dt>
            <small>
              <b>Directed by: </b> {media.Director}{" "}
            </small>
          </dt>
          <dt>
            <small>
              <b>Written by: </b> {media.Writer}{" "}
            </small>
          </dt>
          <dt>
            <small>
              <b>Awards: </b> {media.Awards}{" "}
            </small>
          </dt>
          <dt>
            <small className="color-disabled">
              Released on {media.Released} {`(${media.Country})`}
            </small>
          </dt>
        </dl>

        <Anchor
          className={styles.MediaCard__details__imdbLink}
          href={`https://www.imdb.com/title/${media.imdbID}`}
        >
          View on IMDB
        </Anchor>
      </section>
    </div>
  );
};

export default MediaCard;
