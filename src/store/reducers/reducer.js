import * as actionTypes from "../actions/actionTypes";

const initialState = {
  score: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT_SCORE:
      return {
        ...state,
        score: state.score + 1,
      };
    case actionTypes.DECREMENT_SCORE:
      return {
        ...state,
        score: state.score - 1,
      };
    default:
      return state;
  }
};

export default reducer;
