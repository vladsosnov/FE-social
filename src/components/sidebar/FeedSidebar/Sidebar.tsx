import { UserAvatar } from "components/shared";
import { SidebarHeadIcon } from "assets/icons";
import styles from "./sidebar.module.css";
import type { FC } from "react";
import type { User } from "types/User";
import { Link } from "react-router-dom";
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
          <li>
            <Link to="/" className={styles.sidebarListItem}>
              Followers
              <span>{user.followers.length || 0}</span>
            </Link>
          </li>
          <li>
            <Link to="/" className={styles.sidebarListItem}>
              Followings
              <span>{user.followings.length || 0}</span>
            </Link>
          </li>
          <li>
            <Link to="/" className={styles.sidebarListItem}>
              Liked posts
              <span>{user.likedPosts.length || 0}</span>
            </Link>
          </li>
        </ul>
      </div>
      <a href="/" className={styles.sidebarSavedItemsLink}>
        Saved items
      </a>
      <div className={styles.sidebarGroups}>
        <h2 className={styles.sidebarGroupsTitle}>Groups</h2>
        <ul className={styles.sidebarListItems}>
          <li>
            <Link to="/" className={styles.sidebarListItem}>
              Front End Developer Group
            </Link>
          </li>
          <li>
            <Link to="/" className={styles.sidebarListItem}>
              Front-end Developer Network
            </Link>
          </li>
        </ul>
        <Link to="/" className={styles.sidebarListItem}>
          See all
        </Link>
      </div>
    </div>
  );
};
