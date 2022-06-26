import { takeLatest } from "redux-saga/effects";
import {
  addHistory,
  addToCart,
  deleteAllCart,
  deleteCart,
  deleteHistory,
  editCart,
  getAllHistory,
  getCart,
  getHistory,
  getHistoryNoSign,
  getHistorySign,
  signHistory,
} from "../actions/clientAction";
import {
  filterProduct,
  getDetail,
  searchAccessory,
  searchLaptop,
  searchPc,
  searchPro,
  searchRecommendProduct,
  searchSmartphone,
  searchSwatch,
  searchTablet,
} from "../actions/productAction";
import {
  ADD_HISTORY_SAGA,
  ADD_TO_CART_SAGA,
  DELETE_ALL_CART_SAGA,
  DELETE_CART_SAGA,
  DELETE_HISTORY_SAGA,
  EDIT_CART_SAGA,
  FILTER_PRODUCT_SAGA,
  GET_ALL_HISTORY_NO_SIGN_SAGA,
  GET_ALL_HISTORY_SAGA,
  GET_ALL_HISTORY_SIGN_SAGA,
  GET_CART_SAGA,
  GET_DETAIL_PRODUCT_SAGA,
  GET_HISTORY_SAGA,
  SEARCH_ACCESSORY_SAGA,
  SEARCH_LAPTOP_SAGA,
  SEARCH_PC_SAGA,
  SEARCH_PRODUCT_SAGA,
  SEARCH_RECOMMEND_PRODUCT_SAGA,
  SEARCH_SMARTPHONE_SAGA,
  SEARCH_SWATCH_SAGA,
  SEARCH_TABLET_SAGA,
  SIGN_HISTORY_SAGA,
} from "./types/main";

/* SEARCH */
export function* followActionSearchSmartphoneSaga() {
  yield takeLatest(SEARCH_SMARTPHONE_SAGA, searchSmartphone);
}

export function* followActionSearchLaptopSaga() {
  yield takeLatest(SEARCH_LAPTOP_SAGA, searchLaptop);
}

export function* followActionSearchTabletSaga() {
  yield takeLatest(SEARCH_TABLET_SAGA, searchTablet);
}

export function* followActionSearchAccessorySaga() {
  yield takeLatest(SEARCH_ACCESSORY_SAGA, searchAccessory);
}

export function* followActionSearchSwatchSaga() {
  yield takeLatest(SEARCH_SWATCH_SAGA, searchSwatch);
}

export function* followActionSearchPCaga() {
  yield takeLatest(SEARCH_PC_SAGA, searchPc);
}

export function* followActionSearchProduct() {
  yield takeLatest(SEARCH_PRODUCT_SAGA, searchPro);
}

/* SEARCH RECOMMEND PRODUCT */
export function* followActionSearchRecommendProductSaga() {
  yield takeLatest(SEARCH_RECOMMEND_PRODUCT_SAGA, searchRecommendProduct);
}

/* END SEARCH */

/* GET DETAIL */
export function* followActionGetDetailProducteSaga() {
  yield takeLatest(GET_DETAIL_PRODUCT_SAGA, getDetail);
}

/* FILTER PRODCT */
export function* followActionFilterProduct(action) {
  yield takeLatest(FILTER_PRODUCT_SAGA, filterProduct);
}

/* CART */
export function* followActionGetCart(action) {
  yield takeLatest(GET_CART_SAGA, getCart);
}

export function* followActionAddToCart(action) {
  yield takeLatest(ADD_TO_CART_SAGA, addToCart);
}

export function* followActionEditCart(action) {
  yield takeLatest(EDIT_CART_SAGA, editCart);
}

export function* followActionDeleteCart(action) {
  yield takeLatest(DELETE_CART_SAGA, deleteCart);
}

export function* followActionDeleteAllCart(action) {
  yield takeLatest(DELETE_ALL_CART_SAGA, deleteAllCart);
}

/* HISTORY */
export function* followActionGetHistory(action) {
  yield takeLatest(GET_HISTORY_SAGA, getHistory);
}

export function* followActionGetAllHistory(action) {
  yield takeLatest(GET_ALL_HISTORY_SAGA, getAllHistory);
}

export function* followActionGetHistorySign(action) {
  yield takeLatest(GET_ALL_HISTORY_SIGN_SAGA, getHistorySign);
}

export function* followActionGetHistoryNoSign(action) {
  yield takeLatest(GET_ALL_HISTORY_NO_SIGN_SAGA, getHistoryNoSign);
}

export function* followActionAddHistory(action) {
  yield takeLatest(ADD_HISTORY_SAGA, addHistory);
}

export function* followActionDeleteHistory(action) {
  yield takeLatest(DELETE_HISTORY_SAGA, deleteHistory);
}

export function* followActionSignHistory(action) {
  yield takeLatest(SIGN_HISTORY_SAGA, signHistory);
}
