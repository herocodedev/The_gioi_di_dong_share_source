import { createTheme, ThemeProvider } from "@mui/material";
import queryString from "query-string";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import acerLap from "../../../../assests/img/acer_laptop.png";
import asusLap from "../../../../assests/img/asus_laptop.png";
import dellLap from "../../../../assests/img/dell_laptop.png";
import hpLap from "../../../../assests/img/hp_laptop.png";
import lenoveLap from "../../../../assests/img/lenovo_laptop.png";
import lgLap from "../../../../assests/img/lg_laptop.png";
import macbookLap from "../../../../assests/img/macbook_laptop.png";
import msiLap from "../../../../assests/img/msi_laptop.png";
import {
  GET_DATA_LAPTOP_PAGE_SAGA,
  GET_LAPTOP_SAGA,
} from "../../../../redux/sagas/types/main";
import Advertisement from "../../../../components/Advertisement/Advertisement";
import FilterBrand from "../../../../components/Filters/FilterBrand";
import FilterCheckbox from "../../../../components/Filters/FilterCheckbox";
import {
  CLEAR_FILTER,
  SET_NEW_FILTER,
} from "../../../../redux/reducers/types/filterType";
import { parseQueryParam } from "../../../../utils/Settings/features";

import Filters from "./Filter/Filters";
import Products from "../../global/Products";

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
    idFilter: "brand-laptop-1",
    img: asusLap,
    name: "Asus",
    value: "asus",
  },
  {
    field: "brand",
    idFilter: "brand-laptop-2",
    img: dellLap,
    name: "Dell",
    value: "dell",
  },
  {
    field: "brand",
    idFilter: "brand-laptop-3",
    img: hpLap,
    name: "Hp",
    value: "hp",
  },
  {
    field: "brand",
    idFilter: "brand-laptop-4",
    img: lenoveLap,
    name: "Lenovo",
    value: "lenovo",
  },
  {
    field: "brand",
    idFilter: "brand-laptop-5",
    img: lgLap,
    name: "LG",
    value: "lg",
  },
  {
    field: "brand",
    idFilter: "brand-laptop-6",
    img: macbookLap,
    name: "Macbook",
    value: "macbook",
  },
  {
    field: "brand",
    idFilter: "brand-laptop-7",
    img: msiLap,
    name: "MSI",
    value: "msi",
  },
  {
    field: "brand",
    idFilter: "brand-laptop-8",
    img: acerLap,
    name: "Acer",
    value: "acer",
  },
];
function MainPageLaptop(props) {
  const { search } = useLocation();
  const dispatch = useDispatch();
  const { laptop, currentTotalProduct } = useSelector((state) => state.product);
  const { dataLaptopPage } = useSelector((state) => state.page);
  const { filterProducts, filters, touchedFilter } = useSelector(
    (state) => state.filter
  );
  const { loadingFilter } = useSelector((state) => state.global);

  useEffect(() => {
    const queryParam = search?.slice(1);
    let filters = [];
    if (queryParam) {
      filters = parseQueryParam(
        "laptop",
        queryString.parse(search),
        filterBrand
      );
      dispatch({
        type: SET_NEW_FILTER,
        filters,
      });
    }
    dispatch({
      type: GET_DATA_LAPTOP_PAGE_SAGA,
      category: "laptop",
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
        type: GET_LAPTOP_SAGA,
      });
    }

    // Đưa search vào dependency vì để mỗi lần thay đổi url phải lấy về số lượng sản phẩm
  }, [dispatch, search]);
  let finalIndex = dataLaptopPage.length - 1;
  return (
    <ThemeProvider theme={theme}>
      <div className="px-12 mb-16">
        <Advertisement data={dataLaptopPage[finalIndex]?.sliders} />
        <Filters
          loadingFilter={loadingFilter}
          category={"laptop"}
          filters={filters}
          filterProducts={filterProducts}
          filterBrand={filterBrand}
        />
        <FilterBrand data={filterBrand} />
        <FilterCheckbox category={"laptop"} quantity={currentTotalProduct} />
        <Products
          category="laptop"
          queryParam={search?.slice(1)}
          type={!search ? "GET_LAPTOP_SAGA" : "FILTER_PRODUCT_SAGA"}
          totalQuantity={currentTotalProduct}
          data={touchedFilter ? filterProducts : laptop}
        />
      </div>
    </ThemeProvider>
  );
}

export default MainPageLaptop;
