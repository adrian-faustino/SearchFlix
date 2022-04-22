import React, { FunctionComponent } from "react";
import classNames from "classnames";

import { TGenericChildren } from "types/index";
import styles from "./Anchor.module.scss";

interface IAnchorProps {
  isOpenNewTab?: boolean;
  href: string;
  className?: string;
  children: TGenericChildren;
}

const Anchor: FunctionComponent<IAnchorProps> = ({
  isOpenNewTab,
  href,
  className,
  children,
}) => {
  const isOpenNewTabProps = isOpenNewTab
    ? {
        target: "_blank",
        rel: "noreferrer",
      }
    : {};

  const containerClassnames: string = classNames(styles.Anchor, className);

  return (
    <a className={containerClassnames} href={href} {...isOpenNewTabProps}>
      {children}
    </a>
  );
};

export default Anchor;
