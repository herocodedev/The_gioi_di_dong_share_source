import { TextField } from "@mui/material";
import React from "react";

function InputFieldPrice(props) {
  const { values, handleChange, errors, touched } = props;
  return (
    <TextField
      size="small"
      required
      fullWidth
      value={values?.price ? values.price : ""}
      error={touched.price && errors?.price ? true : false}
      onChange={handleChange}
      helperText={touched.price && errors?.price ? errors?.price : ""}
      id="price"
      label="Giá"
      name="price"
      autoComplete="price"
      autoFocus
    />
  );
}

export default InputFieldPrice;
