import { AuthActions } from "./auth";
import { MessageActions } from "./message";
import { UserActions } from "./user";

export const combineActions = {
  ...AuthActions,
  ...MessageActions,
  ...UserActions,
};
