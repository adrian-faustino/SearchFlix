import { useState, useEffect } from "react";

import useFetch from "hooks/useFetch";
import { API_ROUTES } from "constants/index";

const emptyStr = "";

const useSearchContainer = () => {
  const [searchTerm, setSearchTerm] = useState<string>(emptyStr);

  const url = searchTerm
    ? `${API_ROUTES.omdb}/?searchTerm=${searchTerm}`
    : emptyStr;
  const { response, error, isFetching } = useFetch(url);

  const onSearchFieldChange = (e) => {
    const value = e?.target?.value || emptyStr;
    setSearchTerm(value);
  };

  const searchResults = response?.Search || [];

  return {
    isFetching,
    searchTerm,
    onSearchFieldChange,
    searchResults,
  };
};

export default useSearchContainer;
