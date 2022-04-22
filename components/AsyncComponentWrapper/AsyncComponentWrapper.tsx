import React, { FunctionComponent } from "react";
import classNames from "classnames";

import LoadingIndicator from "components/LoadingIndicator";
import styles from "./AsyncComponentWrapper.module.scss";

type IAsyncComponentWrapperProps = {
  isFetching: boolean;
  className?: string;
};

const AsyncComponentWrapper: FunctionComponent<IAsyncComponentWrapperProps> = ({
  isFetching,
  className,
  children,
}) => {
  const containerClassnames = classNames(
    styles.AsyncComponentWrapper,
    className
  );

  return isFetching ? (
    <span className={containerClassnames}>
      <LoadingIndicator />
    </span>
  ) : (
    children
  );
};

export default AsyncComponentWrapper;
