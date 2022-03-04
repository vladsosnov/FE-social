import { useEffect, useState } from "react";
import { API } from "hooks/useApi";
import type { User } from "types/User";
import styles from "./chatOnline.module.css";

export const ChatOnline = ({ onlineUsers, currentId, setCurrentChat }: any) => {
  const [friends, setFriends] = useState<User[]>([]);
  const [onlineFriends, setOnlineFriends] = useState<User[]>([]);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const getFriends = async () => {
      try {
        const res = await API.get(`/users/friends/${currentId}`);
        setFriends(res.data);
      } catch (err) {
        console.log("err", err);
      }
    };
    getFriends();
  }, [currentId]);

  console.log("friends", friends);

  useEffect(() => {
    setOnlineFriends(
      friends.filter((friend) => onlineUsers.includes(friend._id)),
    );
  }, [friends, onlineUsers]);

  const handleClick = async (user: User) => {
    try {
      const res = await API.get(`/conversations/find/${currentId}/${user._id}`);
      setCurrentChat(res.data);
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <div className={styles.chatOnline}>
      {onlineFriends.map((onlineFriend) => (
        <div
          key={onlineFriend.id}
          className={styles.chatOnlineFriend}
          aria-hidden="true"
          onClick={() => handleClick(onlineFriend)}
        >
          <div className={styles.chatOnlineImgContainer}>
            <img
              className={styles.chatOnlineImg}
              src={
                onlineFriend?.profilePicture
                  ? `${PF}${onlineFriend.profilePicture}`
                  : `${PF}person/noAvatar.png`
              }
              alt=""
            />
            <div className={styles.chatOnlineBadge}></div>
          </div>
          <span className={styles.chatOnlineName}>
            {onlineFriend?.username}
          </span>
        </div>
      ))}
    </div>
  );
};
