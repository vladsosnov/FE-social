import { useEffect, useState } from "react";
import { API } from "hooks/useApi";
import styles from "./conversation.module.css";
import type { User } from "types/User";

export const Conversation = ({ conversation, currentUser }: any) => {
  const [user, setUser] = useState<User>();
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const friendId = conversation.members.find(
      (member: any) => member !== currentUser._id,
    );

    const getUser = async () => {
      try {
        const res = await API.get(`/user?userId=${friendId}`);
        setUser(res.data);
      } catch (err) {
        console.log("err", err);
      }
    };

    getUser();
  }, [conversation, currentUser]);

  return (
    <div className={styles.conversation}>
      <img
        className={styles.conversationImg}
        src={
          user?.profilePicture
            ? `${PF}${user.profilePicture}`
            : `${PF}person/noAvatar.png`
        }
        alt=""
      />
      <span className={styles.conversationName}>{user?.username}</span>
    </div>
  );
};
