import CancelPresentationRoundedIcon from "@mui/icons-material/CancelPresentationRounded";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Button, CircularProgress } from "@mui/material";
import { useFormik } from "formik";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import {
  ADD_HISTORY_SAGA,
  DELETE_CART_SAGA,
  EDIT_CART_SAGA,
  GET_CART_SAGA,
} from "../../redux/sagas/types/main";
import Info from "./Info";
function ShoppingCartPage(props) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { shoppingCarts, loadingShoppingCart, quantityShoppingCart } =
    useSelector((state) => state.global);
  useEffect(() => {
    if (user._id) {
      dispatch({
        type: GET_CART_SAGA,
        idUser: user._id,
      });
    }
  }, [dispatch, user._id]);

  const getTotalPrice = useMemo(() => {
    const result = shoppingCarts.reduce((res, curentPro, index) => {
      return res + curentPro.product.price * curentPro.quantity;
    }, 0);
    return result;
  }, [dispatch, quantityShoppingCart]);
  const { handleSubmit, errors, touched, handleChange, setFieldValue } =
    useFormik({
      enableReinitialize: true,
      initialValues: {
        idUser: user._id,
        gender: "",
        name: "",
        phone: "",
        address: "",
        carts: shoppingCarts,
        totalPrice: getTotalPrice,
      },
      validationSchema: Yup.object({
        gender: Yup.string().required("Bạn không được bỏ trống"),
        name: Yup.string().required("Bạn không được bỏ trống"),
        phone: Yup.string().required("Bạn không được bỏ trống"),
        address: Yup.string().required("Bạn không được bỏ trống"),
      }),
      onSubmit: (values) => {
        console.log("values: ", values);
        if (values.carts.length > 0) {
          dispatch({
            type: ADD_HISTORY_SAGA,
            data: values,
          });
        } else {
          alert("Giõ hàng trống");
        }
      },
    });

  return (
    <div className="flex bg-[#eee] items-center justify-center p-4">
      {!loadingShoppingCart ? (
        <div className=" rounded-sm bg-white w-[80%] si:w-[60%] sm:w-[55%] py-4 px-4">
          <div className="flex flex-col md:flex-row mb-2 justify-between items-center gap-2 md:gap-4">
            <Link to="/">
              <div className="text-minLink hover:opacity-70 cursor-pointer text-struncate">
                <ChevronLeftIcon />
                <span>Mua thêm sản phẩm khác</span>
              </div>
            </Link>
            <span className="text-sm">Giõ hàng của bạn</span>
          </div>

          {/* Products */}
          <div className="rounded-md shadow-xl">
            {shoppingCarts?.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center md:flex-row py-4 px-4 justify-between border-b-[1px] border-gray-300"
              >
                {/* Info  */}
                <div className="flex flex-col md:flex-row gap-2">
                  <div className="flex flex-col items-center justify-center">
                    <img
                      className="w-[80px] h-[80px] object-contain"
                      src={item?.product?.images[0]?.imgs[0]?.url}
                      alt=""
                    />
                    <CancelPresentationRoundedIcon
                      onClick={() => {
                        if (
                          window.confirm(
                            "Bạn chắc chắn muốn xóa sản phẩm khỏi giõ hàng?"
                          )
                        ) {
                          dispatch({
                            type: DELETE_CART_SAGA,
                            data: {
                              idUser: user._id,
                              idCart: item._id,
                            },
                          });
                        }
                      }}
                      className="cursor-pointer text-red-500 pt-2"
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
                <div className="flex flex-col">
                  <p className="text-red-600">
                    {item?.product?.price.toLocaleString("en-US", {
                      currency: "USD",
                    })}
                    đ
                  </p>
                  <p className="line-through text-sm my-1 text-gray-400">
                    {(item?.product?.price * 1.8).toLocaleString("en-US", {
                      currency: "USD",
                    })}
                    đ
                  </p>
                  <div className="flex">
                    <button
                      onClick={() => {
                        if (item.quantity > 1) {
                          dispatch({
                            type: EDIT_CART_SAGA,
                            data: {
                              idUser: user._id,
                              idCart: item._id,
                              quantity: item.quantity - 1,
                            },
                          });
                        }
                      }}
                      className={`border-[1px] ${
                        item.quantity === 1 ? "bg-gray-100" : ""
                      }  text-red-500 font-semibold py-1 px-2 rounded-sm`}
                    >
                      -
                    </button>
                    <button className=" border-[1px] text-black py-1 px-2 rounded-sm">
                      {item?.quantity}
                    </button>

                    <button
                      onClick={() => {
                        dispatch({
                          type: EDIT_CART_SAGA,
                          data: {
                            idUser: user._id,
                            idCart: item._id,
                            quantity: item.quantity + 1,
                          },
                        });
                      }}
                      className=" border-[1px] font-semibold text-minLink py-1 px-2 rounded-sm"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Info */}
          <div className="">
            <Info
              touched={touched}
              handleChange={handleChange}
              setFieldValue={setFieldValue}
              errors={errors}
            />
          </div>

          {/* Total money */}
          <div className="flex flex-col md:flex-row my-2 justify-between items-center gap-2 md:gap-4">
            <h1 className="font-semibold">
              Tổng tiền ({quantityShoppingCart} sản phẩm):{" "}
            </h1>

            <span className="text-base text-red-600 font-semibold">
              {getTotalPrice.toLocaleString("en-US", {
                currency: "USD",
              })}
              đ
            </span>
          </div>

          {/* Buy action */}
          <div className="mt-4">
            <Button
              onClick={handleSubmit}
              style={{ width: "100%" }}
              variant="contained"
              color="error"
            >
              Đặt hàng
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex items-center flex-col">
          <CircularProgress />

          <p>Loading....</p>
        </div>
      )}
    </div>
  );
}

export default ShoppingCartPage;
