export interface IRating {
  Source: string;
  Value: string;
}

export interface ISearchResult {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface IMedia extends ISearchResult {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: IRating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  Response: string;
}

export interface IMovie extends IMedia {
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
}

export interface ISeries extends IMedia {
  totalSeasons: string;
}
