import { default as _ } from "lodash-uuid";
import * as actionTypes from "./action";

// Initial State
const initialState = {
  counter: 0,
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      const newState = Object.assign({}, state);
      newState.counter = state.counter + 1;
      return newState;
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.value,
      };
    case actionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.value,
      };
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({
          id: _.uuid(),
          value: state.counter,
        }),
      };
    case actionTypes.DELETE_RESULT:
      //   let index = 0;
      //   let newArray = [...state.results];
      //   newArray.splice(index, 1);
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

export default reducer;
