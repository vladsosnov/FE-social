import { useEffect, useState } from "react";
import { MainLayout } from "layouts/MainLayout/MainLayout";
import { FeedList } from "components/feedList";
import { Aside } from "components/aside";
import { Sidebar } from "components/sidebar/FeedSidebar";
import { Share } from "components/share";
import { useTypedSelector } from "hooks/useSelector";
import { PostService } from "services/post";
import styles from "./feed.module.css";
import type { Recommendations } from "types/User";
import type { Post } from "types/Post";

export const Feed = () => {
  const { user } = useTypedSelector((store) => store.user);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await PostService.getTimelinePosts(user._id);

        setPosts(
          res.data.sort((p1: Post, p2: Post) => {
            return (
              new Date(p2.createdAt).valueOf() -
              new Date(p1.createdAt).valueOf()
            );
          }),
        );
      } catch (err) {
        console.log("Error in Feed fetchPosts", err);
      }
    };
    fetchPosts();
  }, [user._id]);

  const recommendations: Recommendations[] = [
    {
      id: "0",
      profilePicture: "",
      username: "Bill Gates",
      position: "Co-chair, Bill & Melinda Gates Foundation",
    },
    {
      id: "1",
      profilePicture: "",
      username: "Nike",
      position: "Company • Sporting Goods",
    },
    {
      id: "2",
      profilePicture: "",
      username: "GitHub",
      position: "Company • Computer Software",
    },
  ];

  return (
    <MainLayout>
      <Sidebar user={user} />
      <main className={styles.feed}>
        <Share />
        <FeedList posts={posts} />
      </main>
      <Aside user={null} recommendations={recommendations} />
    </MainLayout>
  );
};
