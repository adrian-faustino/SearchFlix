import React, { FunctionComponent } from "react";
import { TextField as MuiTextField } from "@mui/material";

import styles from "./TextField.module.scss";

type ITextFieldProps = {
  name: string;
  value: string;
  label: string;
  onChange: (e) => void;
  helperText?: string;
};

const emptyFn = () => {};

const TextField: FunctionComponent<ITextFieldProps> = ({
  name,
  value,
  label,
  onChange,
  onNamedChange,
  helperText,
}) => {
  return (
    <>
      <MuiTextField
        name={name}
        value={value}
        label={label}
        onChange={onChange}
        helperText={helperText}
      />
    </>
  );
};

TextField.defaultProps = {
  onChange: emptyFn,
};

export default TextField;
