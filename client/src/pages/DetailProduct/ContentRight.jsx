import CheckIcon from "@mui/icons-material/Check";
import LocalAirportOutlinedIcon from "@mui/icons-material/LocalAirportOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import { Button } from "@mui/material";
import _ from "lodash";
import { memo } from "react";
import SimpleSkeleton from "../../components/Skeleton/SimpleSkeleton";
import {
  dataKeyAcessory,
  dataKeyLaptop,
  dataKeyPC,
  dataKeySmartphone,
  dataKeySwatch,
  dataKeyTablet,
  selectColor,
  selectStorageLaptop,
  selectStoragePC,
  selectStorageSmartPhone,
  selectStorageTablet,
} from "../../utils/Settings/data";
import { useDispatch } from "react-redux";
import { OPEN_MODAL_HOC } from "../../redux/reducers/types/mainType";
import Cart from "./Other/Cart";
import { useNavigate } from "react-router-dom";
function ContentRight(props) {
  const { productDetail, category, isLogin, user } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const renderStaticItem1 = () => {
    return !_.isEmpty(productDetail) ? (
      <>
        <div className="my-2 rounded-sm border-[1px]">
          <div className="bg-gray-200 px-2 py-2">
            <h1 className="font-semibold sm:text-left text-center text-base">
              Khuyến mãi
            </h1>
            <p className="text-[12px] sm:text-[14px] sm:text-left text-center">
              Giá và khuyến mãi dự kiến áp dụng đến khi hết sản phẩm
            </p>
          </div>
          <div className="">
            <ul>
              <li className="p-2">
                <span className="bg-minLink p-1 rounded-sm text-[12px] text-white">
                  1
                </span>
                <span className="text-[12px] sm:text-[14px] ml-2">
                  Giảm giá 50% gói bảo hành mở rộng thêm 1 năm (chính hãng)
                </span>
              </li>
              <li className="p-2">
                <span className="bg-minLink p-1 rounded-sm text-[12px] text-white">
                  2
                </span>
                <span className="text-[12px] sm:text-[14px] ml-2">
                  Giảm đến 1,500,000đ khi Thu cũ Đổi mới (tùy model máy cũ;
                  không áp dụng kèm giảm giá qua VNPAY, Moca)
                </span>
              </li>

              <li className="p-2">
                <span className="bg-minLink p-1 rounded-sm text-[12px] text-white">
                  3
                </span>
                <span className="text-[12px] sm:text-[14px] ml-2">
                  Giảm giá 50% gói bảo hành mở rộng thêm 1 năm (chính hãng)
                </span>
              </li>

              <li className="p-2">
                <span className="bg-minLink p-1 rounded-sm text-[12px] text-white">
                  4
                </span>
                <span className="text-[12px] sm:text-[14px] ml-2">
                  Giảm 50% giá gói cước 1 năm (Vina350/Vina500) cho Sim
                  VinaPhone trả sau (Trị giá đến 3 triệu)
                </span>
              </li>

              <li className="p-2">
                <span className="bg-minLink p-1 rounded-sm text-[12px] text-white">
                  5
                </span>
                <span className="text-[12px] sm:text-[14px] ml-2">
                  Nhập mã TGDD giảm 5% tối đa 400.000đ cho đơn hàng từ 500.000đ
                  trở lên khi thanh toán qua Ví Moca trên ứng dụng Grab
                </span>
              </li>
            </ul>
          </div>

          <div className="border-dashed border-t-[1px] py-2 border-gray-300 px-2">
            <p className="text-[12px] sm:text-[14px]">
              <span className="text-red-600">(*)</span> Giá và khuyến mãi dự
              kiến áp dụng đến khi hết sản phẩm
            </p>
          </div>
        </div>
        <div className="my-2">
          <p>
            <LocalAirportOutlinedIcon style={{ color: "#3f51d5" }} /> Giao hàng
            tận nơi
          </p>
          <p className="my-2 text-teal-700 font-semibold text-[12px] sm:text-[14px]">
            Giao hàng Từ 16h - 18h hôm nay (18/06)
          </p>
          <p className="my-2 text-teal-700 font-semibold text-[12px] sm:text-[14px]">
            Miễn phí giao hàng
          </p>

          <p>
            <StorefrontOutlinedIcon style={{ color: "#3f51d5" }} /> Giao Có hàng
            tại tất các siêu thị
          </p>
        </div>
      </>
    ) : (
      <SimpleSkeleton height={200} />
    );
  };
  const renderStaticItem2 = () => {
    return !_.isEmpty(productDetail) ? (
      <div className="my-2 rounded-sm border-[1px]">
        <div className="bg-gray-200 px-2 py-2">
          <h1 className="font-semibold text-sm sm:text-base">
            3 ưu đãi thêm Dự kiến áp dụng đến 23:00 30/06
          </h1>
        </div>
        <div className="">
          <ul>
            <li className="p-2">
              <span className=" p-1 rounded-sm text-[12px] text-white">
                <CheckIcon
                  className="text-green-500"
                  style={{ fontSize: "12px" }}
                />
              </span>
              <span className="text-[12px] sm:text-[14px] ml-2">
                Tặng cho khách lần đầu mua hàng online tại web
              </span>
            </li>
            <li className="p-2">
              <span className=" p-1 rounded-sm text-[12px] text-white">
                <CheckIcon
                  className="text-green-500"
                  style={{ fontSize: "12px" }}
                />
              </span>
              <span className="text-[12px] sm:text-[14px] ml-2">
                Mã giảm 100.000đ áp dụng đơn hàng từ 400.000đ
              </span>
            </li>

            <li className="p-2">
              <span className="p-1 rounded-sm text-[12px] text-white">
                <CheckIcon
                  className="text-green-500"
                  style={{ fontSize: "12px" }}
                />
              </span>
              <span className="text-[12px] sm:text-[14px] ml-2">
                FREEship đơn hàng từ 300.000đ hoặc thành viên VÀNG
              </span>
            </li>
          </ul>
        </div>

        <div className="border-dashed border-t-[1px] py-2 border-gray-300 px-2">
          <p className="text-[12px] sm:text-[14px]">
            <span className="text-red-600">(*)</span> Dự kiến áp dụng đến khi
            hết sản phẩm
          </p>
        </div>
      </div>
    ) : (
      <SimpleSkeleton height={200} />
    );
  };
  const renderButtonStorage = (value) => {
    let data = [];
    if (category === "smartphone") {
      data = selectStorageSmartPhone;
    } else if (category === "tablet") {
      data = selectStorageTablet;
    } else if (category === "pc") {
      data = selectStoragePC;
    } else if (category === "laptop") {
      data = selectStorageLaptop;
    }
    return data?.map((item, index) => (
      <Button
        disabled={item.value !== value}
        key={index}
        variant="contained"
        size="small"
      >
        {item.name}
      </Button>
    ));
  };
  const renderColor = (arrColor) => {
    const checkColor = (color) => {
      let index = arrColor.findIndex(
        (item, index) => item.colorValue === color
      );
      return index === -1;
    };
    if (
      category === "smartphone" ||
      category === "tablet" ||
      category === "pc" ||
      category === "laptop"
    ) {
      return selectColor.map((item, index) => (
        <Button
          disabled={checkColor(item.value)}
          key={index}
          variant="contained"
          size="small"
        >
          <span className="text-[12px] text-struncate"> {item.name}</span>
        </Button>
      ));
    }
  };

  const renderImages = () => {
    if (category === "swatch" || category === "accessory")
      return (
        <img
          src="https://cdn.tgdd.vn/2022/06/banner/Desk-920x230-920x230-15.png"
          alt=""
        />
      );
  };

  const renderConfiguration = () => {
    let data = [];
    let jsx = [];
    if (category === "smartphone") {
      data = dataKeySmartphone;
    } else if (category === "tablet") {
      data = dataKeyTablet;
    } else if (category === "pc") {
      data = dataKeyPC;
    } else if (category === "laptop") {
      data = dataKeyLaptop;
    } else if (category === "accessory") {
      data = dataKeyAcessory;
    } else if (category === "swatch") {
      data = dataKeySwatch;
    }

    for (let i = 0; i < data.length; i++) {
      jsx.push(
        <li
          key={i}
          className={`flex flex-wrap ${i % 2 !== 0 ? "bg-gray-200" : ""}  p-2`}
        >
          <span className="w-[150px] text-[12px] sm:text-[14px]">
            {data[i].value}:
          </span>
          <span className="text-sm sm:text-base">
            {productDetail[data[i]?.key]
              ? productDetail[data[i]?.key]
              : "Đang cập nhật"}
          </span>
        </li>
      );
    }
    return jsx;
  };
  return (
    <>
      {!_.isEmpty(productDetail) ? (
        <>
          {/* Images */}
          {renderImages()}
          {/* Storage */}
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {renderButtonStorage(productDetail?.storage)}
          </div>
          {/* Colors */}
          <div className="grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-4 my-2  gap-2">
            {renderColor(productDetail?.images)}
          </div>
        </>
      ) : (
        <SimpleSkeleton height={150} />
      )}

      {/* Price */}
      <div className="flex flex-wrap my-2">
        {productDetail?.price ? (
          <>
            <span className="text-red-600 font-semibold text-2xl">
              {productDetail?.price.toLocaleString("en-US", {
                currency: "USD",
              })}
              đ*
            </span>
            <span className="text-gray-400 line-through mx-2">
              {(productDetail?.price * 1.8).toLocaleString("en-US", {
                currency: "USD",
              })}
              đ
            </span>
            <span className="text-red-600">-8%</span>
            <span className="px-2 leading-7 bg-gray-300 mx-2 rounded-sm text-black  text-[11px]">
              Trả góp 0%
            </span>
          </>
        ) : (
          <SimpleSkeleton height={20} />
        )}
      </div>
      {renderStaticItem1()}
      {/* Add to cart + Order product */}
      <div className="my-2">
        <Button
          onClick={() => {
            if (isLogin) {
              dispatch({
                type: OPEN_MODAL_HOC,
                title: "Thêm vào giõ hàng",
                ComponentContentModal: (
                  <Cart user={user} productDetail={productDetail} />
                ),
              });
            } else {
              navigate("/login");
            }
          }}
          style={{ width: "100%", marginBottom: "8px" }}
          variant="contained"
          color="primary"
        >
          <span className="text-[12px] sm:text-[14px]">Thêm vào giỏ hàng</span>
        </Button>
        <Button
          onClick={() => {
            if (isLogin) {
              dispatch({
                type: OPEN_MODAL_HOC,
                title: "Thêm vào giõ hàng",
                ComponentContentModal: (
                  <Cart productDetail={productDetail} user={user} />
                ),
              });
            } else {
              navigate("/login");
            }
          }}
          style={{ width: "100%" }}
          variant="contained"
          color="error"
        >
          <span className="text-[12px] sm:text-[14px]"> Đặt hàng</span>
        </Button>
      </div>
      {renderStaticItem2()}
      {/* Configuration */}
      <div className="my-2">
        {productDetail?.name ? (
          <h1 className="font-semibold text-base text-center sm:text-left sm:text-xl text-struncate">
            Cấu hình {productDetail?.name}
          </h1>
        ) : (
          <SimpleSkeleton height={20} />
        )}

        {!_.isEmpty(productDetail) ? (
          <div className="my-2">
            <ul>{renderConfiguration()}</ul>
          </div>
        ) : (
          <SimpleSkeleton height={150} />
        )}
      </div>
    </>
  );
}

export default memo(ContentRight);
