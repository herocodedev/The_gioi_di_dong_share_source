import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, CircularProgress } from "@mui/material";
import { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GET_CART_SAGA } from "../../../redux/sagas/types/main";
import "./Header.css";
function ShoppingCart(props) {
  const navigate = useNavigate();
  const { idUser, isLogin, loadingShoppingCart, quantityShoppingCart } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    if (idUser) {
      dispatch({
        type: GET_CART_SAGA,
        idUser,
      });
    }
  }, [dispatch, idUser, quantityShoppingCart]);
  return (
    <div
      onClick={() => {
        if (!isLogin) return alert("Vui lòng đăng nhập!");
        navigate("/cart");
      }}
      className="md:bg-[rgba(255,172,10,.6)] py-2 md:py-0 md:px-2  text-center rounded-md font-semibold "
    >
      {!loadingShoppingCart ? (
        <Badge badgeContent={quantityShoppingCart} color="error">
          <ShoppingCartIcon style={{ fontSize: "1rem" }} />
        </Badge>
      ) : (
        <CircularProgress
          style={{ width: "20px", height: "20px", marginTop: 4 }}
        />
      )}

      <span className="text-struncate md:mt-0 ">Giỏ hàng</span>
    </div>
  );
}

export default memo(ShoppingCart);
