import { UserAvatar } from "components/shared";
import { SidebarHeadIcon } from "assets/icons";
import styles from "./sidebar.module.css";
import type { FC } from "react";
import type { User } from "types/User";

interface SidebarProps {
  user: User;
}

export const Sidebar: FC<SidebarProps> = ({ user }) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarHead}>
        <SidebarHeadIcon customClassName={styles.sidebarHeadBg} />
        <UserAvatar
          picture={user?.profilePicture}
          username={user.username}
          size="l"
          customClassName={styles.sidebarUserAvatar}
        />
        <div className={styles.sidebarUsernameText}>{user.username}</div>
        <p className={styles.sidebarUserPosition}>{user.position}</p>
      </div>
      <div className={styles.sidebarStatistics}>
        <h2 className={styles.sidebarStatisticsTitle}>Statistics</h2>
        <ul className={styles.sidebarListItems}>
          <li className={styles.sidebarListItem}>
            Followers
            <span>{user.followers.length || 0}</span>
          </li>
          <li className={styles.sidebarListItem}>
            Followings
            <span>{user.followings.length || 0}</span>
          </li>
          <li className={styles.sidebarListItem}>
            Your posts likes
            <span>0</span>
          </li>
          <li className={styles.sidebarListItem}>
            Liked posts <span>0</span>
          </li>
        </ul>
      </div>
      <a href="/" className={styles.sidebarSavedItemsLink}>
        Saved items
      </a>
      <div className={styles.sidebarGroups}>
        <h2 className={styles.sidebarGroupsTitle}>Groups</h2>
        <ul className={styles.sidebarListItems}>
          <li className={styles.sidebarListItem}>Front End Developer Group</li>
          <li className={styles.sidebarListItem}>
            Front-end Developer Network
          </li>
        </ul>
        <a href="/" className={styles.sidebarListItem}>
          See all
        </a>
      </div>
    </div>
  );
};
