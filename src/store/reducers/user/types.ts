export type UserActionEnum = "UPDATE_LIKE";

export interface UpdateLikeAction {
  type: "LIKE_POST";
  payload: string;
}

export type UserAction = UpdateLikeAction;
