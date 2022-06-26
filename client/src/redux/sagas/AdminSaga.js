import { takeLatest } from "redux-saga/effects";
import {
  addAccessory,
  addAccessoryPage,
  addLaptop,
  addLaptopPage,
  addNewHomePage,
  addPC,
  addPCPage,
  addSmartphone,
  addSmartphonePage,
  addSwatch,
  addSwatchPage,
  addTablet,
  addTabletPage,
  deleteAccessory,
  deleteLaptop,
  deletePC,
  deleteSmartphone,
  deleteSwtach,
  deleteTablet,
  deleteUser,
  editAccessory,
  editAccessoryPage,
  editHomePage,
  editLaptop,
  editLaptopPage,
  editPC,
  editPCPage,
  editSmartphone,
  editSmartphonePage,
  editSwatch,
  editSwatchPage,
  editTablet,
  editTabletPage,
  getAccessory,
  getAlluser,
  getLaptop,
  getPC,
  getQuantity,
  getSmartphone,
  getSwatch,
  getTablet,
} from "../actions/adminAction";
import {
  ADD_ACCESSORY_SAGA,
  ADD_LAPTOP_SAGA,
  ADD_NEW_ACCESSORY_PAGE_SAGA,
  ADD_NEW_HOME_PAGE_SAGA,
  ADD_NEW_LAPTOP_PAGE_SAGA,
  ADD_NEW_PC_PAGE_SAGA,
  ADD_NEW_SMARTPHONE_PAGE_SAGA,
  ADD_NEW_SWATCH_PAGE_SAGA,
  ADD_NEW_TABLET_PAGE_SAGA,
  ADD_PC_SAGA,
  ADD_SMARTPHONE_SAGA,
  ADD_SWATCH_SAGA,
  ADD_TABLET_SAGA,
  DELETE_ACCESSORY_SAGA,
  DELETE_LAPTOP_SAGA,
  DELETE_PC_SAGA,
  DELETE_SMARTPHONE_SAGA,
  DELETE_SWATCH_SAGA,
  DELETE_TABLET_SAGA,
  DELETE_USER_SAGA,
  EDIT_ACCESSORY_PAGE_SAGA,
  EDIT_ACCESSORY_SAGA,
  EDIT_HOME_PAGE_SAGA,
  EDIT_LAPTOP_PAGE_SAGA,
  EDIT_LAPTOP_SAGA,
  EDIT_PC_PAGE_SAGA,
  EDIT_PC_SAGA,
  EDIT_SMARTPHONE_PAGE_SAGA,
  EDIT_SMARTPHONE_SAGA,
  EDIT_SWATCH_PAGE_SAGA,
  EDIT_SWATCH_SAGA,
  EDIT_TABLET_PAGE_SAGA,
  EDIT_TABLET_SAGA,
  GET_ACCESSORY_SAGA,
  GET_ALL_USER_SAGA,
  GET_LAPTOP_SAGA,
  GET_PC_SAGA,
  GET_QUANTITY_SAGA,
  GET_SMARTPHONE_SAGA,
  GET_SWATCH_SAGA,
  GET_TABLET_SAGA,
} from "./types/main";

export function* followActionGetAllUserSaga() {
  yield takeLatest(GET_ALL_USER_SAGA, getAlluser);
}

export function* followActionDeleteUserSaga() {
  yield takeLatest(DELETE_USER_SAGA, deleteUser);
}

export function* followActionGetQuantitySaga() {
  yield takeLatest(GET_QUANTITY_SAGA, getQuantity);
}

export function* followActionGetSmartPhoneSaga() {
  yield takeLatest(GET_SMARTPHONE_SAGA, getSmartphone);
}

export function* followActionGetTabletSaga() {
  yield takeLatest(GET_TABLET_SAGA, getTablet);
}

export function* followActionGetLaptopSaga() {
  yield takeLatest(GET_LAPTOP_SAGA, getLaptop);
}

export function* followActionGetAccessorySaga() {
  yield takeLatest(GET_ACCESSORY_SAGA, getAccessory);
}

export function* followActionGetSwatchSaga() {
  yield takeLatest(GET_SWATCH_SAGA, getSwatch);
}

export function* followActionGetPCSaga() {
  yield takeLatest(GET_PC_SAGA, getPC);
}

/* SMARTPHONE */
export function* followActionAddSmartPhoneSaga() {
  yield takeLatest(ADD_SMARTPHONE_SAGA, addSmartphone);
}

export function* followActionDeleteSmartPhoneSaga() {
  yield takeLatest(DELETE_SMARTPHONE_SAGA, deleteSmartphone);
}

export function* followActionEditSmartPhoneSaga() {
  yield takeLatest(EDIT_SMARTPHONE_SAGA, editSmartphone);
}

/* LAPTOP */
export function* followActionAddLaptopSaga() {
  yield takeLatest(ADD_LAPTOP_SAGA, addLaptop);
}

export function* followActionDeleteLaptopSaga() {
  yield takeLatest(DELETE_LAPTOP_SAGA, deleteLaptop);
}

export function* followActionEditLaptopSaga() {
  yield takeLatest(EDIT_LAPTOP_SAGA, editLaptop);
}

/* TABLET */
export function* followActionAddTabletSaga() {
  yield takeLatest(ADD_TABLET_SAGA, addTablet);
}

export function* followActionDeleteTabletSaga() {
  yield takeLatest(DELETE_TABLET_SAGA, deleteTablet);
}

export function* followActionEditTabletSaga() {
  yield takeLatest(EDIT_TABLET_SAGA, editTablet);
}

/* ACCESSORY */
export function* followActionAddAccessorySaga() {
  yield takeLatest(ADD_ACCESSORY_SAGA, addAccessory);
}

export function* followActionDeleteAccessorySaga() {
  yield takeLatest(DELETE_ACCESSORY_SAGA, deleteAccessory);
}

export function* followActionEditAccessorySaga() {
  yield takeLatest(EDIT_ACCESSORY_SAGA, editAccessory);
}

/* SWATCH */
export function* followActionAddSwatchSaga() {
  yield takeLatest(ADD_SWATCH_SAGA, addSwatch);
}

export function* followActionDeleteSwatchSaga() {
  yield takeLatest(DELETE_SWATCH_SAGA, deleteSwtach);
}

export function* followActionEditSwatchSaga() {
  yield takeLatest(EDIT_SWATCH_SAGA, editSwatch);
}

/* PC */
export function* followActionAddPCSaga() {
  yield takeLatest(ADD_PC_SAGA, addPC);
}

export function* followActionDeletePCSaga() {
  yield takeLatest(DELETE_PC_SAGA, deletePC);
}

export function* followActionEditPCSaga() {
  yield takeLatest(EDIT_PC_SAGA, editPC);
}
/* HOME PAGE */

export function* followActionAddNewHomePage() {
  yield takeLatest(ADD_NEW_HOME_PAGE_SAGA, addNewHomePage);
}

export function* followActionEditHomePage() {
  yield takeLatest(EDIT_HOME_PAGE_SAGA, editHomePage);
}

/* SMARTPHONE PAGE */
export function* followActionAddNewSmartphonePage() {
  yield takeLatest(ADD_NEW_SMARTPHONE_PAGE_SAGA, addSmartphonePage);
}

export function* followActionEditSmartphonePage() {
  yield takeLatest(EDIT_SMARTPHONE_PAGE_SAGA, editSmartphonePage);
}

/* LAPTOP PAGE */
export function* followActionAddNewLaptopPage() {
  yield takeLatest(ADD_NEW_LAPTOP_PAGE_SAGA, addLaptopPage);
}

export function* followActionEditLaptopPage() {
  yield takeLatest(EDIT_LAPTOP_PAGE_SAGA, editLaptopPage);
}

/* TABLET PAGE */
export function* followActionAddTabletPage() {
  yield takeLatest(ADD_NEW_TABLET_PAGE_SAGA, addTabletPage);
}

export function* followActionEditTabletPage() {
  yield takeLatest(EDIT_TABLET_PAGE_SAGA, editTabletPage);
}

/* ACCESSORY PAGE */
export function* followActionAddAccessoryPage() {
  yield takeLatest(ADD_NEW_ACCESSORY_PAGE_SAGA, addAccessoryPage);
}

export function* followActionEditAccessoryPage() {
  yield takeLatest(EDIT_ACCESSORY_PAGE_SAGA, editAccessoryPage);
}

/* SWATCH PAGE */
export function* followActionAddSwatchPage() {
  yield takeLatest(ADD_NEW_SWATCH_PAGE_SAGA, addSwatchPage);
}

export function* followActionEditSwatchPage() {
  yield takeLatest(EDIT_SWATCH_PAGE_SAGA, editSwatchPage);
}

/* PC PAGE */
export function* followActionAddPCPage() {
  yield takeLatest(ADD_NEW_PC_PAGE_SAGA, addPCPage);
}

export function* followActionEditPCPage() {
  yield takeLatest(EDIT_PC_PAGE_SAGA, editPCPage);
}
