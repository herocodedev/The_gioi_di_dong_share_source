import React from "react";

function InputFieldStorage(props) {
  const { data, touched, errors, handleChange, values } = props;

  return (
    <div>
      <select
        id="storage"
        name="storage"
        value={values.storage ? values.storage : ""}
        autoComplete="storage"
        onChange={handleChange}
        style={
          touched.storage && errors?.storage ? { border: "1px solid red" } : {}
        }
        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value={0}>--- Chọn bộ nhớ ---</option>
        {data.map((ops, index) => (
          <option key={index} value={ops.value}>
            {ops.name}
          </option>
        ))}
      </select>
      {touched?.storage && errors.storage && (
        <p className="text-red-600 text-[12px] my-2">{errors?.storage}</p>
      )}
    </div>
  );
}

export default InputFieldStorage;
