import React from "react";

function InputFieldRam(props) {
  const { data, touched, errors, handleChange, values } = props;

  return (
    <div>
      <select
        id="ram"
        name="ram"
        value={values?.ram ? values?.ram : ""}
        autoComplete="ram"
        onChange={handleChange}
        style={touched.ram && errors?.ram ? { border: "1px solid red" } : {}}
        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="">--- Chọn ram ---</option>
        {data.map((ops, index) => (
          <option key={index} value={ops.value}>
            {ops.name}
          </option>
        ))}
      </select>
      {touched?.ram && errors.ram && (
        <p className="text-red-600 text-[12px] my-2">{errors?.ram}</p>
      )}
    </div>
  );
}

export default InputFieldRam;
