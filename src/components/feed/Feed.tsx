import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Post } from "components/post/Post";
import { API } from "hooks/useApi";
import "./feed.css";

export const Feed = ({ username }: any) => {
  const [posts, setPosts] = useState([]);
  const { user } = useSelector((store: any) => store.auth);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await API.get(`posts/profile/${username}`)
        : await API.get(`posts/timeline/${user._id}`);
      setPosts(
        res.data.sort((p1: any, p2: any) => {
          const createdAtDateP1: any = new Date(p2.createdAt);
          const createdAtDateP2: any = new Date(p1.createdAt);

          return createdAtDateP1 - createdAtDateP2;
        }),
      );
    };
    fetchPosts();
  }, [username, user._id]);

  return (
    <>
      {posts.length ? (
        posts.map((p: any) => <Post key={p._id} post={p} />)
      ) : (
        <div className="feedEmptyState">There are no posts yet!</div>
      )}
    </>
  );
};
