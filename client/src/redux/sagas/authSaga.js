import { takeLatest } from "redux-saga/effects";
import {
  checkLogin,
  loginUser,
  logout,
  registerUser,
} from "../actions/authActions";
import {
  CHECK_LOGIN_SAGA,
  LOGIN_SAGA,
  LOGOUT_SAGA,
  REGISTER_SAGA,
} from "./types/main";

export function* followActionLogin() {
  yield takeLatest(LOGIN_SAGA, loginUser);
}

export function* followActionCheckLogin() {
  yield takeLatest(CHECK_LOGIN_SAGA, checkLogin);
}

export function* followActionLogout() {
  yield takeLatest(LOGOUT_SAGA, logout);
}

export function* followActionRegister() {
  yield takeLatest(REGISTER_SAGA, registerUser);
}
