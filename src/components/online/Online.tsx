import type { FC } from "react";
import type { User } from "types/User";
import styles from "./online.module.css";

interface OnlineProps {
  user: User;
}

export const Online: FC<OnlineProps> = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className={styles.rightbarFriend}>
      <div className={styles.rightbarProfileImgContainer}>
        <img
          className={styles.rightbarProfileImg}
          src={`${PF}${user.profilePicture}`}
          alt=""
        />
        <span className={styles.rightbarOnline}></span>
      </div>
      <span className={styles.rightbarUsername}>{user.username}</span>
    </li>
  );
};
