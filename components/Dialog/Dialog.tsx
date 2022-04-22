import React, { useContext, FunctionComponent } from "react";
import { Dialog as MuiDialog } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

import Button from "components/Button";
import { DialogManagerContext } from "contexts/DialogManagerContext";
import { TGenericClickEvent } from "types/index";
import styles from "./Dialog.module.scss";

interface IDialogProps {
  open: boolean;
  title: string;
  content: JSX.Element;
  onPrimaryBtnClick?: (e: TGenericClickEvent) => void;
  onSecondaryBtnClick?: (e: TGenericClickEvent) => void;
}

const emptyFn = () => {};

const Dialog: FunctionComponent<IDialogProps> = ({
  open,
  title,
  content,
  onPrimaryBtnClick = emptyFn,
  onSecondaryBtnClick = emptyFn,
}) => {
  const { onCloseDialog } = useContext(DialogManagerContext);

  return (
    <MuiDialog
      className={styles.Dialog}
      onClose={onCloseDialog}
      open={open}
      maxWidth="md"
    >
      <DialogTitle>{title}</DialogTitle>

      <DialogContent>{content}</DialogContent>

      <DialogActions>
        {onSecondaryBtnClick !== emptyFn && (
          <Button secondary onClick={onSecondaryBtnClick}>
            Secondary btn
          </Button>
        )}

        {onPrimaryBtnClick !== emptyFn && (
          <Button primary onClick={onPrimaryBtnClick}>
            primary btn
          </Button>
        )}
      </DialogActions>
    </MuiDialog>
  );
};

export default Dialog;
