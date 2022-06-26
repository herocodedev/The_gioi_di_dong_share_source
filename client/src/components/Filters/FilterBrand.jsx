import React from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { SET_FILTER } from "../../redux/reducers/types/filterType";
import { checkIdExist } from "../../utils/Settings/features";

function FilterBrand(props) {
  const dispatch = useDispatch();
  const { data } = props;
  const { filters } = useSelector((state) => state.filter);
  const renderBtn = () => {
    return data.map((item, index) => {
      return (
        <Button
          key={index}
          variant="outlined"
          onClick={() => {
            const { field, value, name, idFilter } = item;
            dispatch({
              type: SET_FILTER,
              filter: {
                field,
                value,
                name,
                idFilter,
              },
            });
          }}
          color={checkIdExist(filters, item.idFilter) ? "secondary" : "primary"}
        >
          <img
            className="w-[68px] h-[20px] object-cover"
            src={item.img}
            alt=""
          />
        </Button>
      );
    });
  };
  return (
    <div className="border-b border-gray-300">
      <div className="grid grid-cols-3 md:grid-cols-6 gap-2 my-4">
        {renderBtn()}
      </div>
    </div>
  );
}

export default FilterBrand;
