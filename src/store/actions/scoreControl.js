import * as actionTypes from "./actionTypes";

export const incrementScore = () => {
  return { type: actionTypes.INCREMENT_SCORE };
};

export const decrementScore = () => {
  return { type: actionTypes.DECREMENT_SCORE };
};
