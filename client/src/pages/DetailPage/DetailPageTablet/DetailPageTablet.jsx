import { createTheme, ThemeProvider } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import brand_nokia from "../../../assests/img/brand_nokia.png";
import brand_samsung from "../../../assests/img/brand_samsung.png";
import brand_xaomi from "../../../assests/img/brand_xaomi.png";
import brand_huawei from "../../../assests/img/Huaweijpg.jpg";
import brand_ipad from "../../../assests/img/ipad.jpg";
import brand_lenovo from "../../../assests/img/lenovo.png";
import Advertisement from "../../../components/Advertisement/Advertisement";
import FilterBrand from "../../../components/Filters/FilterBrand";
import FilterCheckbox from "../../../components/Filters/FilterCheckbox";
import {
  CLEAR_FILTER,
  SET_NEW_FILTER,
} from "../../../redux/reducers/types/filterType";
import {
  GET_DATA_TABLET_PAGE_SAGA,
  GET_TABLET_SAGA,
} from "../../../redux/sagas/types/main";
import { parseQueryParam } from "../../../utils/Settings/features";
import Products from "../global/Products";
import Filters from "./Filter/Filters";
import queryString from "query-string";

// Theme
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
    img: brand_ipad,
    name: "Ipad",
    field: "brand",
    idFilter: "brand-tablet-1",
    value: "ipad",
  },
  {
    img: brand_samsung,
    name: "Samsung",
    field: "brand",
    idFilter: "brand-tablet-2",
    value: "samsung",
  },
  {
    img: brand_lenovo,
    name: "Lenovo",
    field: "brand",
    idFilter: "brand-tablet-3",

    value: "lenovo",
  },
  {
    img: brand_huawei,
    name: "Huawei",
    field: "brand",
    idFilter: "brand-tablet-4",

    value: "huawei",
  },
  {
    img: brand_xaomi,
    name: "Xiaomi",
    field: "brand",
    idFilter: "brand-tablet-5",

    value: "xiaomi",
  },
  {
    img: brand_nokia,
    name: "Nokia",
    field: "brand",
    idFilter: "brand-tablet-6",
    value: "nokia",
  },
];

function DetailPageTablet(props) {
  const dispatch = useDispatch();
  const { search } = useLocation();
  const { tablet, currentTotalProduct } = useSelector((state) => state.product);
  const { filterProducts, filters, touchedFilter } = useSelector(
    (state) => state.filter
  );
  const { loadingFilter } = useSelector((state) => state.global);

  const { dataTabletPage } = useSelector((state) => state.page);
  useEffect(() => {
    const queryParam = search?.slice(1);
    let filters = [];
    if (queryParam) {
      filters = parseQueryParam(
        "tablet",
        queryString.parse(search),
        filterBrand
      );
      dispatch({
        type: SET_NEW_FILTER,
        filters,
      });
    }
    dispatch({
      type: GET_DATA_TABLET_PAGE_SAGA,
      category: "tablet",
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
        type: GET_TABLET_SAGA,
      });
    }

    // Đưa search vào dependency vì để mỗi lần thay đổi url phải lấy về số lượng sản phẩm
  }, [dispatch, search]);
  let finalIndex = dataTabletPage.length - 1;
  return (
    <ThemeProvider theme={theme}>
      <div className="px-12 mb-16">
        <Advertisement data={dataTabletPage[finalIndex]?.sliders} />
        <Filters
          loadingFilter={loadingFilter}
          category={"tablet"}
          filters={filters}
          filterProducts={filterProducts}
          filterBrand={filterBrand}
        />
        <FilterBrand data={filterBrand} />
        <FilterCheckbox category={"tablet"} quantity={currentTotalProduct} />
        <Products
          category="tablet"
          queryParam={search?.slice(1)}
          type={!search ? "GET_TABLET_SAGA" : "FILTER_PRODUCT_SAGA"}
          totalQuantity={currentTotalProduct}
          data={touchedFilter ? filterProducts : tablet}
        />
      </div>
    </ThemeProvider>
  );
}

export default DetailPageTablet;
