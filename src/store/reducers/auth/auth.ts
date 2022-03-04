import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "store/actions/types";
import type { AuthAction } from "./types";

const user = JSON.parse(localStorage.getItem("user") || JSON.stringify(null));

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

export const authReducer = (state = initialState, action: AuthAction) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };

    default:
      return state;
  }
};
