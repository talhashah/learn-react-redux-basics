import { default as _ } from "lodash-uuid";
import * as actionTypes from "../action";

// Initial State
const initialState = {
  results: [],
};

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({
          id: _.uuid(),
          value: action.payload,
        }),
      };
    case actionTypes.DELETE_RESULT:
      let newArray = state.results.filter((result, index) =>
        index === action.resultElIndex ? false : true
      );
      return {
        ...state,
        results: newArray,
      };
    default:
      // no matching action
      return state;
  }
};

export default resultReducer;
