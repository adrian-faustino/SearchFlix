import React, { FunctionComponent } from "react";

import LoadingIndicator from "components/LoadingIndicator";
import styles from "./AsyncComponentWrapper.module.scss";

type IAsyncComponentWrapperProps = {
  isFetching: boolean;
};

const AsyncComponentWrapper: FunctionComponent<IAsyncComponentWrapperProps> = ({
  isFetching,
  children,
}) => {
  return isFetching ? <LoadingIndicator /> : children;
};

export default AsyncComponentWrapper;
