import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_FILTER } from "../../redux/reducers/types/filterType";
import { checkIdExist } from "../../utils/Settings/features";

function FilterItem(props) {
  const dispatch = useDispatch();
  const { data } = props;
  const { filters } = useSelector((state) => state.filter);

  const renderFilter = () => {
    return data.map((x, y) => {
      return (
        <Button
          onClick={() => {
            const { field, value, name, idFilter } = x;
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
          key={y}
          variant="outlined"
          color={checkIdExist(filters, x.idFilter) ? "secondary" : "primary"}
        >
          <span className="text-[12px] text-gray-600 ">{x.name}</span>
        </Button>
      );
    });
  };
  return (
    <div className="py-4">
      <div className="flex flex-wrap gap-2">{renderFilter()}</div>
    </div>
  );
}

export default FilterItem;
