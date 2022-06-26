import jwt_decode from "jwt-decode";
import { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { CHECK_LOGIN } from "../redux/reducers/types/mainType";
import { TOKEN } from "../utils/Settings/global";
function ProtectedRouteAdmin(props) {
  let token = localStorage.getItem(TOKEN);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!token || !jwt_decode(token).admin) {
      dispatch({
        type: CHECK_LOGIN,
        isLogin: true,
      });
    } else {
      dispatch({
        type: CHECK_LOGIN,
        isLogin: false,
      });
    }
  }, [dispatch, token]);
  return !token || !jwt_decode(token).admin ? (
    <Navigate to={"/"} />
  ) : (
    <Outlet />
  );
}

export default memo(ProtectedRouteAdmin);
