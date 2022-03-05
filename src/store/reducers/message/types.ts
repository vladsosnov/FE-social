export type MessageActionEnum = "SET_MESSAGE" | "CLEAR_MESSAGE";

export interface SetMessageAction {
  type: "SET_MESSAGE";
  payload: string;
}

export interface ClearMessageAction {
  type: "CLEAR_MESSAGE";
  payload: null;
}

export type MessageAction = SetMessageAction | ClearMessageAction;
