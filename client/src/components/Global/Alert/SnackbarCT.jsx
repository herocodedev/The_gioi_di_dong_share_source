import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { HIDE_ALERT } from "../../../redux/reducers/types/mainType";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SnackbarCT() {
  const dispatch = useDispatch();
  const { statusAlert } = useSelector((state) => state.global);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch({
      type: HIDE_ALERT,
    });
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={statusAlert.open}
        autoHideDuration={800}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={statusAlert.success ? "success" : "error"}
          sx={{ width: "100%" }}
        >
          {statusAlert.mess}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
