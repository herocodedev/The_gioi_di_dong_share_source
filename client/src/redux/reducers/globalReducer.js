const {
  SHOW_LOADING,
  HIDE_LOADING,
  ADD_NAVIGATE,
  SHOW_ALERT,
  HIDE_ALERT,
  CHECK_LOGIN,
  SET_LOADING_SKELETON,
  HIDE_LOADING_SKELETON,
  SET_PRODUCT_CHOOSE,
  HANDLE_SEARCH_PRODUCT_RECOMMEND,
  SET_COMMENT,
  SET_SHOPPING_CART,
  SHOW_LOADING_SHOPPING_CART,
  HIDE_LOADING_SHOPPING_CART,
  SHOW_LOADING_HISTORY,
  HIDE_LOADING_HISTORY,
  SET_HISTORY,
  SET_HISTORY_ADMIN,
  SHOW_LOADING_FILTER,
  HIDE_LOADING_FILTER,
} = require("./types/mainType");

const initialState = {
  loading: false,
  loadingFilter: false,
  loadingShoppingCart: false,
  loadingHistory: false,
  navigate: null,
  statusAlert: {
    open: false,
    mess: "",
    success: false,
  },
  isLogin: null,
  loadingSkeleton: false,
  productChoosed: {
    productSales: [],
    productEvents: [],
    productTrends: [],
    productRecommends: [],
    productSmartphonePage: [],
    productLaptopEvents: [],
    productLaptopGamings: [],
    productLaptopMacs: [],
    productLaptopOffices: [],
    productLaptopCodes: [],
    productLaptopThins: [],
    productLaptopLuxurious: [],
    productTabletPage: [],
    productAccessoryEvents: [],
    productAppleAccessorys: [],
    productCharingCables: [],
    productBackupChargers: [],
    productAccessoryGamings: [],
    productSwatchEvents: [],
    productSwatchs: [],
    productPCPage: [],
  },

  recommendProduct: [],
  isShowBoxRecommend: true,
  comments: {},
  shoppingCarts: [],
  quantityShoppingCart: 0,
  history: [],
  quantityHistory: 0,
  historyAdmin: [],
  quantityHistoryAdmin: 0,
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case HIDE_LOADING: {
      return {
        ...state,
        loading: false,
      };
    }

    case SHOW_LOADING_FILTER: {
      return {
        ...state,
        loadingFilter: true,
      };
    }

    case HIDE_LOADING_FILTER: {
      return {
        ...state,
        loadingFilter: false,
      };
    }

    case SHOW_LOADING_HISTORY: {
      return {
        ...state,
        loadingHistory: true,
      };
    }

    case HIDE_LOADING_HISTORY: {
      return {
        ...state,
        loadingHistory: false,
      };
    }

    case SHOW_LOADING_SHOPPING_CART: {
      return {
        ...state,
        loadingShoppingCart: true,
      };
    }

    case HIDE_LOADING_SHOPPING_CART: {
      return {
        ...state,
        loadingShoppingCart: false,
      };
    }

    case ADD_NAVIGATE: {
      return {
        ...state,
        navigate: action.navigate,
      };
    }

    case SHOW_ALERT: {
      return {
        ...state,
        statusAlert: {
          open: true,
          mess: action.mess,
          success: action.success,
        },
      };
    }

    case HIDE_ALERT: {
      return {
        ...state,
        statusAlert: {
          ...state.statusAlert,
          open: false,
        },
      };
    }

    case CHECK_LOGIN: {
      return {
        ...state,
        isLogin: action.isLogin,
      };
    }

    case SET_LOADING_SKELETON: {
      return {
        ...state,
        loadingSkeleton: true,
      };
    }
    case HIDE_LOADING_SKELETON: {
      return {
        ...state,
        loadingSkeleton: false,
      };
    }

    case SET_PRODUCT_CHOOSE: {
      return {
        ...state,
        productChoosed: {
          ...state.productChoosed,
          [action.field]: [...action.products],
        },
      };
    }

    case HANDLE_SEARCH_PRODUCT_RECOMMEND: {
      // let isShow = action.products.length > 0 ? true : false;
      return {
        ...state,
        isShowBoxRecommend: true,
        recommendProduct: action.products,
      };
    }

    case SET_COMMENT: {
      return {
        ...state,
        comments: action.data,
      };
    }

    case SET_SHOPPING_CART: {
      return {
        ...state,
        shoppingCarts: action.data,
        quantityShoppingCart: action.total,
      };
    }

    case SET_HISTORY: {
      return {
        ...state,
        history: action.data,
        quantityHistory: action.total,
      };
    }

    case SET_HISTORY_ADMIN: {
      return {
        ...state,
        historyAdmin: action.data,
        quantityHistoryAdmin: action.total,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default globalReducer;
