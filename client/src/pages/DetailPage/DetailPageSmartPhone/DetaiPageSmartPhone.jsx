import { createTheme, ThemeProvider } from "@mui/material";
import queryString from "query-string";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import brand_iphone from "../../../assests/img/brand_iphone.png";
import brand_nokia from "../../../assests/img/brand_nokia.png";
import brand_oppo from "../../../assests/img/brand_oppo.png";
import brand_samsung from "../../../assests/img/brand_samsung.png";
import brand_vivo from "../../../assests/img/brand_vivo.png";
import brand_xaomi from "../../../assests/img/brand_xaomi.png";
import Advertisement from "../../../components/Advertisement/Advertisement";
import FilterBrand from "../../../components/Filters/FilterBrand";
import FilterCheckbox from "../../../components/Filters/FilterCheckbox";
import {
  CLEAR_FILTER,
  SET_NEW_FILTER,
} from "../../../redux/reducers/types/filterType";
import {
  GET_DATA_SMARTPHONE_PAGE_SAGA,
  GET_SMARTPHONE_SAGA,
} from "../../../redux/sagas/types/main";
import { parseQueryParam } from "../../../utils/Settings/features";
import Products from "../global/Products";
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
    idFilter: "brand-smartphone-1",
    img: brand_iphone,
    name: "Iphone",
    value: "iphone",
  },
  {
    field: "brand",
    idFilter: "brand-smartphone-2",
    img: brand_samsung,
    name: "Samsung",
    value: "samsung",
  },
  {
    field: "brand",
    idFilter: "brand-smartphone-3",
    img: brand_oppo,
    name: "Oppo",
    value: "oppo",
  },
  {
    field: "brand",
    idFilter: "brand-smartphone-4",
    img: brand_vivo,
    name: "Vivo",
    value: "vivo",
  },
  {
    field: "brand",
    idFilter: "brand-smartphone-5",
    img: brand_xaomi,
    name: "Xiaomi",
    value: "xiaomi",
  },
  {
    field: "brand",
    idFilter: "brand-smartphone-6",
    img: brand_nokia,
    name: "Nokia",
    value: "nokia",
  },
];
function DetaiPageSmartPhone(props) {
  const { search } = useLocation();
  const dispatch = useDispatch();
  const { smartphone, currentTotalProduct } = useSelector(
    (state) => state.product
  );
  const { loadingFilter } = useSelector((state) => state.global);
  const { dataSmartphonePage } = useSelector((state) => state.page);
  const { filterProducts, filters, touchedFilter } = useSelector(
    (state) => state.filter
  );

  useEffect(() => {
    const queryParam = search?.slice(1);
    let filters = [];
    if (queryParam) {
      filters = parseQueryParam(
        "smartphone",
        queryString.parse(search),
        filterBrand
      );
      dispatch({
        type: SET_NEW_FILTER,
        filters,
      });
    }
    dispatch({
      type: GET_DATA_SMARTPHONE_PAGE_SAGA,
      category: "smartphone",
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
        type: GET_SMARTPHONE_SAGA,
      });
    }

    // Đưa search vào dependency vì để mỗi lần thay đổi url phải lấy về số lượng sản phẩm
  }, [dispatch, search]);
  let finalIndex = dataSmartphonePage.length - 1;
  return (
    <ThemeProvider theme={theme}>
      <div className="px-12 mb-16">
        <Advertisement data={dataSmartphonePage[finalIndex]?.sliders} />
        <Filters
          loadingFilter={loadingFilter}
          category={"smartphone"}
          filters={filters}
          filterProducts={filterProducts}
          filterBrand={filterBrand}
        />
        <FilterBrand data={filterBrand} />
        <FilterCheckbox
          category={"smartphone"}
          quantity={currentTotalProduct}
        />
        <Products
          category="smartphone"
          queryParam={search?.slice(1)}
          type={!search ? "GET_SMARTPHONE_SAGA" : "FILTER_PRODUCT_SAGA"}
          totalQuantity={currentTotalProduct}
          data={touchedFilter ? filterProducts : smartphone}
        />
      </div>
    </ThemeProvider>
  );
}

export default DetaiPageSmartPhone;
