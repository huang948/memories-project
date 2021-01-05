import { SET_CURRENTID } from "../constants/actionTypes";

const currentId = (currentId = null, action) => {
  switch (action.type) {
    case SET_CURRENTID:
      return action.payload;
    default:
      return currentId;
  }
};

export default currentId;
