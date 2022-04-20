import type { NextApiRequest, NextApiResponse } from "next";

import { IOmdbApiResponse } from "types/index";
import { OMDB_API_MIN_SEARCH_TERM_LEN } from "constants/index";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IOmdbApiResponse>
) {
  const {
    query: { searchTerm },
    method,
  } = req;

  // BEGIN: Validations
  if (!searchTerm) {
    res.status(400).json({
      error: "searchTerm is required in request",
    });
  }

  if (searchTerm.length < OMDB_API_MIN_SEARCH_TERM_LEN) {
    res.status(400).json({
      error: `Search term must be at least ${OMDB_API_MIN_SEARCH_TERM_LEN} characters`,
    });
  }
  // END: Validations

  const omdbApiRes = await fetch(
    `https://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${searchTerm}`
  );
  const json = await omdbApiRes.json();

  res.status(200).json(json);
}
