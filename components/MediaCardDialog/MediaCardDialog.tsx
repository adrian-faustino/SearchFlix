import React, { FunctionComponent, useState } from "react";

import { ISeries, IMovie } from "types/index";
import useFetch from "hooks/useFetch";
import { API_ROUTES } from "constants/index";
import MediaCard from "components/MediaCard";
import AsyncComponentWrapper from "components/AsyncComponentWrapper";

interface IMediaCardDialogProps {
  imdbID: string;
}

const MediaCardDialog: FunctionComponent<IMediaCardDialogProps> = ({
  imdbID,
}) => {
  const url = `${API_ROUTES.omdb}/?imdbID=${imdbID}`;
  const { response, error, isFetching } = useFetch(url);

  return (
    <AsyncComponentWrapper isFetching={isFetching}>
      {response && <MediaCard media={response} />}
    </AsyncComponentWrapper>
  );
};

export default MediaCardDialog;
