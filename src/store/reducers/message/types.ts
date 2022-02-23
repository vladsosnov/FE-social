export enum MessageActionEnum {
  SET_MESSAGE = "SET_MESSAGE",
  CLEAR_MESSAGE = "CLEAR_MESSAGE",
}

export interface SetMessageAction {
  type: MessageActionEnum.SET_MESSAGE;
  payload: any;
}

export interface ClearMessageAction {
  type: MessageActionEnum.CLEAR_MESSAGE;
  payload: any;
}

export type MessageAction = SetMessageAction | ClearMessageAction;
