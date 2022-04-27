import { useEffect, useState } from "react";
import { Post } from "components/post/Post";
import { useTypedSelector } from "hooks/useSelector";
import { PostService } from "services/post";
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
      try {
        const res = username
          ? await PostService.getProfilePosts(username)
          : await PostService.getTimelinePosts(user._id);

        setPosts(
          res.data.sort((p1: PostType, p2: PostType) => {
            return (
              new Date(p2.createdAt).valueOf() -
              new Date(p1.createdAt).valueOf()
            );
          }),
        );
      } catch (err) {
        console.log("err", err);
      }
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
