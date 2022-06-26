import { all } from "redux-saga/effects";
import {
  followActionAddAccessoryPage,
  followActionAddAccessorySaga,
  followActionAddLaptopSaga,
  followActionAddNewHomePage,
  followActionAddNewLaptopPage,
  followActionAddNewSmartphonePage,
  followActionAddPCPage,
  followActionAddPCSaga,
  followActionAddSmartPhoneSaga,
  followActionAddSwatchPage,
  followActionAddSwatchSaga,
  followActionAddTabletPage,
  followActionAddTabletSaga,
  followActionDeleteAccessorySaga,
  followActionDeleteLaptopSaga,
  followActionDeletePCSaga,
  followActionDeleteSmartPhoneSaga,
  followActionDeleteSwatchSaga,
  followActionDeleteTabletSaga,
  followActionDeleteUserSaga,
  followActionEditAccessoryPage,
  followActionEditAccessorySaga,
  followActionEditHomePage,
  followActionEditLaptopPage,
  followActionEditLaptopSaga,
  followActionEditPCPage,
  followActionEditPCSaga,
  followActionEditSmartphonePage,
  followActionEditSmartPhoneSaga,
  followActionEditSwatchPage,
  followActionEditSwatchSaga,
  followActionEditTabletPage,
  followActionEditTabletSaga,
  followActionGetAccessorySaga,
  followActionGetAllUserSaga,
  followActionGetLaptopSaga,
  followActionGetPCSaga,
  followActionGetQuantitySaga,
  followActionGetSmartPhoneSaga,
  followActionGetSwatchSaga,
  followActionGetTabletSaga,
} from "./AdminSaga";
import {
  followActionCheckLogin,
  followActionLogin,
  followActionLogout,
  followActionRegister,
} from "./authSaga";
import {
  followActionCreateComment,
  followActionDeleteComment,
  followActionEditComment,
  followActionGetComment,
  followActionGetDataAccessoryPage,
  followActionGetDataHomePage,
  followActionGetDataLaptopPage,
  followActionGetDataPCPage,
  followActionGetDataSmartphonePage,
  followActionGetDataSwatchPage,
  followActionGetDataTabletPage,
} from "./clientSaga";
import {
  followActionAddHistory,
  followActionAddToCart,
  followActionDeleteAllCart,
  followActionDeleteCart,
  followActionDeleteHistory,
  followActionEditCart,
  followActionFilterProduct,
  followActionGetAllHistory,
  followActionGetCart,
  followActionGetDetailProducteSaga,
  followActionGetHistory,
  followActionGetHistoryNoSign,
  followActionGetHistorySign,
  followActionSearchAccessorySaga,
  followActionSearchLaptopSaga,
  followActionSearchPCaga,
  followActionSearchProduct,
  followActionSearchRecommendProductSaga,
  followActionSearchSmartphoneSaga,
  followActionSearchSwatchSaga,
  followActionSearchTabletSaga,
  followActionSignHistory,
} from "./productSaga";

export function* rootSaga() {
  yield all([
    followActionLogin(),
    followActionCheckLogin(),
    followActionLogout(),
    followActionRegister(),
    followActionGetAllUserSaga(),
    followActionDeleteUserSaga(),
    followActionGetQuantitySaga(),

    // CRUD - SMARTPHONE
    followActionGetSmartPhoneSaga(),
    followActionAddSmartPhoneSaga(),
    followActionDeleteSmartPhoneSaga(),
    followActionEditSmartPhoneSaga(),
    // CRUD - LAPTOP
    followActionGetLaptopSaga(),
    followActionAddLaptopSaga(),
    followActionDeleteLaptopSaga(),
    followActionEditLaptopSaga(),
    // CRUD - TABLET
    followActionGetTabletSaga(),
    followActionAddTabletSaga(),
    followActionDeleteTabletSaga(),
    followActionEditTabletSaga(),
    // CRUD - ACCESSORY
    followActionGetAccessorySaga(),
    followActionAddAccessorySaga(),
    followActionDeleteAccessorySaga(),
    followActionEditAccessorySaga(),
    // CRUD - SWATCH
    followActionGetSwatchSaga(),
    followActionAddSwatchSaga(),
    followActionDeleteSwatchSaga(),
    followActionEditSwatchSaga(),
    // CRUD - PC
    followActionGetPCSaga(),
    followActionAddPCSaga(),
    followActionDeletePCSaga(),
    followActionEditPCSaga(),
    // SEARCH
    followActionSearchSmartphoneSaga(),
    followActionSearchLaptopSaga(),
    followActionSearchTabletSaga(),
    followActionSearchAccessorySaga(),
    followActionSearchSwatchSaga(),
    followActionSearchPCaga(),
    followActionSearchProduct(),
    followActionSearchRecommendProductSaga(),
    // PAGE
    // --- HOME PAGE
    followActionAddNewHomePage(),
    followActionGetDataHomePage(),
    followActionEditHomePage(),
    // --- SMARTPHONE PAGE
    followActionAddNewSmartphonePage(),
    followActionGetDataSmartphonePage(),
    followActionEditSmartphonePage(),

    // --- LAPTOP PAGE
    followActionGetDataLaptopPage(),
    followActionAddNewLaptopPage(),
    followActionEditLaptopPage(),

    // --- TABLET PAGE
    followActionGetDataTabletPage(),
    followActionAddTabletPage(),
    followActionEditTabletPage(),

    // --- ACCESSORY PAGE
    followActionGetDataAccessoryPage(),
    followActionAddAccessoryPage(),
    followActionEditAccessoryPage(),

    // --- SWATCH PAGE
    followActionGetDataSwatchPage(),
    followActionAddSwatchPage(),
    followActionEditSwatchPage(),

    // --- PC PAGE
    followActionGetDataPCPage(),
    followActionAddPCPage(),
    followActionEditPCPage(),

    // GET DETAIL PRODUCT
    followActionGetDetailProducteSaga(),

    // FILTER PRODUCT
    followActionFilterProduct(),

    // COMMENT
    followActionGetComment(),
    followActionCreateComment(),
    followActionEditComment(),
    followActionDeleteComment(),

    // SHOPPING CART
    followActionGetCart(),
    followActionAddToCart(),
    followActionEditCart(),
    followActionDeleteCart(),
    followActionDeleteAllCart(),

    // HISTORY
    followActionGetHistory(),
    followActionAddHistory(),
    followActionDeleteHistory(),
    followActionGetAllHistory(),
    followActionGetHistorySign(),
    followActionGetHistoryNoSign(),
    followActionSignHistory(),
  ]);
}
