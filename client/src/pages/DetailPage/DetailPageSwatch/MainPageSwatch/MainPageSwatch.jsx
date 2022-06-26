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
  GET_DATA_SWATCH_PAGE_SAGA,
  GET_SWATCH_SAGA,
} from "../../../../redux/sagas/types/main";
import { parseQueryParam } from "../../../../utils/Settings/features";

import appleWatch from "../../../../assests/img/brand_apple.png";
import oppoWatch from "../../../../assests/img/oppo_watch.png";
import samsungWatch from "../../../../assests/img/samsung_watch.png";
import xiaomiWatch from "../../../../assests/img/xiaomi_watch.png";
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

const filterBrand = [
  {
    field: "brand",
    idFilter: "brand-swatch-1",
    img: appleWatch,
    name: "Apple",
    value: "apple",
  },
  {
    field: "brand",
    idFilter: "brand-swatch-2",
    img: samsungWatch,
    name: "Samsung",
    value: "samsung",
  },
  {
    field: "brand",
    idFilter: "brand-swatch-3",
    img: xiaomiWatch,
    name: "Xiaomi",
    value: "xiaomi",
  },
  {
    field: "brand",
    idFilter: "brand-swatch-4",
    img: oppoWatch,
    name: "Oppo",
    value: "oppo",
  },
];
function MainPageSwatch(props) {
  const { search } = useLocation();
  const dispatch = useDispatch();
  const { swatch, currentTotalProduct } = useSelector((state) => state.product);
  const { dataSwatchPage } = useSelector((state) => state.page);
  const { filterProducts, filters, touchedFilter } = useSelector(
    (state) => state.filter
  );
  const { loadingFilter } = useSelector((state) => state.global);

  useEffect(() => {
    const queryParam = search?.slice(1);
    let filters = [];
    if (queryParam) {
      filters = parseQueryParam(
        "swatch",
        queryString.parse(search),
        filterBrand
      );
      dispatch({
        type: SET_NEW_FILTER,
        filters,
      });
    }
    dispatch({
      type: GET_DATA_SWATCH_PAGE_SAGA,
      category: "swatch",
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
        type: GET_SWATCH_SAGA,
      });
    }

    // Đưa search vào dependency vì để mỗi lần thay đổi url phải lấy về số lượng sản phẩm
  }, [dispatch, search]);
  let finalIndex = dataSwatchPage.length - 1;
  return (
    <ThemeProvider theme={theme}>
      <div className="px-12 mb-16">
        <Advertisement data={dataSwatchPage[finalIndex]?.sliders} />
        <Filters
          loadingFilter={loadingFilter}
          category={"swatch"}
          filters={filters}
          filterProducts={filterProducts}
          filterBrand={filterBrand}
        />

        <FilterCheckbox category={"swatch"} quantity={currentTotalProduct} />
        <Products
          category="swatch"
          queryParam={search?.slice(1)}
          type={!search ? "GET_SWATCH_SAGA" : "FILTER_PRODUCT_SAGA"}
          totalQuantity={currentTotalProduct}
          data={touchedFilter ? filterProducts : swatch}
        />
      </div>
    </ThemeProvider>
  );
}

export default MainPageSwatch;
