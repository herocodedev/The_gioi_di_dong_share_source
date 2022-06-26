import { SEARCH_USER, SET_ALL_USER, SET_USER } from "./types/mainType";

const initialState = {
  user: {},
  users: [],
  currentUsers: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return { ...state, user: action.user };
    }
    case SET_ALL_USER: {
      return { ...state, users: action.users, currentUsers: action.users };
    }
    case SEARCH_USER: {
      return { ...state, currentUsers: action.users };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default userReducer;
