import React, { useState, createContext, FunctionComponent } from "react";

import { TGenericObject, TGenericChildren } from "types/index";

export const DialogManagerContext = createContext<TGenericObject>({});

interface IButtonProps {
  children: TGenericChildren;
}

const DialogManagerContextProvider: FunctionComponent<IButtonProps> = ({
  children,
}) => {
  const [dialogComponent, setDialogComponent] = useState<JSX.Element | null>(
    null
  );
  const [dialogProps, setDialogProps] = useState<TGenericObject | null>(null);

  const onOpenDialog = (
    dialogComponent: JSX.Element,
    dialogProps: TGenericObject
  ) => {
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
