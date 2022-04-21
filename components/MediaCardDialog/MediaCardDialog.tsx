import React, { FunctionComponent, useState } from "react";

import { ISeries, IMovie } from "types/index";
import useFetch from "hooks/useFetch";
import { API_ROUTES } from "constants/index";
import MediaCard from "components/MediaCard";

type IMediaCardDialogProps = {
  imdbID;
};

const MediaCardDialog: FunctionComponent<IMediaCardDialogProps> = ({
  imdbID,
}) => {
  const url = `${API_ROUTES.omdb}/?imdbID=${imdbID}`;
  const { response, error, isFetching } = useFetch(url);

  return (
    <>
      {isFetching && <div>Loading...</div>}
      {response && <MediaCard media={response} />}
    </>
  );
};

MediaCardDialog.defaultProps = {
  media: {},
};

export default MediaCardDialog;
