import React, { FunctionComponent } from "react";

import { Dialog as MuiDialog } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

import styles from "./Dialog.module.scss";

type IDialogProps = {
  title: string;
  content: JSX.Element;
  onPrimaryBtnClick?: (e) => void;
  onSecondaryBtnClick?: (e) => void;
};

const emptyFn = () => {};

const Dialog: FunctionComponent<IDialogProps> = ({
  title,
  content,
  onPrimaryBtnClick = emptyFn,
  onSecondaryBtnClick = emptyFn,
}) => {
  return (
    <MuiDialog open>
      <DialogTitle>{title}</DialogTitle>

      <DialogContent>{content}</DialogContent>

      <DialogActions>
        {onPrimaryBtnClick !== emptyFn && <button>primary btn</button>}

        {onSecondaryBtnClick !== emptyFn && <button>Secondary btn</button>}
      </DialogActions>
    </MuiDialog>
  );
};

export default Dialog;
