import { IMDB_API_BASE_URL } from "constants/index";
import React, { useState, useEffect } from "react";

const useFetch = (url, options) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    const onFetchData = async () => {
      console.log("@@@@ Fetching...");
      setIsFetching(true);
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        if (!signal.aborted) {
          setResponse(json);
        }
      } catch (e) {
        if (!signal.aborted) {
          setError(e);
        }
      } finally {
        if (!signal.aborted) {
          setIsFetching(false);
        }
      }
    };

    onFetchData();

    return () => {
      // prevent memory leak when component unmounts and data returns
      abortController.abort();
    };
  }, [url]);

  return { response, error, isFetching };
};

export default useFetch;
