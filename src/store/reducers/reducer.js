import * as actionTypes from "../actions/actionTypes";

const initialState = {
  score: 0,
  maxScore: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT_SCORE:
      if (state.score < state.maxScore) {
        return {
          ...state,
          score: state.score + 1,
        };
      } else return state;
    case actionTypes.DECREMENT_SCORE:
      if (state.score > 0) {
        return {
          ...state,
          score: state.score - 1,
        };
      } else return state;
    case actionTypes.CHANGE_MAX_SCORE:
      return {
        ...state,
        maxScore: action.maxScore,
      };
    case actionTypes.INCREMENT_NB_SHOOTS:
      return {
        ...state,
        maxScore: state.maxScore + 1,
      };
    case actionTypes.DECREMENT_NB_SHOOTS:
      if (state.maxScore > 0) {
        return {
          ...state,
          maxScore: state.maxScore - 1,
        };
      } else return state;
    case actionTypes.HANDLE_CHANGE:
      return {
        ...state,
        maxScore: action.nb,
      };
    case actionTypes.RESET_SCORE:
      return {
        ...state,
        score: 0,
      };
    default:
      return state;
  }
};

export default reducer;
