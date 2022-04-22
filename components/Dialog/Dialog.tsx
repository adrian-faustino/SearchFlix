import React, { useContext, FunctionComponent } from "react";
import { Dialog as MuiDialog } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

import Button, { BUTTON_VARIANTS } from "components/Button";
import { DialogManagerContext } from "contexts/DialogManagerContext";
import styles from "./Dialog.module.scss";

type IDialogProps = {
  open: boolean;
  title: string;
  content: JSX.Element;
  variant: string;
  onPrimaryBtnClick?: (e) => void;
  onSecondaryBtnClick?: (e) => void;
};

const emptyFn = () => {};

const Dialog: FunctionComponent<IDialogProps> = ({
  open,
  title,
  content,
  variant,
  onPrimaryBtnClick = emptyFn,
  onSecondaryBtnClick = emptyFn,
}) => {
  const { onCloseDialog } = useContext(DialogManagerContext);

  return (
    <MuiDialog
      className={styles.Dialog}
      onClose={onCloseDialog}
      open={open}
      maxWidth={1000}
    >
      <DialogTitle>{title}</DialogTitle>

      <DialogContent>{content}</DialogContent>

      <DialogActions>
        {onSecondaryBtnClick !== emptyFn && (
          <Button
            variant={BUTTON_VARIANTS.secondary}
            onClick={onSecondaryBtnClick}
          >
            Secondary btn
          </Button>
        )}

        {onPrimaryBtnClick !== emptyFn && (
          <Button variant={BUTTON_VARIANTS.primary} onClick={onPrimaryBtnClick}>
            primary btn
          </Button>
        )}
      </DialogActions>
    </MuiDialog>
  );
};

export default Dialog;
