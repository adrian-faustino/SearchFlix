import React, { FunctionComponent } from "react";
import classNames from "classnames";

import LoadingIndicator from "components/LoadingIndicator";
import { TGenericChildren } from "types/index";
import styles from "./AsyncComponentWrapper.module.scss";

interface IAsyncComponentWrapperProps {
  isFetching: boolean;
  className?: string;
  children: TGenericChildren;
}

const AsyncComponentWrapper: FunctionComponent<IAsyncComponentWrapperProps> = ({
  isFetching,
  className,
  children,
}) => {
  const containerClassnames: string = classNames(
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
