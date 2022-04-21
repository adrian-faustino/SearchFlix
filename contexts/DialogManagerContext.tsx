import React, { useState, createContext, FunctionComponent } from "react";

export const DialogManagerContext = createContext();

type IButtonProps = {};

const DialogManagerContextProvider: FunctionComponent<IButtonProps> = ({
  children,
}) => {
  const [dialogComponent, setDialogComponent] = useState(null);

  const closeDialog = () => {
    setDialogComponent(null);
  };

  return (
    <DialogManagerContext.Provider
      value={{ setDialogComponent, closeDialog, dialogComponent, dialogProps }}
    >
      {children}
    </DialogManagerContext.Provider>
  );
};

export default DialogManagerContextProvider;
