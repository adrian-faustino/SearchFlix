import React, { FunctionComponent } from "react";
import CircularProgress from "@mui/material/CircularProgress";

import styles from "./LoadingIndicator.module.scss";

type ILoadingIndicatorProps = {};

const LoadingIndicator: FunctionComponent<ILoadingIndicatorProps> = () => {
  return <CircularProgress />;
};

export default LoadingIndicator;
