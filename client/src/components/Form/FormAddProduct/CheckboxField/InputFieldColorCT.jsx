import React, { useState } from "react";
import CheckboxItem from "./CheckboxItem";

function InputFieldColorCT(props) {
  const { data, touched, errors, setFieldValue } = props;

  const [colorImages, setColorImages] = useState([]);
  return (
    <div className="">
      <div className="grid grid-cols-2 gap-2">
        {data.map((ops, index) => {
          return (
            <CheckboxItem
              index={index}
              setFieldValue={setFieldValue}
              setColorImages={setColorImages}
              colorImages={colorImages}
              ops={ops}
              key={index}
            />
          );
        })}
      </div>
      {touched?.images && errors.images && (
        <p className="text-red-600 text-[12px] my-2">{errors?.images}</p>
      )}
    </div>
  );
}

export default InputFieldColorCT;
