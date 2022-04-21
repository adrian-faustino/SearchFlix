import React, { FunctionComponent } from "react";
import { Dialog as MuiDialog } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

import Button, { BUTTON_VARIANTS } from "components/Button";
import styles from "./Dialog.module.scss";

type IDialogProps = {
  title: string;
  content: JSX.Element;
  variant: string;
  onPrimaryBtnClick?: (e) => void;
  onSecondaryBtnClick?: (e) => void;
};

const emptyFn = () => {};

const Dialog: FunctionComponent<IDialogProps> = ({
  title,
  content,
  variant,
  onPrimaryBtnClick = emptyFn,
  onSecondaryBtnClick = emptyFn,
}) => {
  return (
    <MuiDialog open>
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
