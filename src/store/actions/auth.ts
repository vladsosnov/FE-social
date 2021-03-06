import { AuthService } from "services/auth";
import type { User } from "types/User";
import type { AppDispatch } from "store";
import type { Auth } from "types/Auth";

export const AuthActions = {
  register: (user: Auth) => async (dispatch: AppDispatch) => {
    try {
      const response = await AuthService.register(user);
      dispatch({
        type: "REGISTER_SUCCESS",
        payload: null,
      });

      dispatch({
        type: "SET_MESSAGE",
        payload: response.data.message,
      });

      return response;
    } catch (err) {
      const { message } = err as Error;

      dispatch({
        type: "REGISTER_FAIL",
        payload: null,
      });

      dispatch({
        type: "SET_MESSAGE",
        payload: message,
      });
    }
  },

  login:
    ({ email, password }: Auth) =>
    async (dispatch: AppDispatch) => {
      try {
        const response: User = await AuthService.login({ email, password });
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response,
        });

        return response;
      } catch (err) {
        const { message } = err as Error;

        dispatch({
          type: "LOGIN_FAIL",
          payload: null,
        });

        dispatch({
          type: "SET_MESSAGE",
          payload: message,
        });
      }
    },
  logout: () => (dispatch: AppDispatch) => {
    AuthService.logout();

    dispatch({
      type: "LOGOUT",
      payload: null,
    });
  },
};
