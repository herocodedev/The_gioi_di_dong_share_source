import { call, put, select } from "redux-saga/effects";
import { authServices } from "../../services/AuthServices";
import { TOKEN } from "../../utils/Settings/global";
import { CHECK_LOGIN, SET_USER } from "../reducers/types/mainType";
import { handleLoading, showMess } from "./globalAction";

export function* loginUser(action) {
  yield call(() => handleLoading(true));
  try {
    const { data } = yield call(() => authServices.loginApi(action.values));

    // Save token to localStorage
    localStorage.setItem(TOKEN, data.user.accessToken);

    // Save info user
    yield put({
      type: SET_USER,
      user: data.user,
    });

    yield call(() => showMess("Đăng nhập thành công", true));

    // isLogin:True
    yield put({
      type: CHECK_LOGIN,
      isLogin: true,
    });

    // Navigate
    const { navigate } = yield select((state) => state.global);
    navigate("/");
  } catch (error) {
    console.log(error);
    console.log(error.response?.data);
    // Show error message
    yield call(() => showMess(error.response?.data.message, false));
  }

  yield call(() => handleLoading(false));
}

export function* checkLogin(action) {
  yield call(() => handleLoading(true));

  try {
    const { data } = yield call(() => authServices.checkLoginApi());
    yield put({
      type: CHECK_LOGIN,
      isLogin: true,
    });

    // Save info user
    yield put({
      type: SET_USER,
      user: data.user,
    });
  } catch (error) {
    console.log(error);
    console.log(error.response?.data);

    yield put({
      type: CHECK_LOGIN,
      isLogin: false,
    });
  }

  yield call(() => handleLoading(false));
}

export function* logout(action) {
  yield call(() => handleLoading(true));

  try {
    const { data } = yield call(() => authServices.logoutApi());

    // Clear token local
    localStorage.removeItem(TOKEN);
    yield call(() => showMess(data.message, true));

    const { navigate } = yield select((state) => state.global);
    window.location.reload();
  } catch (error) {
    console.log(error);
    console.log(error.response?.data);
  }

  yield call(() => handleLoading(false));
}

export function* registerUser(action) {
  yield call(() => handleLoading(true));
  try {
    const { data } = yield call(() => authServices.registerApi(action.values));

    // Show error message
    yield call(() => showMess(data.message, true));

    // Navigate
    const { navigate } = yield select((state) => state.global);
    navigate("/login");
  } catch (error) {
    console.log(error);
    console.log(error.response?.data);
    // Show error message
    yield call(() => showMess(error.response?.data.message, false));
  }

  yield call(() => handleLoading(false));
}
