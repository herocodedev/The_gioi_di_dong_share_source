import CloseIcon from "@mui/icons-material/Close";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Button } from "@mui/material";
import queryString from "query-string";
import { memo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { SET_RECOMMEND_PRODUCT } from "../../../redux/reducers/types/mainType";
import { SEARCH_RECOMMEND_PRODUCT_SAGA } from "../../../redux/sagas/types/main";
import { categoryAllProduct } from "../../../utils/Settings/data";
function Search() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const { currentProducts } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [category, setCategory] = useState("");
  const typingTimeoutRef = useRef(null);
  // const [valueInput, setValueInput] = useState("");
  const [showBoxRecommend, setShowBoxRecommend] = useState(false);
  const handleSearch = (e) => {
    // Debounce search
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    const value = e.target.value;
    // setValueInput(value);
    typingTimeoutRef.current = setTimeout(() => {
      if (value) {
        dispatch({
          type: SEARCH_RECOMMEND_PRODUCT_SAGA,
          category: category || "smartphone",
          keyword: value,
        });
      } else {
        dispatch({
          type: SET_RECOMMEND_PRODUCT,
          products: [],
        });
      }
    }, 500);
  };

  const renderCategory = () => {
    return categoryAllProduct?.map((item, index) => (
      <Button
        key={index}
        style={
          category === item.category
            ? { border: " 1px solid rgba(255, 196, 0, 0.5)", color: "#000" }
            : {}
        }
        onClick={() => {
          setCategory(item.category);
        }}
        variant="outlined"
        size="small"
      >
        <p className="text-struncate">{item.content}</p>
      </Button>
    ));
  };

  const renderProductRecommend = () => {
    if (currentProducts?.length === 0) {
      return (
        <div className="py-4">
          <p className="text-center text-xl flex items-center justify-center">
            <DoubleArrowIcon />

            <span className="ml-2">Không có sản phẩm nào</span>
          </p>
        </div>
      );
    }
    return currentProducts?.map((item, index) => (
      <div
        className="flex gap-4 px-2 pb-4 pt-2"
        key={index}
        onClick={() => {
          navigate(`${item.category}/${item._id}`);
          window.location.reload();
        }}
      >
        <div className="w-[50px] h-[50px] lg:w-[80px] lg:h-[80px]">
          <img
            className="w-[100%] object-contain h-[100%] rounded-sm"
            src={item?.images[0]?.imgs[0]?.url}
            alt=""
          />
        </div>
        <div className="">
          <p className="mb-2 text-[16px]">{item?.name}</p>
          <p className="mb-2">
            <strong>
              {item.price?.toLocaleString("en-US", {
                currency: "USD",
              })}
              đ
            </strong>
            <span className="ml-2 line-through">12.000.000</span>
            <span className="ml-2">-7%</span>
          </p>
          <p>Quà : 2.000.000đ</p>
        </div>
      </div>
    ));
  };

  const handleSumit = (e) => {
    e.preventDefault();
    const inputEl = document.querySelector(".input-search-product-header");
    const value = inputEl.value;
    if (value) {
      const search = {
        search: value,
        category: category || "smartphone",
        sort: "createdAt",
      };
      const queryParams = queryString.stringify(search);
      navigate(`/search?${queryParams}`);
      setShowBoxRecommend(false);
    }
    inputEl.value = "";
  };
  return (
    <form
      onSubmit={handleSumit}
      className="relative col-span-5 sm:col-span-4 px-4 md:col-span-3 h-[50px] bg-white flex items-center justify-between rounded-md text-sm text-[#333]"
    >
      <input
        onClick={() => {
          setShowBoxRecommend(true);
        }}
        onChange={handleSearch}
        type="text"
        className="w-full h-full outline-none input-search-product-header"
        placeholder="Lưu ý: Chọn loại sản phẩm khi tìm kiếm..."
      />

      <SearchRoundedIcon />

      {showBoxRecommend && (
        <div
          style={{ zIndex: "10000" }}
          className="absolute left-0 right-0 bottom-0 translate-y-[100%]"
        >
          <div
            className="bg-white shadow-xl overflow-hidden rounded-md"
            style={{ zIndex: "10000" }}
          >
            <div className="">
              <div className="px-4 py-1 bg-gray-100 flex items-center justify-between">
                <span className="font-semibold">
                  Chọn loại sản phẩm bạn đang muốn trước khi tìm kiếm
                </span>
                <span
                  onClick={() => {
                    setShowBoxRecommend(false);
                    dispatch({
                      type: SET_RECOMMEND_PRODUCT,
                      products: [],
                    });
                    setCategory("");
                    const inputSearchEl = document.querySelector(
                      ".input-search-product-header"
                    );
                    inputSearchEl.value = "";
                  }}
                >
                  <CloseIcon style={{ width: "0.7em" }} />
                </span>
              </div>
              <div className="px-2 py-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                {renderCategory()}
              </div>
            </div>
            <div className="px-4 py-1 bg-gray-100 flex items-center justify-between">
              <span className="font-semibold">Gợi ý</span>
              <span
                onClick={() => {
                  setShowBoxRecommend(false);
                  dispatch({
                    type: SET_RECOMMEND_PRODUCT,
                    products: [],
                  });
                  setCategory("");
                  const inputSearchEl = document.querySelector(
                    ".input-search-product-header"
                  );
                  inputSearchEl.value = "";
                }}
              >
                <CloseIcon style={{ width: "0.7em" }} />
              </span>
            </div>

            {renderProductRecommend()}
          </div>
        </div>
      )}
    </form>
  );
}

export default memo(Search);
