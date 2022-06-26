import React from "react";

function InputFieldScreen(props) {
  const { data, touched, errors, handleChange, values } = props;
  return (
    <div className="">
      <select
        id="screen"
        name="screen"
        value={values.screen ? values.screen : ""}
        autoComplete="screen"
        onChange={handleChange}
        style={
          touched.screen && errors?.screen ? { border: "1px solid red" } : {}
        }
        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="">--- Chọn loại màn hình ---</option>
        {data.map((ops, index) => (
          <option key={index} value={ops.value}>
            {ops.name}
          </option>
        ))}
      </select>
      {touched?.screen && errors.screen && (
        <p className="text-red-600 text-[12px] my-2">{errors?.screen}</p>
      )}
    </div>
  );
}

export default InputFieldScreen;
