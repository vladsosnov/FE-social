import type { Post } from "types/Post";
import type { UserAction } from "./types";

const user = JSON.parse(localStorage.getItem("user") || JSON.stringify(null));
const initialState = user ? { user } : { user: null };

export const userReducer = (state = initialState, action: UserAction) => {
  const { type, payload } = action;
  const isUserLikedPost = state.user.likedPosts.includes(payload);

  switch (type) {
    case "LIKE_POST":
      return {
        ...state,
        user: {
          ...state.user,
          likedPosts: isUserLikedPost
            ? state.user.likedPosts.filter(
                (likedPost: string) => likedPost !== payload,
              )
            : [...state.user.likedPosts, payload],
        },
      };

    default:
      return state;
  }
};
