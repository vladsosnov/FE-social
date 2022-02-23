import { AuthActions } from "./auth";
import { MessageActions } from "./message";

export const combineActions = {
  ...AuthActions,
  ...MessageActions,
};
