import type { Follower } from "./User";

export type Admin = {
  userId: string;
};

export type Group = {
  userId: string;
  name: string;
  desc: string;
  image: string;
  admins: Array<Admin>;
  followers: Array<Follower>;
  type: "public" | "private";
};
