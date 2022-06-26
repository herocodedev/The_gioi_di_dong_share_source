import React from "react";
import BoxPrice from "../BoxPrice/BoxPrice";
import CheckboxBtn from "../Checkbox/CheckboxBtn";

function FilterCheckbox(props) {
  const { quantity, category } = props;
  return (
    <div className="flex justify-between items-center flex-wrap">
      <div className="py-2 flex gap-3 items-center">
        <h3 className="font-semibold ">{quantity || 0} sản phẩm</h3>
        <CheckboxBtn category={category} first={true} title={"Mới"} />
      </div>
      <div className="py-2">
        <BoxPrice category={category} />
      </div>
    </div>
  );
}

export default FilterCheckbox;
