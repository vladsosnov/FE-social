import { useEffect, useState } from "react";
import { Post } from "components/post/Post";
import { API } from "hooks/useApi";
import { useTypedSelector } from "hooks/useSelector";
import type { FC } from "react";
import type { Post as PostType } from "types/Post";
import styles from "./feed.module.css";

interface FeedProps {
  username: string;
}

export const Feed: FC<FeedProps> = ({ username }) => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const { user } = useTypedSelector((store) => store.auth);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await API.get(`posts/profile/${username}`)
        : await API.get(`posts/timeline/${user._id}`);
      setPosts(
        res.data.sort((p1: PostType, p2: PostType) => {
          const createdAtDateP1 = new Date(p2.createdAt);
          const createdAtDateP2 = new Date(p1.createdAt);

          return createdAtDateP1.valueOf() - createdAtDateP2.valueOf();
        }),
      );
    };
    fetchPosts();
  }, [username, user._id]);

  return (
    <>
      {posts.length ? (
        posts.map((p) => <Post key={p._id} post={p} />)
      ) : (
        <div className={styles.feedEmptyState}>There are no posts yet!</div>
      )}
    </>
  );
};
