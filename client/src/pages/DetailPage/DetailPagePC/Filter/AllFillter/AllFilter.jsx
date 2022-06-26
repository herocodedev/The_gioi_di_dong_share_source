import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import FilterBrand from "../../../../../components/Filters/FilterBrand";
import FilterItem from "../../../../../components/Filters/FilterItem";
import { CLEAR_FILTER } from "../../../../../redux/reducers/types/filterType";
import { getQueryParams } from "../../../../../utils/Settings/features";
import {
  filterPricePC,
  filterRamPC,
  filterScreenPC,
  filterStoragePC,
} from "../../../global/dataFilter";
import queryString from "query-string";
import { FILTER_PRODUCT_SAGA } from "../../../../../redux/sagas/types/main";
import Filtered from "../../../../../components/Filters/Filtered";

function AllFilter(props) {
  const { filterBrand, filters, category } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="px-4 py-2 relative" style={{ maxWidth: 900 }}>
      {/* FILTER CHOOSED */}
      <Filtered category={category} filters={filters} />
      {/* FILTER BRAND */}
      <div className="">
        <h3 className="font-bold text-struncate">Hãng</h3>
        <FilterBrand data={filterBrand} />
      </div>
      {/* FILTER ITEM */}
      <div className="py-4 border-b border-gray-300">
        <div className="grid grid-cols-3 gap-4">
          {/* Price */}
          <div className="">
            <h3 className="font-bold ">Giá</h3>
            <FilterItem data={filterPricePC.filters} />
          </div>
          {/* Type */}
          <div className="">
            <h3 className="font-bold ">Kích thước màn hình</h3>
            <FilterItem data={filterScreenPC.filters} />
          </div>
          {/* Performance */}
          <div className="">
            <h3 className="font-bold ">Ram</h3>
            <FilterItem data={filterRamPC.filters} />
          </div>
        </div>
      </div>
      <div className="py-4 border-b border-gray-300">
        <div className="grid grid-cols-3 gap-4">
          {/* Ram */}
          <div className="">
            <h3 className="font-bold ">Bộ nhớ trong</h3>
            <FilterItem data={filterStoragePC.filters} />
          </div>
        </div>
      </div>
      <div className="py-2 bg-white sticky bottom-0">
        <div className="flex gap-2 justify-center">
          <Button
            onClick={() => {
              navigate("/pc");
              dispatch({
                type: CLEAR_FILTER,
              });
            }}
            variant="outlined"
            className="mx-2"
            color="error"
          >
            <span className="text-[12px] text-gray-600 px-8">Bỏ chọn</span>
          </Button>

          <Button
            onClick={() => {
              // CHANGE URL
              const queryParam = getQueryParams(filters, queryString);
              navigate(`/pc?${queryParam}`);
              // CALL API
              dispatch({
                type: FILTER_PRODUCT_SAGA,
                category: "pc",
                queryParam,
              });
            }}
            variant="contained"
            className="mx-2"
            color="primary"
          >
            <span className="text-[12px]  px-8">Xem Tất Cả</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AllFilter;
