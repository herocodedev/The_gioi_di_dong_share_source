import { call, put } from "redux-saga/effects";
import { managerProduct } from "../../services/Admin/ManagerProduct";
import { managerUser } from "../../services/Admin/ManagerUser";
import { pageServices } from "../../services/pageServices";
import {
  SET_ACCESSORY,
  SET_ALL_USER,
  SET_LAPTOP,
  SET_PC,
  SET_QUANTITY,
  SET_SMARTPHONE,
  SET_SWATCH,
  SET_TABLET,
} from "../reducers/types/mainType";
import { GET_ALL_USER_SAGA } from "../sagas/types/main";
import {
  addNewPage,
  addProduct,
  deleteProduct,
  editPage,
  editProduct,
  getProduct,
  handleLoading,
  showMess,
} from "./globalAction";

export function* getAlluser(action) {
  yield call(() => handleLoading(true));

  try {
    const { data } = yield call(() => managerUser.getAllUserApi());
    yield put({
      type: SET_ALL_USER,
      users: data.users,
    });
  } catch (error) {
    console.log(error);
    console.log(error.response?.data);
    yield call(() => showMess(error.response?.data.message, false));
  }
  yield call(() => handleLoading(false));
}

export function* deleteUser(action) {
  yield call(() => handleLoading(true));

  try {
    const { data } = yield call(() => managerUser.deleteUserApi(action.id));
    // Show mess success
    yield call(() => showMess(data.message, true));

    // Re-render all user
    yield put({
      type: GET_ALL_USER_SAGA,
    });
  } catch (error) {
    console.log(error);
    console.log(error.response?.data);
    yield call(() => showMess(error.response?.data.message, false));
  }
  yield call(() => handleLoading(false));
}

export function* getQuantity(action) {
  yield call(() => handleLoading(true));

  try {
    const { data } = yield call(() => managerProduct.getQuantityApi());
    yield put({
      type: SET_QUANTITY,
      result: data.result,
    });
  } catch (error) {
    console.log(error);
    console.log(error.response?.data);
    yield call(() => showMess(error.response?.data.message, false));
  }
  yield call(() => handleLoading(false));
}

export function* getSmartphone(action) {
  // getProduct (type,Func: callbackAPI,action)
  yield call(() =>
    getProduct(SET_SMARTPHONE, managerProduct.getAllSmartphoneApi, action)
  );
}

export function* getTablet(action) {
  // getProduct (type,Func: callbackAPI,action)
  yield call(() =>
    getProduct(SET_TABLET, managerProduct.getAllTabletApi, action)
  );
}

export function* getLaptop(action) {
  // getProduct (type,Func: callbackAPI,action)
  yield call(() =>
    getProduct(SET_LAPTOP, managerProduct.getAllLaptopApi, action)
  );
}

export function* getAccessory(action) {
  // getProduct (type,Func: callbackAPI,action)
  yield call(() =>
    getProduct(SET_ACCESSORY, managerProduct.getAllAccessoryApi, action)
  );
}

export function* getSwatch(action) {
  yield call(() =>
    getProduct(SET_SWATCH, managerProduct.getAllSwatchApi, action)
  );
}

export function* getPC(action) {
  yield call(() => getProduct(SET_PC, managerProduct.getAllPCApi, action));
}

/* SMART PHONE */
export function* addSmartphone(action) {
  yield call(() => addProduct(managerProduct.addSmartPhoneApi, action));
}

export function* deleteSmartphone(action) {
  yield call(() => deleteProduct(managerProduct.deleteSmartPhoneApi, action));
}

export function* editSmartphone(action) {
  yield call(() => editProduct(managerProduct.editSmartPhoneApi, action));
}

/* LAPTOP */
export function* addLaptop(action) {
  yield call(() => addProduct(managerProduct.addLaptopApi, action));
}

export function* deleteLaptop(action) {
  yield call(() => deleteProduct(managerProduct.deleteLaptopApi, action));
}

export function* editLaptop(action) {
  yield call(() => editProduct(managerProduct.editLaptopApi, action));
}

/* TABLET */
export function* addTablet(action) {
  yield call(() => addProduct(managerProduct.addTabletApi, action));
}

export function* deleteTablet(action) {
  yield call(() => deleteProduct(managerProduct.deleteTabletApi, action));
}

export function* editTablet(action) {
  yield call(() => editProduct(managerProduct.editTabletApi, action));
}

/* ACCESSORY */
export function* addAccessory(action) {
  yield call(() => addProduct(managerProduct.addAccessoryApi, action));
}

export function* deleteAccessory(action) {
  yield call(() => deleteProduct(managerProduct.deleteAccessorytApi, action));
}

export function* editAccessory(action) {
  yield call(() => editProduct(managerProduct.editAccessoryApi, action));
}

/* SWATCH */
export function* addSwatch(action) {
  yield call(() => addProduct(managerProduct.addSwatchApi, action));
}

export function* deleteSwtach(action) {
  yield call(() => deleteProduct(managerProduct.deleteSwatchApi, action));
}

export function* editSwatch(action) {
  yield call(() => editProduct(managerProduct.editSwatchApi, action));
}

/* PC */
export function* addPC(action) {
  yield call(() => addProduct(managerProduct.addPCApi, action));
}

export function* deletePC(action) {
  yield call(() => deleteProduct(managerProduct.deletePCApi, action));
}

export function* editPC(action) {
  yield call(() => editProduct(managerProduct.editPCApi, action));
}

/* HOME PAGE */
export function* addNewHomePage(action) {
  yield call(() => addNewPage("homepage", pageServices.addDataPageApi, action));
}

export function* editHomePage(action) {
  yield call(() => editPage("homepage", pageServices.editDataPageApi, action));
}

/* SMARTPHONE PAGE */
export function* addSmartphonePage(action) {
  yield call(() =>
    addNewPage("smartphonePage", pageServices.addDataPageApi, action)
  );
}

export function* editSmartphonePage(action) {
  yield call(() =>
    editPage("smartphonePage", pageServices.editDataPageApi, action)
  );
}

/* LAPTOP PAGE */
export function* addLaptopPage(action) {
  yield call(() =>
    addNewPage("laptopPage", pageServices.addDataPageApi, action)
  );
}

export function* editLaptopPage(action) {
  yield call(() =>
    editPage("laptopPage", pageServices.editDataPageApi, action)
  );
}

/* TABLET PAGE */
export function* addTabletPage(action) {
  yield call(() =>
    addNewPage("tabletPage", pageServices.addDataPageApi, action)
  );
}

export function* editTabletPage(action) {
  yield call(() =>
    editPage("tabletPage", pageServices.editDataPageApi, action)
  );
}

/* ACCESSORY PAGE */
export function* addAccessoryPage(action) {
  yield call(() =>
    addNewPage("accessoryPage", pageServices.addDataPageApi, action)
  );
}

export function* editAccessoryPage(action) {
  yield call(() =>
    editPage("accessoryPage", pageServices.editDataPageApi, action)
  );
}

/* SWATCH PAGE */
export function* addSwatchPage(action) {
  yield call(() =>
    addNewPage("swatchPage", pageServices.addDataPageApi, action)
  );
}

export function* editSwatchPage(action) {
  yield call(() =>
    editPage("swatchPage", pageServices.editDataPageApi, action)
  );
}

/* PC PAGE */
export function* addPCPage(action) {
  yield call(() => addNewPage("pcPage", pageServices.addDataPageApi, action));
}

export function* editPCPage(action) {
  yield call(() => editPage("pcPage", pageServices.editDataPageApi, action));
}
