import { UserAvatar } from "components/shared";
import { SidebarHeadIcon } from "assets/icons";
import noCompany from "assets/images/shared/noCompany.jpeg";
import styles from "./userItem.module.css";
import type { User } from "types/User";
import type { FC } from "react";
interface UserItemProps {
  user: User;
}

export const UserItem: FC<UserItemProps> = ({ user }) => {
  return (
    <li key={user._id} className={styles.userItem}>
      <SidebarHeadIcon customClassName={styles.userItemBg} />
      <div>
        <UserAvatar
          picture={user.profilePicture}
          username={user.username}
          customClassName={styles.userItemUserAvatar}
          size="xl"
        />
        <h3 className={styles.userItemUsername}>{user.username}</h3>
        <h4 className={styles.userItemPosition}>{user.position}</h4>
      </div>
      <div className={styles.userItemBottomContainer}>
        <div className={styles.userItemCompany}>
          <img src={noCompany} alt="" className={styles.userItemCompanyImg} />
          <p className={styles.userItemCompanyName}>GlobalLogic</p>
        </div>
        <button
          className={styles.userItemConnectBtn}
          onClick={() => console.log("12")}
        >
          Connect
        </button>
      </div>
    </li>
  );
};
