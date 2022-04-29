import type { MessageAction } from "./types";

const initialState = {};

export const messageReducer = (state = initialState, action: MessageAction) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_MESSAGE":
      return { message: payload };

    case "CLEAR_MESSAGE":
      return { message: "" };

    default:
      return state;
  }
};
