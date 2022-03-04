import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MainLayout } from "layouts/MainLayout/MainLayout";
import { Feed } from "components/feed";
import { DetailSection } from "components/pages/profile";
import { Aside } from "components/aside";
import { API } from "hooks/useApi";
import type { User } from "types/User";
import styles from "./profile.module.css";

export const Profile = () => {
  const [user, setUser] = useState<User | null>(null);
  const username = useParams().username || "";

  useEffect(() => {
    const fetchUser = async () => {
      const res = await API.get(`/users?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [username]);

  const handleAvatarClick = () => {
    console.log("user", user);
  };

  return (
    <MainLayout>
      <main className={styles.profile}>
        <DetailSection user={user} handleAvatarClick={handleAvatarClick} />
        <Feed username={username} />
      </main>
      <Aside user={null} />
    </MainLayout>
  );
};
