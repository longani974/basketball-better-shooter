import * as actionTypes from "./actionTypes";

export const incrementScore = () => {
  return { type: actionTypes.INCREMENT_SCORE };
};

export const decrementScore = () => {
  return { type: actionTypes.DECREMENT_SCORE };
};

export const changeMaxScore = (maxScore) => {
  return { type: actionTypes.CHANGE_MAX_SCORE, maxScore };
};

export const incrementNbOfShoots = () => {
  return { type: actionTypes.INCREMENT_NB_SHOOTS };
};

export const decrementNbOfShoots = () => {
  return { type: actionTypes.DECREMENT_NB_SHOOTS };
};

export const handleChange = (nb) => {
  return { type: actionTypes.HANDLE_CHANGE, nb };
};

export const resetScore = () => {
  return { type: actionTypes.RESET_SCORE };
};
