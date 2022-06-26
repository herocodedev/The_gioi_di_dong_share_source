import AcUnitIcon from "@mui/icons-material/AcUnit";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { Button } from "@mui/material";
import _ from "lodash";
import { memo } from "react";
import { useDispatch } from "react-redux";
import { SIGN_HISTORY_SAGA } from "../../../../redux/sagas/types/main";
import { formatDate } from "../../../../utils/Settings/features";
function Receipt(props) {
  const { receipt, page, actionName } = props;
  const dispatch = useDispatch();
  return !_.isEmpty(receipt) ? (
    <div className="p-4">
      <div className="rounded-sm bg-white w-[100%] px-4">
        {/* Products */}
        <div className="rounded-md ">
          {/* Loop */}
          <div className="border-[1px] shadow-xl rounded-md p-2 my-2">
            <div className="flex mb-2  flex-wrap gap-2 justify-between items-center">
              <div className="">
                <div className="flex gap-2 mb-2 items-center flex-wrap">
                  <span className="font-semibold text-sm">
                    Đơn hàng ({" "}
                    {formatDate(receipt.createdAt)?.d +
                      "/" +
                      formatDate(receipt.createdAt)?.m +
                      "/" +
                      formatDate(receipt.createdAt)?.y}{" "}
                    )
                  </span>
                  <div
                    className={`${
                      !receipt.sign ? "bg-red-600" : "bg-green-400"
                    } px-2 pb-1 rounded-md flex items-center`}
                  >
                    <span className="mr-1">
                      <AcUnitIcon
                        className="text-white"
                        style={{ fontSize: 16 }}
                      />
                    </span>
                    <span className="text-[13px] capitalize text-white">
                      {receipt.sign ? "đã xác nhận" : "chưa xác nhận"}
                    </span>
                  </div>
                </div>
                <p className="capitalize font-bold text-sm text-struncate">
                  Họ tên người nhận:{" "}
                  {receipt?.name?.length > 30
                    ? receipt?.name.slice(0, 29) + "..."
                    : receipt?.name}
                </p>
                <p className="capitalize font-bold text-sm text-struncate">
                  Địa chỉ:{" "}
                  {receipt?.address?.length > 30
                    ? receipt?.address.slice(0, 29) + "..."
                    : receipt?.address}
                </p>
                <p className="capitalize font-bold text-sm text-struncate">
                  Giới tính: {receipt?.gender === "male" ? "Nam" : "Nữ"}
                </p>
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={() => {
                    dispatch({
                      type: SIGN_HISTORY_SAGA,
                      idHistory: receipt?._id,
                      page,
                      actionName,
                    });
                  }}
                  disabled={receipt?.sign}
                  variant="contained"
                  color={"secondary"}
                  size="small"
                >
                  <span className="">Xác nhận</span>
                </Button>
              </div>
            </div>
            {/* Loop */}
            {receipt?.carts?.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center md:flex-row py-4 px-4 gap-2 justify-between border-t-[1px] border-b-[1px] border-gray-300"
              >
                {/* Info  */}
                <div className="flex flex-col basis-2/3 md:flex-row gap-2">
                  <div className="flex flex-col items-center justify-center">
                    <img
                      className="w-[150px] h-[80px] object-contain"
                      src={item?.product?.images[0]?.imgs[0]?.url}
                      alt=""
                    />
                  </div>
                  <div className="">
                    <h1 className="font-semibold text-struncate text-center md:text-left">
                      {item?.product?.name}
                    </h1>
                    <p className="my-2 text-sm text-minLink text-center md:text-left">
                      2 khuyến mãi
                    </p>
                    <p className="text-sm capitalize text-minLink text-center md:text-left">
                      màu: {item?.product?.images[0]?.colorName}
                    </p>
                  </div>
                </div>
                {/* Action  */}
                <div className="flex flex-col basis-1/3 ">
                  <p className="text-red-600 text-center md:text-right">
                    {(item?.product.price).toLocaleString("en-US", {
                      currency: "USD",
                    })}
                    đ
                  </p>
                  <p className="line-through text-sm my-1 text-gray-400 text-center md:text-right">
                    {(item?.product.price * 1.8).toLocaleString("en-US", {
                      currency: "USD",
                    })}
                    đ
                  </p>
                  <div className="flex items-center justify-end">
                    <p className="font-semibold  text-sm mr-2 text-center">
                      Số lượng:
                    </p>
                    <p className="text-sm text-right">{item?.quantity}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Loop */}

            <div className="flex gap-2 justify-center md:justify-end mt-2">
              <AttachMoneyIcon className="text-red-600" />
              <span className="capitalize">tổng: </span>
              <span>
                {receipt.totalPrice.toLocaleString("en-US", {
                  currency: "USD",
                })}{" "}
                đ
              </span>
            </div>
          </div>
        </div>
        {/* Loop */}
      </div>
    </div>
  ) : (
    <></>
  );
}

export default memo(Receipt);
