import { combineReducers } from "redux";
import locationReducer from "./location";
import userReducer from "./userReducer"; //add new Reducer

export const makeRootReducer = () => {
  return combineReducers({
    location: locationReducer,
    user: userReducer
  });
};

export default makeRootReducer;
