import {
  SET_DATA_ACCESSORY_PAGE,
  SET_DATA_HOME_PAGE,
  SET_DATA_LAPTOP_PAGE,
  SET_DATA_PC_PAGE,
  SET_DATA_SMARTPHONE_PAGE,
  SET_DATA_SWATCH_PAGE,
  SET_DATA_TABLET_PAGE,
} from "./types/mainType";

const initialState = {
  dataHomePage: [],
  dataSmartphonePage: [],
  dataLaptopPage: [],
  dataTabletPage: [],
  dataAccessoryPage: [],
  dataSwatchPage: [],
  dataPCPage: [],
};

const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_HOME_PAGE: {
      return {
        ...state,
        dataHomePage: action.result,
      };
    }
    case SET_DATA_SMARTPHONE_PAGE: {
      return {
        ...state,
        dataSmartphonePage: action.result,
      };
    }
    case SET_DATA_LAPTOP_PAGE: {
      return {
        ...state,
        dataLaptopPage: action.result,
      };
    }

    case SET_DATA_TABLET_PAGE: {
      return {
        ...state,
        dataTabletPage: action.result,
      };
    }

    case SET_DATA_ACCESSORY_PAGE: {
      return {
        ...state,
        dataAccessoryPage: action.result,
      };
    }

    case SET_DATA_SWATCH_PAGE: {
      return {
        ...state,
        dataSwatchPage: action.result,
      };
    }

    case SET_DATA_PC_PAGE: {
      return {
        ...state,
        dataPCPage: action.result,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default pageReducer;
