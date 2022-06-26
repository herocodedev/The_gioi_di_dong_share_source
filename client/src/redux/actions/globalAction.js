import { all, call, put, select } from "redux-saga/effects";
import { globalService } from "../../services/globalServices";
import { SET_NEW_FILTER } from "../reducers/types/filterType";
import {
  HIDE_LOADING,
  SET_HISTORY_ADMIN,
  SET_PRODUCT_DETAIL,
  SHOW_ALERT,
  SHOW_LOADING,
} from "../reducers/types/mainType";
import { FILTER_PRODUCT_SAGA } from "../sagas/types/main";

export function* showMess(mess, success) {
  yield put({
    type: SHOW_ALERT,
    success,
    mess,
  });
}

export function* handleLoading(show) {
  if (show)
    yield put({
      type: SHOW_LOADING,
    });
  else
    yield put({
      type: HIDE_LOADING,
    });
}

export function* getProduct(type, callbackApi, action) {
  yield call(() => handleLoading(true));
  try {
    const { data } = yield call(() => callbackApi(action.page));

    yield put({
      type,
      products: data.product,
      total: data.total,
    });
  } catch (error) {
    console.log(error);
    console.log(error.response?.data);
    yield call(() => showMess(error.response?.data.message, false));
  }
  yield call(() => handleLoading(false));
}

export function* addProduct(callbackApi, action) {
  yield call(() => handleLoading(true));

  try {
    // Upload file to cloudinary
    const { images } = action.values;
    const urls = [...images];
    for (let i = 0; i < images.length; i++) {
      // Upload file
      const response = yield all(
        images[i].imgs.map((item, index) =>
          call(() => globalService.uploadFileApi(item))
        )
      ); // return array reponse [{..}{...}...]

      // Transform array imgs type file -> array type link
      let arrUrls = [];
      for (let j = 0; j < response.length; j++) {
        let obj = {};
        obj.url = response[j].data.url;
        obj.public_id = response[j].data.public_id;
        arrUrls.push(obj);
      }
      urls[i].imgs = arrUrls;
    }

    // Add product
    let newValues = { ...action.values };

    newValues = {
      ...newValues,
      images: urls,
    };
    const { data } = yield call(() => callbackApi(newValues));

    yield call(() => showMess("Thêm sản phẩm thành công", true));
    window.location.reload();
  } catch (error) {
    console.log(error);
    console.log(error.response?.data);
    yield call(() => showMess(error.response?.data.message, false));
  }
  yield call(() => handleLoading(false));
}

export function* editProduct(callbackApi, action) {
  yield call(() => handleLoading(true));
  try {
    // Upload file to cloudinary
    const { images, oldImgs } = action.values;
    const urls = [...images];

    // Remove old img on cloudinary
    for (let i = 0; i < oldImgs.length; i++) {
      for (let j = 0; j < oldImgs[i].imgs.length; j++) {
        const objData = oldImgs[i].imgs;
        yield call(() => {
          if (objData[j].public_id) {
            return globalService.removeImgApi(objData[j].public_id);
          }
        });
      }
    }

    for (let i = 0; i < images.length; i++) {
      // Upload file
      const response = yield all(
        images[i].imgs.map((item, index) =>
          call(() => globalService.uploadFileApi(item))
        )
      ); // return array reponse [{..}{...}...]

      // Transform array imgs type file -> array type link
      let arrUrls = [];
      for (let j = 0; j < response.length; j++) {
        let obj = {};
        obj.url = response[j].data.url;
        obj.public_id = response[j].data.public_id;
        arrUrls.push(obj);
      }
      urls[i].imgs = arrUrls;
    }

    // Edit product
    let newValues = { ...action.values };

    newValues = {
      ...newValues,
      images: urls,
    };
    const { data } = yield call(() => callbackApi(newValues));

    yield call(() => showMess("Cập nhật phẩm thành công", true));
    window.location.reload();
  } catch (error) {
    console.log(error);
    console.log(error.response?.data);
    yield call(() => showMess(error.response?.data.message, false));
  }
  yield call(() => handleLoading(false));
}

export function* deleteProduct(callbackApi, action) {
  yield call(() => handleLoading(true));
  try {
    // Remove Data on database
    const { data } = yield call(() => callbackApi(action.id));

    // Remove img on cloudinary
    for (let i = 0; i < data.product.images.length; i++) {
      for (let j = 0; j < data.product.images[i].imgs.length; j++) {
        const objData = data.product.images[i].imgs;
        yield call(() => {
          if (objData[j].public_id) {
            return globalService.removeImgApi(objData[j].public_id);
          }
        });
      }
    }

    yield call(() => showMess("Xóa sản phẩm thành công", true));
    window.location.reload();
  } catch (error) {
    console.log(error);
    console.log(error.response?.data);
    yield call(() => showMess(error.response?.data.message, false));
  }
  yield call(() => handleLoading(false));
}

export function* searchProduct(callbackApi, type, action) {
  try {
    const { data } = yield call(() =>
      callbackApi(action.category, action.keyword, action.queryParam)
    );

    // SET DATA
    yield put({
      type: type,
      products: data.product,
    });

    // NAVIGATE
    if (action.navigate) {
      const { navigate } = yield select((state) => state.global);
      navigate(action.navigate);
    }
  } catch (error) {
    console.log(error);
    console.log(error.response?.data);
    yield call(() => showMess(error.response?.data.message, false));
  }
}

export function* getDetailProduct(callbackApi, action) {
  // yield call(() => handleLoading(true));
  try {
    const { data } = yield call(() => callbackApi(action.category, action._id));
    yield put({
      type: SET_PRODUCT_DETAIL,
      product: data.product,
    });
  } catch (error) {
    console.log(error);
    console.log(error.response?.data);
    yield call(() => showMess(error.response?.data.message, false));
  }
  // yield call(() => handleLoading(false));
}

/* PAGE */
export function* getDataPage(urlApi, callbackApi, type, action) {
  try {
    const { data } = yield call(() => callbackApi(urlApi));

    // HANDLE FILTER PRODUCT WHEN URL HAD FILTERED
    if (action.category && action.queryParam && action.filters) {
      yield put({
        type: FILTER_PRODUCT_SAGA,
        category: action.category,
        queryParam: action.queryParam,
      });

      yield put({
        type: SET_NEW_FILTER,
        filters: action.filters,
      });
    }

    // HANDLE SET DATA
    yield put({
      type,
      result: data.result,
    });
  } catch (error) {
    console.log(error);
    console.log(error.response?.data);
    yield call(() => showMess(error.response?.data.message, false));
  }
}

export function* addNewPage(urlApi, callbackApi, action) {
  yield call(() => handleLoading(true));
  try {
    // Map obj data
    for (let key in action.values) {
      const item = action.values[key];
      // Handle upload file to cloudinary
      if (typeof item !== "string") {
        // Solve case upload by file
        if (
          item[0] &&
          typeof item[0] !== "string" &&
          item[0].type?.includes("image")
        ) {
          // img type file
          let response = yield all(
            item.map((file, index) =>
              call(() => globalService.uploadFileApi(file))
            )
          );
          // Create new data arr and updata values
          let arr = [];
          response.forEach((x, y) => {
            let obj = {};
            obj.public_id = x.data.public_id;
            obj.url = x.data.url;
            arr.push(obj);
          });
          action.values[key] = arr;
        } else {
          let arr = [];
          // img type object (when choose product)
          if (typeof item[0] !== "string") {
            item.forEach((x, y) => {
              arr.push(x);
            });
          } else {
            // img type string
            item.forEach((x, y) => {
              let obj = {};
              obj.public_id = "";
              obj.url = x;
              arr.push(obj);
            });
          }
          action.values[key] = arr;
        }
      }
    }

    //Call api save data
    const { data } = yield call(() => callbackApi(urlApi, action.values));

    yield call(() => showMess("Tạo trang mới thành công", true));
  } catch (error) {
    console.log(error);
    console.log(error.response?.data);
    yield call(() => showMess(error.response?.data.message, false));
  }
  yield call(() => handleLoading(false));
}

export function* editPage(urlApi, callbackApi, action) {
  yield call(() => handleLoading(true));

  try {
    for (let key in action.values) {
      const item = action.values[key];
      if (typeof item !== "string") {
        // Solve case upload by file
        if (
          item[0] &&
          typeof item[0] !== "string" &&
          item[0].type?.includes("image")
        ) {
          // img type file
          let response = yield all(
            item.map((file, index) =>
              call(() => globalService.uploadFileApi(file))
            )
          );
          // Create new data arr and updata values
          let arr = [];
          response.forEach((x, y) => {
            let obj = {};
            obj.public_id = x.data.public_id;
            obj.url = x.data.url;
            arr.push(obj);
          });
          action.values[key] = arr;
        } else {
          let arr = [];
          // img type object (when choose product)
          if (typeof item[0] !== "string") {
            item.forEach((x, y) => {
              arr.push(x);
            });
          } else {
            // img type string
            item.forEach((x, y) => {
              let obj = {};
              obj.public_id = "";
              obj.url = x;
              arr.push(obj);
            });
          }
          action.values[key] = arr;
        }
      }
    }
    //Call api save data
    const { data } = yield call(() => callbackApi(urlApi, action.values));

    yield call(() => showMess("Cập nhật trang thành công", true));
    window.location.reload();
  } catch (error) {
    console.log(error);
    console.log(error.response?.data);
    yield call(() => showMess(error.response?.data.message, false));
  }
  yield call(() => handleLoading(false));
}

export function* getHistoryAdmin(callbackApi, page) {
  yield call(() => handleLoading(true));
  try {
    const { data } = yield call(() => callbackApi(page));

    yield put({
      type: SET_HISTORY_ADMIN,
      data: data.histories,
      total: data.total,
    });
  } catch (error) {
    console.log(error);
    console.log(error.response?.data);
    yield call(() => showMess(error.response?.data.message, false));
  }
  yield call(() => handleLoading(false));
}
