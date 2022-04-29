export const UserActions = {
  likePost: (userId: string) => ({
    type: "LIKE_POST",
    payload: userId,
  }),
};
