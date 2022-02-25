export type Like = {
  userId: string;
};

export type Comment = {
  userId: string;
};

export type Post = {
  userId: string;
  desc: string;
  image: number;
  likes: Array<Like>;
  comments: Array<Comment>;
};
