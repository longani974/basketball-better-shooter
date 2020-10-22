import axios from "axios";
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

export const setDatas = (datas) => {
  return {
    type: actionTypes.SET_DATAS,
    datas,
  };
};

export const fetchDatasFail = () => {
  return {
    type: actionTypes.FETCH_DATAS_FAIL,
  };
};

export const initDatas = () => {
  return (dispatch) => {
    axios
      .get("https://shooter-trainer.firebaseio.com/trainingData.json")
      .then((response) => {
        dispatch(setDatas(response.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(fetchDatasFail());
      });
  };
};

const sendDatasFail = (error) => {
  return {
    type: actionTypes.SEND_DATAS_FAIL,
    error,
  };
};

const cleanDatas = () => {
  return {
    type: actionTypes.CLEAN_DATAS,
  };
};

export const sendDatas = (localStorageData, clean) => {
  return (dispatch, action) => {
    axios
      .post(
        "https://shooter-trainer.firebaseio.com/trainingData.json",
        localStorageData
      ) // !!!!!!!!!
      .then((response) => {
        if (response.status === 200) {
          dispatch(cleanDatas(clean));
          dispatch(initDatas());
          clean();
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(sendDatasFail(error));
      });
  };
};
