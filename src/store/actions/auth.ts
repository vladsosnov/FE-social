import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
} from "./types";
import AuthService from "services/auth";
import type { AppDispatch } from "store";
import type { Auth } from "types/Auth";

export const AuthActions = {
  registerAction:
    (username: string, email: string, password: string) =>
    (dispatch: AppDispatch) => {
      return AuthService.register({ username, email, password }).then(
        (response) => {
          dispatch({
            type: REGISTER_SUCCESS,
            payload: null,
          });

          dispatch({
            type: SET_MESSAGE,
            payload: response.data.message,
          });

          return Promise.resolve();
        },
        (error) => {
          const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          dispatch({
            type: REGISTER_FAIL,
            payload: null,
          });

          dispatch({
            type: SET_MESSAGE,
            payload: message,
          });

          return Promise.reject();
        },
      );
    },

  login:
    ({ email, password }: Auth) =>
    (dispatch: AppDispatch) => {
      return AuthService.login({ email, password }).then(
        (data) => {
          dispatch({
            type: LOGIN_SUCCESS,
            payload: { user: data },
          });

          return Promise.resolve();
        },
        (error) => {
          const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          dispatch({
            type: LOGIN_FAIL,
            payload: null,
          });

          dispatch({
            type: SET_MESSAGE,
            payload: message,
          });

          return Promise.reject();
        },
      );
    },

  logout: () => (dispatch: AppDispatch) => {
    AuthService.logout();

    dispatch({
      type: LOGOUT,
      payload: null,
    });
  },
};
