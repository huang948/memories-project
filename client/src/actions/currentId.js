import { SET_CURRENTID } from "../constants/actionTypes";

// no need for api as it only deals with frontend
// could remove this file altogether as it does not deal with async code 
    // but good practice since all action creators (returns action object or functions) should
    // be under actions folder 
// Action Creators

export const setCurrentId = (id) => (dispatch) => {
  try {
    dispatch({ type: SET_CURRENTID, payload: id });
  } catch (error) {
    console.log(error);
  }
};
