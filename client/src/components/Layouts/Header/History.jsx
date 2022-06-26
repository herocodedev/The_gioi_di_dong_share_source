import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Badge, CircularProgress } from "@mui/material";
import { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GET_HISTORY_SAGA } from "../../../redux/sagas/types/main";
import "./Header.css";

function History(props) {
  const navigate = useNavigate();
  const { idUser, isLogin, loadingHistory, quantityHistory } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    if (idUser) {
      dispatch({
        type: GET_HISTORY_SAGA,
        idUser,
      });
    }
  }, [dispatch, idUser, quantityHistory]);
  return (
    <div
      onClick={() => {
        if (!isLogin) return alert("Vui lòng đăng nhập!");
        navigate("/history");
      }}
      className="md:bg-[rgba(255,172,10,.6)] py-2 md:py-0 md:px-2  text-center rounded-md font-semibold "
    >
      {!loadingHistory ? (
        <Badge badgeContent={quantityHistory} color="error">
          <ShoppingBagIcon style={{ fontSize: "1rem" }} />
        </Badge>
      ) : (
        <CircularProgress
          style={{ width: "20px", height: "20px", marginTop: 4 }}
        />
      )}

      <span className="text-struncate  md:mt-0 ">Lịch sử đơn hàng</span>
    </div>
  );
}

export default memo(History);
