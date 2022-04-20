import { useState, useEffect } from "react";

const DEFAULT_DEBOUNCE_MS = 500;

const useDebounce = (
  value: string,
  delay: number = DEFAULT_DEBOUNCE_MS
): string => {
  const [debouncedValue, setDebouncedValue] = useState<string>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;

/*
 * Reference: https://usehooks.com/useDebounce
 */
