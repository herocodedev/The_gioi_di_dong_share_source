import {
  CLEAR_FILTER,
  REMOVE_FILTER,
  SET_FILTER,
  SET_NEW_FILTER,
} from "./types/filterType";
import { SET_FILTER_PRODUCT } from "./types/mainType";

const initialState = {
  filters: [],
  filterProducts: [],
  touchedFilter: false,
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER: {
      let newFilter = [...state.filters];
      // Get idFilter price old
      let idFilterPrice = "";
      if (action.filter.field === "price") {
        newFilter.forEach((item, index) => {
          if (item.field === "price") idFilterPrice = item.idFilter;
        });
      }

      // Toggle condition
      const isChecked = newFilter.findIndex(
        (x, y) => x.idFilter === action.filter.idFilter
      );
      if (isChecked === -1) newFilter.push(action.filter);
      else {
        newFilter = newFilter.filter(
          (x, y) => x.idFilter !== action.filter.idFilter
        );
      }

      // Field price only choose one
      if (idFilterPrice) {
        newFilter = newFilter.filter((x, y) => x.idFilter !== idFilterPrice);
      }

      return {
        ...state,
        filters: newFilter,
      };
    }
    case REMOVE_FILTER: {
      return {
        ...state,
        filters: state.filters.filter(
          (x, y) => x.idFilter !== action.filter.idFilter
        ),
      };
    }

    case SET_NEW_FILTER: {
      return {
        ...state,
        filters: action.filters,
      };
    }

    case CLEAR_FILTER: {
      return {
        ...state,
        filters: [],
        filterProducts: [],
        touchedFilter: false,
      };
    }

    case SET_FILTER_PRODUCT: {
      return {
        ...state,
        filterProducts: action.products,
        touchedFilter: true,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default filterReducer;
