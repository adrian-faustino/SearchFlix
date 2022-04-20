import { useState, useEffect } from "react";

import { IMDB_API_BASE_URL } from "constants/index";
import useDebounce from "hooks/useDebounce";

const useFetch = (url: string, options, debounceMs?: number) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const searchTerm = useDebounce(url, debounceMs);

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    const onFetchData = async () => {
      console.log("@@@@ Fetching...");
      setIsFetching(true);
      try {
        const res = await fetch(searchTerm, options);
        const json = await res.json();
        if (!signal.aborted) {
          console.log("@@@@ Res:", json);
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

    if (searchTerm) {
      onFetchData();
    }

    return () => {
      // prevent memory leak when component unmounts and data returns
      abortController.abort();
    };
  }, [searchTerm]);

  return { response, error, isFetching };
};

export default useFetch;

/*
 * Reference: https://morioh.com/p/74097abd01bf
 */
