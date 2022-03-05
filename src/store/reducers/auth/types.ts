import type { User } from "types/User";

export type AuthActionEnum =
  | "REGISTER_SUCCESS"
  | "REGISTER_FAIL"
  | "LOGIN_SUCCESS"
  | "LOGIN_FAIL"
  | "LOGOUT";

export interface RegisterSuccessAction {
  type: "REGISTER_SUCCESS";
  payload: null;
}

export interface RegisterFailAction {
  type: "REGISTER_FAIL";
  payload: null;
}

export interface LoginSuccessAction {
  type: "LOGIN_SUCCESS";
  payload: User;
}

export interface LoginFailAction {
  type: "LOGIN_FAIL";
  payload: null;
}

export interface LogoutAction {
  type: "LOGOUT";
  payload: null;
}

export type AuthAction =
  | LoginSuccessAction
  | LoginFailAction
  | RegisterFailAction
  | RegisterSuccessAction
  | LogoutAction;
