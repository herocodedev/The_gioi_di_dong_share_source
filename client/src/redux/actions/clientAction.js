import { call, put } from "redux-saga/effects";
import { commentServices } from "../../services/commentServices";
import { pageServices } from "../../services/pageServices";
import { productServices } from "../../services/ProductServices";
import {
  HIDE_LOADING_HISTORY,
  HIDE_LOADING_SHOPPING_CART,
  SET_COMMENT,
  SET_DATA_ACCESSORY_PAGE,
  SET_DATA_HOME_PAGE,
  SET_DATA_LAPTOP_PAGE,
  SET_DATA_PC_PAGE,
  SET_DATA_SMARTPHONE_PAGE,
  SET_DATA_SWATCH_PAGE,
  SET_DATA_TABLET_PAGE,
  SET_HISTORY,
  SET_SHOPPING_CART,
  SHOW_LOADING_HISTORY,
  SHOW_LOADING_SHOPPING_CART,
} from "../reducers/types/mainType";
import {
  DELETE_ALL_CART_SAGA,
  GET_CART_SAGA,
  GET_COMMENT_SAGA,
  GET_HISTORY_SAGA,
} from "../sagas/types/main";
import {
  getDataPage,
  getHistoryAdmin,
  handleLoading,
  showMess,
} from "./globalAction";

/* PAGE */
export function* getDataHomePage(action) {
  yield call(() =>
    getDataPage(
      "homepage",
      pageServices.getDataPageApi,
      SET_DATA_HOME_PAGE,
      action
    )
  );
}

export function* getSmartphonePage(action) {
  yield call(() =>
    getDataPage(
      "smartphonePage",
      pageServices.getDataPageApi,
      SET_DATA_SMARTPHONE_PAGE,
      action
    )
  );
}

export function* getLaptopPage(action) {
  yield call(() =>
    getDataPage(
      "laptopPage",
      pageServices.getDataPageApi,
      SET_DATA_LAPTOP_PAGE,
      action
    )
  );
}

export function* getTabletPage(action) {
  yield call(() =>
    getDataPage(
      "tabletPage",
      pageServices.getDataPageApi,
      SET_DATA_TABLET_PAGE,
      action
    )
  );
}

export function* getAccessoryPage(action) {
  yield call(() =>
    getDataPage(
      "accessoryPage",
      pageServices.getDataPageApi,
      SET_DATA_ACCESSORY_PAGE,
      action
    )
  );
}

export function* getSwatchPage(action) {
  yield call(() =>
    getDataPage(
      "swatchPage",
      pageServices.getDataPageApi,
      SET_DATA_SWATCH_PAGE,
      action
    )
  );
}

export function* getPCPage(action) {
  yield call(() =>
    getDataPage("pcPage", pageServices.getDataPageApi, SET_DATA_PC_PAGE, action)
  );
}

/* COMMENT */

export function* getComment(action) {
  try {
    const { data } = yield call(() =>
      commentServices.getCommentApi(action.data)
    );

    yield put({
      type: SET_COMMENT,
      data,
    });
  } catch (error) {
    console.log(error);
    console.log(error.response?.data);
    yield call(() => showMess(error.response?.data.message, false));
  }
}

export function* createComment(action) {
  yield call(() => handleLoading(true));
  try {
    const { data } = yield call(() =>
      commentServices.postCommentApi(action.data)
    );

    yield call(() => showMess("Đánh giá thành công", true));

    yield put({
      type: GET_COMMENT_SAGA,
      data: action.data,
    });
  } catch (error) {
    console.log(error);
    console.log(error.response?.data);
    yield call(() => showMess(error.response?.data.message, false));
  }
  yield call(() => handleLoading(false));
}

export function* editComment(action) {
  yield call(() => handleLoading(true));
  try {
    const { data } = yield call(() =>
      commentServices.editCommentApi(action.data)
    );
    yield call(() => showMess("Cập nhật thành công", true));

    yield put({
      type: GET_COMMENT_SAGA,
      data: action.data,
    });
  } catch (error) {
    console.log(error);
    console.log(error.response?.data);
    yield call(() => showMess(error.response?.data.message, false));
  }
  yield call(() => handleLoading(false));
}

export function* deleteComment(action) {
  yield call(() => handleLoading(true));
  try {
    const { data } = yield call(() =>
      commentServices.deleteCommentApi(action.data)
    );

    yield call(() => showMess("Xóa thành công", true));

    yield put({
      type: GET_COMMENT_SAGA,
      data: action.data,
    });
  } catch (error) {
    console.log(error);
    console.log(error.response?.data);
    yield call(() => showMess(error.response?.data.message, false));
  }
  yield call(() => handleLoading(false));
}

/* CART */
export function* getCart(action) {
  yield put({
    type: SHOW_LOADING_SHOPPING_CART,
  });
  try {
    const { data } = yield call(() =>
      productServices.getCartApi(action.idUser)
    );
    yield put({
      type: SET_SHOPPING_CART,
      data: data.carts,
      total: data.total,
    });
  } catch (error) {
    console.log(error);
    console.log(error.response?.data);
    yield call(() => showMess(error.response?.data.message, false));
  }
  yield put({
    type: HIDE_LOADING_SHOPPING_CART,
  });
}

export function* addToCart(action) {
  yield call(() => handleLoading(true));
  try {
    const { data } = yield call(() =>
      productServices.addToCartApi(action.data)
    );

    yield call(() => showMess("Thêm vào giõ hàng thành công", true));
    yield put({
      type: GET_CART_SAGA,
      idUser: action.data.idUser,
    });
  } catch (error) {
    console.log(error);
    console.log(error.response?.data);
    yield call(() => showMess(error.response?.data.message, false));
  }
  yield call(() => handleLoading(false));
}

export function* editCart(action) {
  yield call(() => handleLoading(true));
  try {
    const { data } = yield call(() => productServices.editCartApi(action.data));
    yield put({
      type: GET_CART_SAGA,
      idUser: action.data.idUser,
    });
  } catch (error) {
    console.log(error);
    console.log(error.response?.data);
    yield call(() => showMess(error.response?.data.message, false));
  }
  yield call(() => handleLoading(false));
}

export function* deleteCart(action) {
  yield call(() => handleLoading(true));
  try {
    const { data } = yield call(() =>
      productServices.deleteCartApi(action.data)
    );
    yield put({
      type: GET_CART_SAGA,
      idUser: action.data.idUser,
    });
  } catch (error) {
    console.log(error);
    console.log(error.response?.data);
    yield call(() => showMess(error.response?.data.message, false));
  }
  yield call(() => handleLoading(false));
}

export function* deleteAllCart(action) {
  yield call(() => handleLoading(true));
  try {
    yield call(() => productServices.deleteAllCartApi(action.idUser));
  } catch (error) {
    console.log(error);
    console.log(error.response?.data);
    yield call(() => showMess(error.response?.data.message, false));
  }
  yield call(() => handleLoading(false));
}

/* HISTORY */
export function* getHistory(action) {
  yield put({
    type: SHOW_LOADING_HISTORY,
  });
  try {
    const { data } = yield call(() =>
      productServices.getHistoryApi(action.idUser, action.page)
    );

    yield put({
      type: SET_HISTORY,
      data: data.history,
      total: data.total,
    });
  } catch (error) {
    console.log(error);
    console.log(error.response?.data);
    yield call(() => showMess(error.response?.data.message, false));
  }
  yield put({
    type: HIDE_LOADING_HISTORY,
  });
}

export function* getAllHistory(action) {
  yield call(() =>
    getHistoryAdmin(productServices.getAllHistoryApi, action.page)
  );
}

export function* getHistorySign(action) {
  yield call(() =>
    getHistoryAdmin(productServices.getHistorySignApi, action.page)
  );
}

export function* getHistoryNoSign(action) {
  yield call(() =>
    getHistoryAdmin(productServices.getHistoryNoSignApi, action.page)
  );
}

export function* addHistory(action) {
  yield call(() => handleLoading(true));
  try {
    const { data } = yield call(() =>
      productServices.addHistoryApi(action.data)
    );
    // CLEAR CART
    yield put({
      type: DELETE_ALL_CART_SAGA,
      idUser: action.data.idUser,
    });

    // Show Mess
    yield call(() => showMess("Đặt hàng thành công", true));

    window.location.reload();
  } catch (error) {
    console.log(error);
    console.log(error.response?.data);
    yield call(() => showMess(error.response?.data.message, false));
  }
  yield call(() => handleLoading(false));
}

export function* deleteHistory(action) {
  yield call(() => handleLoading(true));
  try {
    const { data } = yield call(() =>
      productServices.deleteHistoryApi(action.idHistory)
    );
    yield call(() => showMess("Hủy đơn hàng thành công", true));
    yield put({
      type: GET_HISTORY_SAGA,
      idUser: action.idUser,
      page: action.page,
    });
  } catch (error) {
    console.log(error);
    console.log(error.response?.data);
    yield call(() => showMess(error.response?.data.message, false));
  }
  yield call(() => handleLoading(false));
}

export function* signHistory(action) {
  yield call(() => handleLoading(true));
  try {
    const { data } = yield call(() =>
      productServices.signHistoryApi(action.idHistory)
    );

    yield call(() => showMess("Xác nhận đơn hàng thành công", true));
    yield put({
      type: action.actionName,
      page: action.page,
    });
  } catch (error) {
    console.log(error);
    console.log(error.response?.data);
    yield call(() => showMess(error.response?.data.message, false));
  }
  yield call(() => handleLoading(false));
}
