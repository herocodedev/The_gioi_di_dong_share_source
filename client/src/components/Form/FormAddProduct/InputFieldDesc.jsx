import { TextareaAutosize } from "@mui/material";
import React from "react";

function InputFieldDesc(props) {
  const { touched, errors, handleChange, values } = props;
  return (
    <div className="">
      <TextareaAutosize
        maxRows={12}
        name="description"
        aria-label="maximum height"
        defaultValue={values?.description}
        onChange={handleChange}
        style={
          touched.description && errors?.description
            ? { border: "1px solid red" }
            : {}
        }
        className="w-full border-[1px] border-gray-300 rounded-lg focus:border-indigo-600 p-4 outline-none"
      />
      {touched?.description && errors.description && (
        <p className="text-red-600 text-[12px] my-2">{errors?.description}</p>
      )}
    </div>
  );
}

export default InputFieldDesc;
