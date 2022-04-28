import { Post } from "components/post/Post";
import type { FC } from "react";
import type { Post as PostType } from "types/Post";
import styles from "./feedList.module.css";

interface FeedListProps {
  posts: PostType[];
}

export const FeedList: FC<FeedListProps> = ({ posts }) => {
  return (
    <>
      {posts.length ? (
        posts.map((post) => <Post key={post._id} post={post} />)
      ) : (
        <div className={styles.feedListEmptyState}>There are no posts yet!</div>
      )}
    </>
  );
};
