import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { HIDE_CARD_PRODUCT } from "../../redux/reducers/types/mainType";

export default function ModalDetailApp() {
  const dispatch = useDispatch();
  const { visible, ComponentContentModal, title } = useSelector(
    (state) => state.modalHOC
  );

  const handleClose = () => {
    dispatch({
      type: HIDE_CARD_PRODUCT,
    });
  };

  return (
    <div>
      <Dialog
        open={visible}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {!title ? "CHI TIẾT" : title}
        </DialogTitle>
        <DialogContent>{ComponentContentModal}</DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Thoát</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
