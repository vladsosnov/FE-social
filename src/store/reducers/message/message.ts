import type { MessageAction } from "./types";
import { SET_MESSAGE, CLEAR_MESSAGE } from "store/actions/types";

const initialState = {};

export const messageReducer = (state = initialState, action: MessageAction) => {
  const { type, payload } = action;

  switch (type) {
    case SET_MESSAGE:
      return { message: payload };

    case CLEAR_MESSAGE:
      return { message: "" };

    default:
      return state;
  }
};
