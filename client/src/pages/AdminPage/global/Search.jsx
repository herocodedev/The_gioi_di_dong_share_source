import CloseIcon from "@mui/icons-material/Close";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import RefreshIcon from "@mui/icons-material/Refresh";
import { Button, Grid, IconButton, TextField, Tooltip } from "@mui/material";
import { memo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_RECOMMEND_PRODUCT } from "../../../redux/reducers/types/mainType";
import { SEARCH_RECOMMEND_PRODUCT_SAGA } from "../../../redux/sagas/types/main";

function Search(props) {
  const { category, type } = props;
  const [valueInput, setValueInput] = useState("");
  const [showBoxRecommend, setShowBoxRecommend] = useState(false);
  const dispatch = useDispatch();
  const typingTimeoutRef = useRef(null);
  const { currentProducts } = useSelector((state) => state.product);
  const handleSearch = (e) => {
    // Debounce search
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    const value = e.target.value;
    setValueInput(value);
    typingTimeoutRef.current = setTimeout(() => {
      if (value) {
        dispatch({
          type: SEARCH_RECOMMEND_PRODUCT_SAGA,
          category: category,
          keyword: value,
        });
      } else {
        dispatch({
          type: SET_RECOMMEND_PRODUCT,
          products: [],
        });
      }
    }, 600);
  };
  const renderProductRecommend = () => {
    if (currentProducts?.length === 0) {
      return (
        <div className="py-4">
          <p className="text-center text-xl flex items-center justify-center">
            <DoubleArrowIcon />
            <span className="ml-2 text-sm">Không có sản phẩm nào</span>
          </p>
        </div>
      );
    }
    return currentProducts?.map((item, index) => (
      <div key={index} className="flex gap-4 px-2 pb-4 pt-2 items-center ">
        <div className="w-[60px] h-[60px]">
          <img
            className="w-[100%] object-contain h-[100%] rounded-sm"
            src={item?.images[0]?.imgs[0]?.url}
            alt=""
          />
        </div>
        <div className="">
          <p className="text-[14px]">{item?.name}</p>
          <p className="text-[13px]">
            <strong className="">
              {item.price?.toLocaleString("en-US", {
                currency: "USD",
              })}{" "}
              đ
            </strong>
            <span className="ml-2 line-through">12.000.000</span>
            <span className="ml-2">-7%</span>
          </p>
          <p className="text-[13px]">Quà : 2.000.000đ</p>
        </div>
      </div>
    ));
  };
  return (
    <>
      <Grid item xs>
        <TextField
          fullWidth
          onClick={() => {
            setShowBoxRecommend(true);
          }}
          placeholder="Tìm kiếm theo tên sản phẩm..."
          onChange={handleSearch}
          className="input-search"
          InputProps={{
            disableUnderline: true,
            sx: { fontSize: "default" },
          }}
          variant="standard"
        />
        {showBoxRecommend && (
          <div
            style={{ zIndex: "100" }}
            className="absolute left-0 right-0 bottom-0 translate-y-[100%]"
          >
            <div
              className="bg-white shadow-xl overflow-hidden rounded-md"
              style={{ zIndex: "10000" }}
            >
              <div className="px-4 py-1 bg-gray-100 flex items-center justify-between">
                <span className="font-semibold">Gợi ý</span>
                <span
                  onClick={() => {
                    setShowBoxRecommend(false);
                  }}
                >
                  <CloseIcon style={{ width: "0.7em" }} />
                </span>
              </div>

              {renderProductRecommend()}
            </div>
          </div>
        )}
      </Grid>
      <Grid item>
        <Button
          onClick={() => {
            dispatch({
              type: "SEARCH_" + type?.toUpperCase() + "_SAGA",
              keyword: valueInput,
              category: category,
            });
            setShowBoxRecommend(false);
          }}
          variant="contained"
          size="small"
          sx={{ mr: 1 }}
        >
          Tìm kiếm
        </Button>
        <Tooltip title="Reload">
          <IconButton
            onClick={() => {
              // clear value input search
              const inputSearchEL = document.querySelector(
                ".input-search input"
              );
              inputSearchEL.value = "";
              // recover data
              dispatch({
                type: "SEARCH_" + type?.toUpperCase() + "_SAGA",
                keyword: "",
                category: category,
              });

              setShowBoxRecommend(false);
            }}
          >
            <RefreshIcon color="inherit" sx={{ display: "block" }} />
          </IconButton>
        </Tooltip>
      </Grid>
    </>
  );
}

export default memo(Search);
