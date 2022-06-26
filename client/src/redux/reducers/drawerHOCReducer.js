import { HIDE_DRAWER_HOC, OPEN_DRAWER_HOC } from "./types/mainType";

const initialState = {
  open: false,
  ComponentContent: <h1>Heeloo</h1>,
};

const drawerHOCReducer = (state = initialState, action) => {
  switch (action.type) {
    case HIDE_DRAWER_HOC: {
      return {
        ...state,
        open: false,
      };
    }
    case OPEN_DRAWER_HOC: {
      return {
        ...state,
        open: true,
        ComponentContent: action.ComponentContent,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default drawerHOCReducer;
