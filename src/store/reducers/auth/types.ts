export enum AuthActionEnum {
  REGISTER_SUCCESS = "REGISTER_SUCCESS",
  REGISTER_FAIL = "REGISTER_FAIL",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_FAIL = "LOGIN_FAIL",
  LOGOUT = "LOGOUT",
}

export interface RegisterSuccessAction {
  type: AuthActionEnum.REGISTER_SUCCESS;
  payload: any;
}

export interface RegisterFailAction {
  type: AuthActionEnum.REGISTER_FAIL;
  payload: any;
}

export interface LoginSuccessAction {
  type: AuthActionEnum.LOGIN_SUCCESS;
  payload: any;
}

export interface LoginFailAction {
  type: AuthActionEnum.LOGIN_FAIL;
  payload: any;
}

export interface LogoutAction {
  type: AuthActionEnum.LOGOUT;
  payload: any;
}

export type AuthAction =
  | LoginSuccessAction
  | LoginFailAction
  | RegisterFailAction
  | RegisterSuccessAction
  | LogoutAction;
