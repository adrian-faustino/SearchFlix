import React, { FunctionComponent } from "react";
import { TextField as MuiTextField } from "@mui/material";
import classNames from "classnames";

import { TGenericChangeEvent } from "types/index";
import styles from "./TextField.module.scss";

interface ITextFieldProps {
  name: string;
  value: string;
  label: string;
  className?: string;
  onChange: (e: TGenericChangeEvent) => void;
  helperText?: string;
}

const emptyFn = () => {};

const TextField: FunctionComponent<ITextFieldProps> = ({
  name,
  value,
  label,
  className,
  onChange,
  helperText,
}) => {
  const containerClassnames: string = classNames(className, styles.TextField);

  return (
    <MuiTextField
      name={name}
      value={value}
      label={label}
      className={containerClassnames}
      onChange={onChange}
      helperText={helperText}
    />
  );
};

TextField.defaultProps = {
  onChange: emptyFn,
};

export default TextField;
