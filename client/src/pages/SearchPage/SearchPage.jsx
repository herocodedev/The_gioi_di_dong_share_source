import queryString from "query-string";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import NodataImg from "../../assests/img/nodata.png";
import CardCustom from "../../components/Card/Card";
import FilterCheckbox from "../../components/Filters/FilterCheckbox";
import { SEARCH_PRODUCT_SAGA } from "../../redux/sagas/types/main";

function SearchPage(props) {
  const dispatch = useDispatch();
  const { search } = useLocation();
  const { productSearch } = useSelector((state) => state.product);

  useEffect(() => {
    const parseURL = queryString.parse(search);
    const queryParam = search.slice(1);
    if (parseURL.search && parseURL.category) {
      dispatch({
        type: SEARCH_PRODUCT_SAGA,
        keyword: parseURL.search,
        category: parseURL.category,
        queryParam,
      });
    }
  }, [dispatch, search]);
  const renderProduct = () => {
    return productSearch.map((item, index) => {
      return (
        <div key={index} className="flex items-center justify-center">
          <CardCustom product={item} />
        </div>
      );
    });
  };
  return (
    <div className="bg-[#f3f3f3] w-[100%] px-16 py-4">
      <h2 className="ml-4 text-xl mb-4">
        Tìm thấy <strong>{productSearch?.length}</strong> kết quả.
      </h2>
      <div className="bg-white p-2 mb-2">
        <FilterCheckbox quantity={productSearch?.length} category={"search"} />
      </div>

      {productSearch?.length === 0 ? (
        <div className="bg-white flex items-center justify-center ">
          <img
            src={NodataImg}
            className="rounded-md"
            style={{ width: 300, height: 250 }}
            alt=""
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-4 px-2 gap-2  bg-white">
          {renderProduct()}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
