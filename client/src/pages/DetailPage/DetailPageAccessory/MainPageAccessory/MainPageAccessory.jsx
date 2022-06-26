import { createTheme, ThemeProvider } from "@mui/material";
import queryString from "query-string";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Advertisement from "../../../../components/Advertisement/Advertisement";
import FilterCheckbox from "../../../../components/Filters/FilterCheckbox";
import {
  CLEAR_FILTER,
  SET_NEW_FILTER,
} from "../../../../redux/reducers/types/filterType";
import {
  GET_ACCESSORY_SAGA,
  GET_DATA_ACCESSORY_PAGE_SAGA,
} from "../../../../redux/sagas/types/main";
import { parseQueryParam } from "../../../../utils/Settings/features";

import Products from "../../global/Products";
import Filters from "./Filter/Filters";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51d5",
    },
    secondary: {
      main: "#ffc400",
    },
  },
});

const filterBrand = [];
function MainPageAccessory(props) {
  const { search } = useLocation();
  const dispatch = useDispatch();
  const { accessory, currentTotalProduct } = useSelector(
    (state) => state.product
  );
  const { dataAccessoryPage } = useSelector((state) => state.page);
  const { filterProducts, filters, touchedFilter } = useSelector(
    (state) => state.filter
  );
  const { loadingFilter } = useSelector((state) => state.global);

  useEffect(() => {
    const queryParam = search?.slice(1);
    let filters = [];
    if (queryParam) {
      filters = parseQueryParam(
        "accessory",
        queryString.parse(search),
        filterBrand
      );
      dispatch({
        type: SET_NEW_FILTER,
        filters,
      });
    }
    dispatch({
      type: GET_DATA_ACCESSORY_PAGE_SAGA,
      category: "accessory",
      queryParam,
      filters,
    });

    return () => {
      dispatch({
        type: CLEAR_FILTER,
      });
    };
  }, [dispatch, search]);
  useEffect(() => {
    // Để giảm bớt số lần call api khi cái search thay đổi'
    // Chỉ call api khi không có search nào
    const queryParam = search?.slice(1);
    if (!queryParam) {
      dispatch({
        type: GET_ACCESSORY_SAGA,
      });
    }

    // Đưa search vào dependency vì để mỗi lần thay đổi url phải lấy về số lượng sản phẩm
  }, [dispatch, search]);
  let finalIndex = dataAccessoryPage.length - 1;
  return (
    <ThemeProvider theme={theme}>
      <div className="px-12 mb-16">
        <Advertisement data={dataAccessoryPage[finalIndex]?.sliders} />
        <Filters
          loadingFilter={loadingFilter}
          category={"accessory"}
          filters={filters}
          filterProducts={filterProducts}
          filterBrand={filterBrand}
        />

        <FilterCheckbox category={"accessory"} quantity={currentTotalProduct} />
        <Products
          category="accessory"
          queryParam={search?.slice(1)}
          type={!search ? "GET_ACCESSORY_SAGA" : "FILTER_PRODUCT_SAGA"}
          totalQuantity={currentTotalProduct}
          data={touchedFilter ? filterProducts : accessory}
        />
      </div>
    </ThemeProvider>
  );
}

export default MainPageAccessory;
