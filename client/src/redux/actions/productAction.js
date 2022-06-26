import { call, put } from "redux-saga/effects";
import { productServices } from "../../services/ProductServices";
import {
  HIDE_LOADING_FILTER,
  SET_ACCESSORY,
  SET_CURRENT_TOTAL_PRODUCT,
  SET_FILTER_PRODUCT,
  SET_LAPTOP,
  SET_PC,
  SET_PRODUCT_SEARCH,
  SET_RECOMMEND_PRODUCT,
  SET_SMARTPHONE,
  SET_SWATCH,
  SET_TABLET,
  SHOW_LOADING_FILTER,
} from "../reducers/types/mainType";
import {
  getDetailProduct,
  handleLoading,
  searchProduct,
  showMess,
} from "./globalAction";

export function* searchSmartphone(action) {
  yield call(() => handleLoading(true));
  yield call(() =>
    searchProduct(productServices.searchProductApi, SET_SMARTPHONE, action)
  );
  yield call(() => handleLoading(false));
}

export function* searchLaptop(action) {
  yield call(() => handleLoading(true));

  yield call(() =>
    searchProduct(productServices.searchProductApi, SET_LAPTOP, action)
  );
  yield call(() => handleLoading(false));
}

export function* searchTablet(action) {
  yield call(() => handleLoading(true));

  yield call(() =>
    searchProduct(productServices.searchProductApi, SET_TABLET, action)
  );

  yield call(() => handleLoading(false));
}

export function* searchAccessory(action) {
  yield call(() => handleLoading(true));

  yield call(() =>
    searchProduct(productServices.searchProductApi, SET_ACCESSORY, action)
  );

  yield call(() => handleLoading(false));
}

export function* searchSwatch(action) {
  yield call(() => handleLoading(true));

  yield call(() =>
    searchProduct(productServices.searchProductApi, SET_SWATCH, action)
  );
  yield call(() => handleLoading(false));
}

export function* searchPc(action) {
  yield call(() => handleLoading(true));

  yield call(() =>
    searchProduct(productServices.searchProductApi, SET_PC, action)
  );

  yield call(() => handleLoading(false));
}

/* SEARCH PRODUCT */
export function* searchPro(action) {
  yield call(() => handleLoading(true));

  yield call(() =>
    searchProduct(productServices.searchProductApi, SET_PRODUCT_SEARCH, action)
  );

  yield call(() => handleLoading(false));
}
/* SEARCH RECOMMEND PRODUCT */
export function* searchRecommendProduct(action) {
  yield call(() =>
    searchProduct(
      productServices.searchRecommendProductApi,
      SET_RECOMMEND_PRODUCT,
      action
    )
  );
}

/* GET DETAIL */
export function* getDetail(action) {
  yield call(() =>
    getDetailProduct(productServices.getProductDetailApi, action)
  );
}

/* FILTER */
export function* filterProduct(action) {
  yield put({
    type: SHOW_LOADING_FILTER,
  });
  try {
    const { data } = yield call(() =>
      productServices.filterProductApi(action.category, action.queryParam)
    );
    // SET FILTER -> FILTER
    yield put({
      type: SET_FILTER_PRODUCT,
      products: data.product,
    });

    // SET CURRENT TOTAL PRODUCT -> PAGINATE
    yield put({
      type: SET_CURRENT_TOTAL_PRODUCT,
      total: data.total,
    });
  } catch (error) {
    console.log(error);
    console.log(error.response?.data);
    yield call(() => showMess(error.response?.data.message, false));
  }
  yield put({
    type: HIDE_LOADING_FILTER,
  });
}
