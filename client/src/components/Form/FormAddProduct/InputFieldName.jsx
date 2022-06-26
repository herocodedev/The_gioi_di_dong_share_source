import { TextField } from "@mui/material";
import React from "react";

function InputFieldName(props) {
  const { values, handleChange, errors, touched } = props;

  return (
    <TextField
      margin="normal"
      fullWidth
      value={values.name}
      error={touched.name && errors?.name ? true : false}
      onChange={handleChange}
      helperText={touched.name && errors?.name ? errors?.name : ""}
      id="name"
      label="Tên"
      name="name"
      autoComplete="email"
      autoFocus
    />
  );
}

export default InputFieldName;
