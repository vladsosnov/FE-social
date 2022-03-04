export type MessageActionEnum = "SET_MESSAGE" | "CLEAR_MESSAGE";

export interface SetMessageAction {
  type: "SET_MESSAGE";
  payload: any;
}

export interface ClearMessageAction {
  type: "CLEAR_MESSAGE";
  payload: any;
}

export type MessageAction = SetMessageAction | ClearMessageAction;
