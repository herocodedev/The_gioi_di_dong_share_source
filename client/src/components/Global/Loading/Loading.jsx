import { Backdrop, Box, CircularProgress } from "@mui/material";
import React from "react";
import "./Loading.css";
function Loading(props) {
  return (
    <Backdrop sx={{ color: "#ffd400", zIndex: 10000 }} open={true}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

export default Loading;
