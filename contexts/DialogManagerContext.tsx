import React, { useState, createContext, FunctionComponent } from "react";

export const DialogManagerContext = createContext();

type IButtonProps = {};

const DialogManagerContextProvider: FunctionComponent<IButtonProps> = ({
  children,
}) => {
  const [dialogComponent, setDialogComponent] = useState(null);
  const [dialogProps, setDialogProps] = useState(null);

  const onOpenDialog = (dialogComponent, dialogProps) => {
    setDialogComponent(dialogComponent);
    if (dialogProps) setDialogProps(dialogProps);
  };

  const onCloseDialog = () => {
    setDialogComponent(null);
    setDialogProps(null);
  };

  return (
    <DialogManagerContext.Provider
      value={{ onOpenDialog, onCloseDialog, dialogComponent, dialogProps }}
    >
      {children}
    </DialogManagerContext.Provider>
  );
};

export default DialogManagerContextProvider;
