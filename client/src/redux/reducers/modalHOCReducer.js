import { HIDE_CARD_PRODUCT, OPEN_MODAL_HOC } from "./types/mainType";

const initialState = {
  visible: false,
  ComponentContentModal: <p>Hello</p>,
  title: "",
};

const modalHOCReducer = (state = initialState, action) => {
  switch (action.type) {
    case HIDE_CARD_PRODUCT: {
      return {
        ...state,
        visible: false,
      };
    }

    case OPEN_MODAL_HOC: {
      return {
        ...state,
        visible: true,
        ComponentContentModal: action.ComponentContentModal,
        title: action.title || "",
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default modalHOCReducer;
