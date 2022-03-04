export type AuthActionEnum =
  | "REGISTER_SUCCESS"
  | "REGISTER_FAIL"
  | "LOGIN_SUCCESS"
  | "LOGIN_FAIL"
  | "LOGOUT";

export interface RegisterSuccessAction {
  type: "REGISTER_SUCCESS";
  payload: any;
}

export interface RegisterFailAction {
  type: "REGISTER_FAIL";
  payload: any;
}

export interface LoginSuccessAction {
  type: "LOGIN_SUCCESS";
  payload: any;
}

export interface LoginFailAction {
  type: "LOGIN_FAIL";
  payload: any;
}

export interface LogoutAction {
  type: "LOGOUT";
  payload: any;
}

export type AuthAction =
  | LoginSuccessAction
  | LoginFailAction
  | RegisterFailAction
  | RegisterSuccessAction
  | LogoutAction;
