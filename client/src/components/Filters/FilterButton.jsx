import { Button } from "@mui/material";
import queryString from "query-string";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SET_NEW_FILTER } from "../../redux/reducers/types/filterType";
import { getQueryParams } from "../../utils/Settings/features";
import FilterItem from "./FilterItem";

function FilterButton(props) {
  const dispatch = useDispatch();
  const { data, filters, category } = props;
  const navigate = useNavigate();
  return (
    <div className="px-4 py-2 relative" style={{ maxWidth: 900 }}>
      <FilterItem data={data} />

      <div className="pb-2 border-b border-gray-300 ">
        <div className="flex gap-2 justify-center">
          <Button
            onClick={() => {
              // CLEAR FILTER OF CURRENT FIELD IN REDUX
              let newFilter = [...filters];
              newFilter = newFilter.filter(
                (item, index) => item.field !== data[0].field
              );

              dispatch({
                type: SET_NEW_FILTER,
                filters: newFilter,
              });
              // RECOVER DATA
              const queryParam = getQueryParams(newFilter, queryString);
              navigate(`/${category}?${queryParam}`);
            }}
            variant="outlined"
            className="mx-2"
            color="error"
          >
            <span className="text-[12px] text-gray-600 px-8">Bỏ chọn</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FilterButton;
