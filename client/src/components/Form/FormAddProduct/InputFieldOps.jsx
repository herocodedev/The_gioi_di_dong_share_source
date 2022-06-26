import React from "react";

function InputFieldOps(props) {
  const { data, touched, errors, handleChange, values } = props;

  return (
    <div className="">
      <select
        id="operateSys"
        name="operateSys"
        value={values.operateSys ? values.operateSys : ""}
        autoComplete="operateSys"
        onChange={handleChange}
        style={
          touched.operateSys && errors?.operateSys
            ? { border: "1px solid red" }
            : {}
        }
        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="">--- Chọn hệ điều hành ---</option>
        {data.map((ops, index) => (
          <option key={index} value={ops.value}>
            {ops.name}
          </option>
        ))}
      </select>
      {touched?.operateSys && errors.operateSys && (
        <p className="text-red-600 text-[12px] my-2">{errors?.operateSys}</p>
      )}
    </div>
  );
}

export default InputFieldOps;
