import { combineReducers } from "redux";
import { authReducer as auth } from "./auth";
import { messageReducer as message } from "./message";
import { userReducer as user } from "./user";

export const reducers = combineReducers({
  auth,
  message,
  user,
});
