import React from "react";

function InputFieldCamera(props) {
  const { data, touched, errors, handleChange, values } = props;

  return (
    <div>
      <select
        id="camera"
        name="camera"
        value={values.camera ? values.camera : ""}
        onChange={handleChange}
        autoComplete="camera"
        style={
          touched.camera && errors?.camera
            ? { border: "1px solid red" }
            : { border: "1px solid silver" }
        }
        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="">--- Chọn camera ---</option>
        {data.map((ops, index) => (
          <option key={index} value={ops.value}>
            {ops.name}
          </option>
        ))}
      </select>
      {touched?.camera && errors.camera && (
        <p className="text-red-600 text-[12px] my-2">{errors?.camera}</p>
      )}
    </div>
  );
}

export default InputFieldCamera;
