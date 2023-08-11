import { FETCH_FAILURE, FETCH_SUCCESS } from "../types";

const initialState = {
  data: null,
  error: null,
};

const fetchDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: null,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default fetchDataReducer;