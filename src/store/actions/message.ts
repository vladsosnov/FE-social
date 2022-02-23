import { SET_MESSAGE, CLEAR_MESSAGE } from "./types";

export const MessageActions = {
  setMessage: (message: string) => ({
    type: SET_MESSAGE,
    payload: message,
  }),

  clearMessage: () => ({
    type: CLEAR_MESSAGE,
  }),
};
