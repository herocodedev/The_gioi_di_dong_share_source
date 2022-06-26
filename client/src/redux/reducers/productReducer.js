const {
  SET_QUANTITY,
  SET_SMARTPHONE,
  SET_TABLET,
  SET_LAPTOP,
  SET_ACCESSORY,
  SET_SWATCH,
  SET_PC,
  SET_PRODUCT_DETAIL,
  SET_RECOMMEND_PRODUCT,
  SET_PRODUCT_SEARCH,
  SET_CURRENT_TOTAL_PRODUCT,
} = require("./types/mainType");

const initialState = {
  totalQuantity: [],
  smartphone: [],
  laptop: [],
  tablet: [],
  accessory: [],
  swatch: [],
  pc: [],
  currentProducts: [],
  productDetail: {},
  productSearch: [],
  filterProducts: [],
  currentTotalProduct: 0,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUANTITY: {
      return {
        ...state,
        totalQuantity: action.result,
      };
    }

    case SET_CURRENT_TOTAL_PRODUCT: {
      return {
        ...state,
        currentTotalProduct: action.total,
      };
    }
    case SET_SMARTPHONE: {
      return {
        ...state,
        smartphone: action.products,
        currentTotalProduct: action.total,
      };
    }
    case SET_TABLET: {
      return {
        ...state,
        tablet: action.products,
        currentTotalProduct: action.total,
      };
    }

    case SET_LAPTOP: {
      return {
        ...state,
        laptop: action.products,
        currentTotalProduct: action.total,
      };
    }

    case SET_ACCESSORY: {
      return {
        ...state,
        accessory: action.products,
        currentTotalProduct: action.total,
      };
    }

    case SET_SWATCH: {
      return {
        ...state,
        swatch: action.products,
        currentTotalProduct: action.total,
      };
    }
    case SET_PC: {
      return {
        ...state,
        pc: action.products,
        currentTotalProduct: action.total,
      };
    }

    case SET_RECOMMEND_PRODUCT: {
      return {
        ...state,
        currentProducts: action.products,
      };
    }

    case SET_PRODUCT_DETAIL: {
      return {
        ...state,
        productDetail: action.product,
      };
    }

    case SET_PRODUCT_SEARCH: {
      return {
        ...state,
        productSearch: action.products,
        currentTotalProduct: action.total,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};

export default productReducer;
