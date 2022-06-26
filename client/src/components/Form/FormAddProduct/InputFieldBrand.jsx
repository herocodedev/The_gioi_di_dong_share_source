import React from "react";

function InputFieldBrand(props) {
  const { data, touched, errors, handleChange, values } = props;
  return (
    <div className="">
      <select
        id="brand"
        name="brand"
        value={values?.brand ? values?.brand : ""}
        onChange={handleChange}
        autoComplete="brand"
        style={
          touched.brand && errors?.brand ? { border: "1px solid red" } : {}
        }
        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="" className="text-center">
          --- Chọn nhãn hiệu ---
        </option>
        {data.map((ops, index) => (
          <option className="text-center" key={index} value={ops.value}>
            {ops.name}
          </option>
        ))}
      </select>
      {touched?.brand && errors.brand && (
        <p className="text-red-600 text-[12px] my-2">{errors?.brand}</p>
      )}
    </div>
  );
}

export default InputFieldBrand;
