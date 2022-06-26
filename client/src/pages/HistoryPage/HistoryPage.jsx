import AcUnitIcon from "@mui/icons-material/AcUnit";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Button, CircularProgress, Pagination } from "@mui/material";
import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import {
  DELETE_HISTORY_SAGA,
  GET_HISTORY_SAGA,
} from "../../redux/sagas/types/main";
import {
  compareDate,
  formatDate,
  getDate,
} from "../../utils/Settings/features";
import ButtonInfo from "./ButtonInfo";
const getContent = (date) => {
  if (compareDate(date, 7)) {
    return "Đã giao";
  } else if (compareDate(date, 2)) {
    return "Đang giao";
  }
  return "Hủy đặt hàng";
};

function HistoryPage(props) {
  const navigate = useNavigate();
  const { search } = useLocation();
  console.log(queryString.parse(search)?.page || 1);
  const { history, quantityHistory, loadingHistory } = useSelector(
    (state) => state.global
  );
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (user._id) {
      dispatch({
        type: GET_HISTORY_SAGA,
        idUser: user._id,
        page: queryString.parse(search)?.page || 1,
      });
    }
  }, [dispatch, user._id, search]);
  return !loadingHistory ? (
    <div className="flex bg-[#eee] items-center justify-center p-4">
      <div className="rounded-sm bg-white w-[80%] py-4 px-4">
        <div className="flex flex-col md:flex-row mb-2 justify-between items-center gap-2 md:gap-4">
          <Link to="/">
            <div className="text-minLink hover:opacity-70 cursor-pointer text-struncate">
              <ChevronLeftIcon />
              <span>Quay về trang chủ</span>
            </div>
          </Link>
          <span className="text-sm">
            Lịch sử đặt hàng{" "}
            <span className="text-minLink">({quantityHistory})</span>
          </span>
        </div>

        {/* Products */}
        <div className="rounded-md ">
          {/* Loop */}
          {history.map((item, index) => (
            <div
              key={index}
              className="border-[1px] shadow-xl rounded-md p-2 my-2"
            >
              <div className="flex mb-2  flex-wrap gap-2 justify-between items-center">
                <div className="">
                  <div className="flex gap-2 items-center">
                    <span className="font-semibold text-sm">
                      Đơn hàng (
                      {formatDate(item.createdAt)?.d +
                        "/" +
                        formatDate(item.createdAt)?.m +
                        "/" +
                        formatDate(item.createdAt)?.y}
                      )
                    </span>
                    <div
                      className={`${
                        !item.sign ? "bg-red-600" : "bg-green-400"
                      } px-2 pb-1 rounded-md flex items-center`}
                    >
                      <span className="mr-1">
                        <AcUnitIcon
                          className="text-white"
                          style={{ fontSize: 16 }}
                        />
                      </span>
                      <span className="text-[13px] capitalize text-white">
                        {item.sign ? "đã xác nhận" : "chưa xác nhận"}
                      </span>
                    </div>
                  </div>
                  <p>
                    <span className="font-semibold text-sm">
                      Dự kiến giao ngày:
                      {item.sign ? (
                        <span className="ml-1">
                          {getDate(item.updatedAt, 7)?.d +
                            "/" +
                            getDate(item.updatedAt, 7)?.m +
                            "/" +
                            getDate(item.updatedAt, 7)?.y}
                        </span>
                      ) : (
                        " Đang chờ xác nhận"
                      )}
                    </span>
                  </p>
                  <p className="text-red-600 text-sm">
                    Lưu ý: Chỉ được hủy trước khi đơn hàng được xác nhận
                  </p>
                </div>
                <div className="flex gap-2">
                  <ButtonInfo
                    name={item.name}
                    address={item.address}
                    gender={item.gender}
                  />
                  <Button
                    disabled={item.sign}
                    onClick={() => {
                      if (
                        window.confirm("Bạn chắc chắn muốn hủy đơn hàng này?")
                      ) {
                        dispatch({
                          type: DELETE_HISTORY_SAGA,
                          idHistory: item._id,
                          idUser: user._id,
                          page: queryString.parse(search)?.page || 1,
                        });
                      }
                    }}
                    variant="outlined"
                    color={"error"}
                    size="small"
                  >
                    <span className="text-[10px]">
                      {getContent(item.updatedAt)}
                    </span>
                  </Button>
                </div>
              </div>
              {item.carts.map((x, y) => (
                <div
                  key={y}
                  className="flex flex-col items-center md:flex-row py-4 px-4 gap-2 justify-between border-t-[1px] border-b-[1px] border-gray-300"
                >
                  {/* Info  */}
                  <div className="flex flex-col basis-2/3 md:flex-row gap-2">
                    <div className="flex flex-col items-center justify-center">
                      <img
                        className="w-[150px] h-[80px] object-contain"
                        src={x?.product?.images[0]?.imgs[0]?.url}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <h1 className="font-semibold text-struncate text-center md:text-left">
                        {x?.product.name}
                      </h1>
                      <p className="my-2 text-sm text-minLink text-center md:text-left">
                        2 khuyến mãi
                      </p>
                      <p className="text-sm capitalize text-minLink text-center md:text-left">
                        màu: {x?.product?.images[0].colorName}
                      </p>
                    </div>
                  </div>
                  {/* Action  */}
                  <div className="flex flex-col basis-1/3 ">
                    <p className="text-red-600 text-center md:text-right">
                      {(x?.product.price).toLocaleString("en-US", {
                        currency: "USD",
                      })}{" "}
                      đ
                    </p>
                    <p className="line-through text-sm my-1 text-gray-400 text-center md:text-right">
                      {(x?.product.price * 1.8).toLocaleString("en-US", {
                        currency: "USD",
                      })}
                      đ
                    </p>
                    <div className="flex items-center justify-end">
                      <p className="font-semibold  text-sm mr-2 text-center">
                        Số lượng:
                      </p>
                      <p className="text-sm text-right">{x.quantity}</p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex gap-2 justify-center md:justify-end mt-2">
                <AttachMoneyIcon className="text-red-600" />
                <span className="capitalize">tổng: </span>
                <span>
                  {item.totalPrice.toLocaleString("en-US", {
                    currency: "USD",
                  })}{" "}
                  đ
                </span>
              </div>
            </div>
          ))}
        </div>
        {/* Loop */}

        {/* Buy action */}
        <div className="mt-4 flex justify-center">
          <Pagination
            onChange={(e, page) => {
              navigate(`/history?page=${page}`);
            }}
            page={Number(queryString.parse(search)?.page) || 1}
            count={Math.ceil(quantityHistory / 5) || 0}
            variant="outlined"
            color="primary"
          />
        </div>
      </div>
    </div>
  ) : (
    <div className="flex bg-[#eee] items-center justify-center p-4">
      <CircularProgress />
    </div>
  );
}

export default memo(HistoryPage);
