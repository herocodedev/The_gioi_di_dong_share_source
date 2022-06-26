import { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { CHECK_LOGIN } from "../redux/reducers/types/mainType";
import { TOKEN } from "../utils/Settings/global";
function AuthProtectedRoute(props) {
  const dispatch = useDispatch();
  let token = localStorage.getItem(TOKEN);
  useEffect(() => {
    if (token) {
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

  return token ? <Navigate to={"/"} /> : <Outlet />;
}

export default memo(AuthProtectedRoute);
