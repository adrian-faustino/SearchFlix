import React, { FunctionComponent } from "react";
import { Button as MuiButton } from "@mui/material";

import styles from "./Button.module.scss";

type IButtonProps = {
  variant: string;
  onClick: (e) => void;
};

const emptyFn = () => {};

const Button: FunctionComponent<IButtonProps> = ({
  variant,
  onClick = emptyFn,
  children,
}) => {
  return <MuiButton variant={variant}>{children}</MuiButton>;
};

export default Button;
