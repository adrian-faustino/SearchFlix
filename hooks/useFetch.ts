import { useState, useEffect } from "react";

import { TGenericObject } from "types/index";
import useDebounce from "hooks/useDebounce";

const useFetch = (
  url: string,
  options?: TGenericObject,
  debounceMs?: number
) => {
  const [response, setResponse] = useState<TGenericObject | null>(null);
  const [error, setError] = useState<unknown>(null);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const searchTerm = useDebounce(url, debounceMs);

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    const onFetchData = async () => {
      setIsFetching(true);
      try {
        const res = await fetch(searchTerm, options);
        const json = await res.json();
        if (!signal.aborted) {
          setResponse(json);
        }
      } catch (e: unknown) {
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
