import React from "react";

function InputFieldPerfomance(props) {
  const { data, touched, errors, handleChange, values } = props;

  return (
    <div className="">
      <select
        id="performance"
        name="performance"
        value={values.performance ? values.performance : ""}
        autoComplete="performance"
        onChange={handleChange}
        style={
          touched.performance && errors?.performance
            ? { border: "1px solid red" }
            : {}
        }
        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="">--- Chọn hiệu năng ---</option>
        {data.map((ops, index) => (
          <option key={index} value={ops.value}>
            {ops.name}
          </option>
        ))}
      </select>
      {touched?.performance && errors.performance && (
        <p className="text-red-600 text-[12px] my-2">{errors?.performance}</p>
      )}
    </div>
  );
}

export default InputFieldPerfomance;
