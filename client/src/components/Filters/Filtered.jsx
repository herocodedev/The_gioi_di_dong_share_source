import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  CLEAR_FILTER,
  REMOVE_FILTER,
} from "../../redux/reducers/types/filterType";

function Filtered(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { category, filters } = props;
  // const { filters } = useSelector((state) => state.filter);
  const renderFiltered = () => {
    return filters?.map((item, index) => {
      return (
        <Button
          onClick={() => {
            const { field, value, name, idFilter } = item;
            dispatch({
              type: REMOVE_FILTER,
              filter: {
                field,
                value,
                name,
                idFilter,
              },
            });
          }}
          key={index}
          variant="outlined"
          className="flex items-center gap-1 justify-center"
        >
          <CloseIcon style={{ fontSize: "0.9rem" }} />
          <span className="text-[12px] text-gray-500">
            {item?.name.length > 10
              ? item?.name.slice(0, 10) + "..."
              : item?.name}
          </span>
        </Button>
      );
    });
  };
  return filters?.length > 0 ? (
    <div className="flex flex-wrap gap-2 my-2">
      <h1 className="font-semibold">Đã chọn : </h1>

      {filters?.length > 0 ? (
        <div className="grid grid-cols-6 gap-2">
          {renderFiltered()}
          <div
            className=""
            onClick={() => {
              dispatch({
                type: CLEAR_FILTER,
              });
            }}
          >
            <Button
              onClick={() => {
                navigate(`/${category}`);
              }}
              variant="outlined"
              className="flex items-center gap-1 justify-center"
            >
              <CloseIcon style={{ fontSize: "0.9rem" }} />
              <span className="text-[12px] text-gray-500">Xóa tất cả</span>
            </Button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  ) : (
    <></>
  );
}

export default Filtered;
