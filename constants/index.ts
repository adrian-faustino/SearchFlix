import { IMovie, ISeries } from "types/index";

export const APP_ROUTES = {
  home: "/",
  search: "/search",
};

export const API_ROUTES = {
  omdb: "/api/omdb",
};

export const MEDIA_TYPES = {
  movie: "movie",
  series: "series",
};

export const OMDB_API_MIN_SEARCH_TERM_LEN = 4;

// TODO: use server
export const IMDB_API_BASE_URL = `http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`;

// TODO: replace with fetched data
export const MOVIE: IMovie = {
  Title: "Avatar",
  Year: "2009",
  Rated: "PG-13",
  Released: "18 Dec 2009",
  Runtime: "162 min",
  Genre: "Action, Adventure, Fantasy",
  Director: "James Cameron",
  Writer: "James Cameron",
  Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver",
  Plot: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
  Language: "English, Spanish",
  Country: "United States",
  Awards: "Won 3 Oscars. 89 wins & 131 nominations total",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
  Ratings: [
    {
      Source: "Internet Movie Database",
      Value: "7.9/10",
    },
    {
      Source: "Rotten Tomatoes",
      Value: "82%",
    },
    {
      Source: "Metacritic",
      Value: "83/100",
    },
  ],
  Metascore: "83",
  imdbRating: "7.9",
  imdbVotes: "1,185,150",
  imdbID: "tt0499549",
  Type: "movie",
  DVD: "22 Apr 2010",
  BoxOffice: "$760,507,625",
  Production: "N/A",
  Website: "N/A",
  Response: "True",
};

export const SERIES: ISeries = {
  Title: "The King's Avatar",
  Year: "2017–",
  Rated: "TV-13",
  Released: "07 Apr 2017",
  Runtime: "24 min",
  Genre: "Animation, Action, Adventure",
  Director: "N/A",
  Writer: "N/A",
  Actors: "Ketsu, Xinzhu Tong, Guanlin Ji",
  Plot: "Ye Xiu, a top-tier pro-player in the MMORPG Glory is forced to retire. When Glory's 10th server launches, Ye Xiu reenters the game under a new character with 10 years of experience and self-made weapons, and his return aims for the s",
  Language: "Mandarin",
  Country: "China",
  Awards: "N/A",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BZjIyMjE5ZDYtMTQxNC00NTEzLTgwYzYtMmM0NDg3OWFlYWM5XkEyXkFqcGdeQXVyNjMxNzQ2NTQ@._V1_SX300.jpg",
  Ratings: [
    {
      Source: "Internet Movie Database",
      Value: "7.6/10",
    },
  ],
  Metascore: "N/A",
  imdbRating: "7.6",
  imdbVotes: "1,099",
  imdbID: "tt6859260",
  Type: "series",
  totalSeasons: "2",
  Response: "True",
};

// TODO: replace with fetched data
export const SEARCH_RESULTS = {
  Search: [
    {
      Title: "Avatar",
      Year: "2009",
      imdbID: "tt0499549",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    },
    {
      Title: "Avatar: The Last Airbender",
      Year: "2005–2008",
      imdbID: "tt0417299",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BODc5YTBhMTItMjhkNi00ZTIxLWI0YjAtNTZmOTY0YjRlZGQ0XkEyXkFqcGdeQXVyODUwNjEzMzg@._V1_SX300.jpg",
    },
    {
      Title: "The King's Avatar",
      Year: "2017–",
      imdbID: "tt6859260",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZjIyMjE5ZDYtMTQxNC00NTEzLTgwYzYtMmM0NDg3OWFlYWM5XkEyXkFqcGdeQXVyNjMxNzQ2NTQ@._V1_SX300.jpg",
    },
    {
      Title: "The King's Avatar",
      Year: "2019",
      imdbID: "tt10732794",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGMxZDc1N2ItODI3NS00MDIwLWJkYzAtMTgyMDZlN2FlNGYzXkEyXkFqcGdeQXVyMjQ0OTYxOTc@._V1_SX300.jpg",
    },
    {
      Title: "Avatar: The Last Airbender - The Legend of Aang",
      Year: "2006",
      imdbID: "tt0959552",
      Type: "game",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNjUwNzA5Nzc4N15BMl5BanBnXkFtZTgwNjM1ODY4MDE@._V1_SX300.jpg",
    },
    {
      Title: "Avatar: The Game",
      Year: "2009",
      imdbID: "tt1517155",
      Type: "game",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTYxODI2OTI4MF5BMl5BanBnXkFtZTcwNjI1NzMwMw@@._V1_SX300.jpg",
    },
    {
      Title: "The King's Avatar: For the Glory",
      Year: "2019",
      imdbID: "tt10736726",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMzFkZTMzOGUtOGM3NS00YzI2LTllMjgtODk0NDhkNWRiMTMzXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_SX300.jpg",
    },
    {
      Title: "Avatar: The Last Airbender - Into the Inferno",
      Year: "2008",
      imdbID: "tt1459460",
      Type: "game",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOWFjYWUwZTMtNjM2Mi00YjU3LWI2NjQtZTNhOTRhM2Q3YmJkXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg",
    },
    {
      Title: "Avatar Spirits",
      Year: "2010",
      imdbID: "tt1900832",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMzQ4MDMxNjExNl5BMl5BanBnXkFtZTgwOTYzODI5NTE@._V1_SX300.jpg",
    },
    {
      Title: "Avatar: Creating the World of Pandora",
      Year: "2010",
      imdbID: "tt1599280",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYjk4ZDAxN2MtYjhlNy00MzJhLWI1MGYtYjY5ZGJlY2YwMzNlXkEyXkFqcGdeQXVyNTc0NjY1ODk@._V1_SX300.jpg",
    },
  ],
  totalResults: "93",
  Response: "True",
};
