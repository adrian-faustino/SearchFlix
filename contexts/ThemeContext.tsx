import React, { FunctionComponent } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { TGenericChildren } from "types/index";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

interface IButtonProps {
  children: TGenericChildren;
}

const ThemeContextProvider: FunctionComponent<IButtonProps> = ({
  children,
}) => {
  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
};

export default ThemeContextProvider;
