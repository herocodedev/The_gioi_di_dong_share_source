import { takeLatest } from "redux-saga/effects";
import {
  createComment,
  deleteComment,
  editComment,
  getAccessoryPage,
  getComment,
  getDataHomePage,
  getLaptopPage,
  getPCPage,
  getSmartphonePage,
  getSwatchPage,
  getTabletPage,
} from "../actions/clientAction";
import {
  CREATE_COMMENT_SAGA,
  DELETE_COMMENT_SAGA,
  EDIT_COMMENT_SAGA,
  GET_COMMENT_SAGA,
  GET_DATA_ACCESSORY_PAGE_SAGA,
  GET_DATA_HOME_PAGE_SAGA,
  GET_DATA_LAPTOP_PAGE_SAGA,
  GET_DATA_PC_PAGE_SAGA,
  GET_DATA_SMARTPHONE_PAGE_SAGA,
  GET_DATA_SWATCH_PAGE_SAGA,
  GET_DATA_TABLET_PAGE_SAGA,
} from "./types/main";

export function* followActionGetDataHomePage() {
  yield takeLatest(GET_DATA_HOME_PAGE_SAGA, getDataHomePage);
}

export function* followActionGetDataSmartphonePage() {
  yield takeLatest(GET_DATA_SMARTPHONE_PAGE_SAGA, getSmartphonePage);
}

export function* followActionGetDataLaptopPage() {
  yield takeLatest(GET_DATA_LAPTOP_PAGE_SAGA, getLaptopPage);
}
export function* followActionGetDataTabletPage() {
  yield takeLatest(GET_DATA_TABLET_PAGE_SAGA, getTabletPage);
}

export function* followActionGetDataAccessoryPage() {
  yield takeLatest(GET_DATA_ACCESSORY_PAGE_SAGA, getAccessoryPage);
}

export function* followActionGetDataSwatchPage() {
  yield takeLatest(GET_DATA_SWATCH_PAGE_SAGA, getSwatchPage);
}

export function* followActionGetDataPCPage() {
  yield takeLatest(GET_DATA_PC_PAGE_SAGA, getPCPage);
}

export function* followActionGetComment() {
  yield takeLatest(GET_COMMENT_SAGA, getComment);
}

export function* followActionCreateComment() {
  yield takeLatest(CREATE_COMMENT_SAGA, createComment);
}

export function* followActionEditComment() {
  yield takeLatest(EDIT_COMMENT_SAGA, editComment);
}

export function* followActionDeleteComment() {
  yield takeLatest(DELETE_COMMENT_SAGA, deleteComment);
}
