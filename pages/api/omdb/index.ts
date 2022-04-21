import type { NextApiRequest, NextApiResponse } from "next";

import { IOmdbApiResponse } from "types/index";
import { OMDB_API_MIN_SEARCH_TERM_LEN } from "constants/index";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IOmdbApiResponse>
) {
  const {
    query: { searchTerm, imdbID },
    method,
  } = req;

  // BEGIN: Validations
  if (!(searchTerm || imdbID)) {
    res.status(400).json({
      error: "searchTerm or imdbID is required in request",
    });
  }

  if (searchTerm && searchTerm.length < OMDB_API_MIN_SEARCH_TERM_LEN) {
    res.status(400).json({
      error: `Search term must be at least ${OMDB_API_MIN_SEARCH_TERM_LEN} characters`,
    });
  }
  // END: Validations

  let query = `https://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}`;
  if (searchTerm) query += `&s=${searchTerm}`;
  if (imdbID) query += `&i=${imdbID}`;

  const omdbApiRes = await fetch(query);
  const json = await omdbApiRes.json();

  res.status(200).json(json);
}
