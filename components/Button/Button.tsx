import React, { FunctionComponent } from "react";
import { Button as MuiButton } from "@mui/material";
import classNames from "classnames";

import { TGenericClickEvent, TGenericChildren } from "types/index";
import styles from "./Button.module.scss";

interface IButtonProps {
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  onClick: (e: TGenericClickEvent) => void;
  className?: string;
  children: TGenericChildren;
}

const emptyFn = () => {};

const Button: FunctionComponent<IButtonProps> = ({
  primary,
  secondary,
  tertiary,
  onClick = emptyFn,
  className,
  children,
}) => {
  const containerClassnames: string = classNames(styles.Button, className);

  // Keys map to Mui variant values
  // - https://mui.com/material-ui/react-button/
  const getVariant = () => {
    if (primary) return "contained";
    if (secondary) return "outlined";
    if (tertiary) return "text";
  };

  return (
    <MuiButton
      className={containerClassnames}
      variant={getVariant()}
      onClick={onClick}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
