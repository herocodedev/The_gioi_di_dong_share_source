import { TextField } from "@mui/material";
import React from "react";

function InputFieldVideoDemo(props) {
  const { values, handleChange, errors, touched } = props;

  return (
    <TextField
      margin="normal"
      fullWidth
      value={values.idVideo}
      error={touched.idVideo && errors?.idVideo ? true : false}
      onChange={handleChange}
      helperText={touched.idVideo && errors?.idVideo ? errors?.idVideo : ""}
      id="idVideo"
      label="ID"
      name="idVideo"
      autoFocus
    />
  );
}

export default InputFieldVideoDemo;
