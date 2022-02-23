import { combineReducers } from "redux";
import { authReducer as auth } from "./auth/auth";
import { messageReducer as message } from "./message/message";

export const reducers = combineReducers({
  auth,
  message,
});
