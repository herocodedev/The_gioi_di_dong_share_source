import { createTheme, ThemeProvider } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import brand_apple from "../../../assests/img/brand_apple.png";
import brand_asus from "../../../assests/img/brand_asus.png";
import brand_hp from "../../../assests/img/hp_laptop.png";
import brand_lenovo from "../../../assests/img/lenovo.png";
import Advertisement from "../../../components/Advertisement/Advertisement";
import FilterBrand from "../../../components/Filters/FilterBrand";
import FilterCheckbox from "../../../components/Filters/FilterCheckbox";
import {
  CLEAR_FILTER,
  SET_NEW_FILTER,
} from "../../../redux/reducers/types/filterType";
import {
  GET_DATA_PC_PAGE_SAGA,
  GET_PC_SAGA,
} from "../../../redux/sagas/types/main";
import { parseQueryParam } from "../../../utils/Settings/features";
import Products from "../global/Products";
import Filters from "./Filter/Filters";
import queryString from "query-string";

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
    img: brand_hp,
    name: "HP",
    field: "brand",
    idFilter: "brand-pc-1",
    value: "hp",
  },
  {
    img: brand_apple,
    name: "Apple",
    field: "brand",
    idFilter: "brand-pc-2",
    value: "apple",
  },
  {
    img: brand_lenovo,
    name: "Lenovo",
    field: "brand",
    idFilter: "brand-pc-3",
    value: "lenovo",
  },
  {
    img: brand_asus,
    name: "Asus",
    field: "brand",
    idFilter: "brand-pc-4",
    value: "asus",
  },
];
function DetailPagePC(props) {
  const { search } = useLocation();
  const dispatch = useDispatch();
  const { pc, currentTotalProduct } = useSelector((state) => state.product);
  const { dataPCPage } = useSelector((state) => state.page);
  const { filterProducts, filters, touchedFilter } = useSelector(
    (state) => state.filter
  );
  const { loadingFilter } = useSelector((state) => state.global);

  useEffect(() => {
    const queryParam = search?.slice(1);
    let filters = [];
    if (queryParam) {
      filters = parseQueryParam("pc", queryString.parse(search), filterBrand);
      dispatch({
        type: SET_NEW_FILTER,
        filters,
      });
    }
    dispatch({
      type: GET_DATA_PC_PAGE_SAGA,
      category: "pc",
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
        type: GET_PC_SAGA,
      });
    }

    // Đưa search vào dependency vì để mỗi lần thay đổi url phải lấy về số lượng sản phẩm
  }, [dispatch, search]);
  let finalIndex = dataPCPage.length - 1;
  return (
    <ThemeProvider theme={theme}>
      <div className="px-12 mb-16">
        <Advertisement data={dataPCPage[finalIndex]?.sliders} />
        <Filters
          loadingFilter={loadingFilter}
          category={"pc"}
          filters={filters}
          filterProducts={filterProducts}
          filterBrand={filterBrand}
        />
        <FilterBrand data={filterBrand} />
        <FilterCheckbox category={"pc"} quantity={currentTotalProduct} />
        <Products
          category="pc"
          queryParam={search?.slice(1)}
          type={!search ? "GET_PC_SAGA" : "FILTER_PRODUCT_SAGA"}
          totalQuantity={currentTotalProduct}
          data={touchedFilter ? filterProducts : pc}
        />
      </div>
    </ThemeProvider>
  );
}

export default DetailPagePC;
