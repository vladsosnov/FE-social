import { NavLink } from "react-router-dom";
import { useActions } from "hooks/useActions";
import {
  LogoIcon,
  SearchIcon,
  HomeIcon,
  NetworkIcon,
  NotificationsIcon,
  ChatIcon,
  PersonIcon,
  LogoutIcon,
} from "assets/icons";
import { useTypedSelector } from "hooks/useSelector";
import type { FC } from "react";
import styles from "./header.module.css";

export const Header: FC = () => {
  const { user } = useTypedSelector((store) => store.user);
  const { logout } = useActions();

  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <NavLink to="/" className={styles.headerNavBranding}>
          <LogoIcon width={34} />
        </NavLink>
        <div className={styles.headerNavSearch}>
          <SearchIcon width={18} customClassName={styles.headerSearchIcon} />
          <input
            type="text"
            placeholder="Search"
            aria-label="Search"
            className={styles.headerSearchInput}
          />
        </div>
        <nav className={styles.headerNav}>
          <ul className={styles.headerNavPrimaryItems}>
            <li className={styles.headerNavPrimaryItem}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${styles.headerNavPrimaryLink} ${styles.active}`
                    : `${styles.headerNavPrimaryLink}`
                }
                to="/"
              >
                <HomeIcon width={21} />
                Feed
              </NavLink>
            </li>
            <li className={styles.headerNavPrimaryItem}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${styles.headerNavPrimaryLink} ${styles.active}`
                    : `${styles.headerNavPrimaryLink}`
                }
                to="/network"
              >
                <NetworkIcon width={21} />
                Network
              </NavLink>
            </li>
            <li className={styles.headerNavPrimaryItem}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${styles.headerNavPrimaryLink} ${styles.active}`
                    : `${styles.headerNavPrimaryLink}`
                }
                to="/messenger"
              >
                <ChatIcon width={21} />
                Messaging
              </NavLink>
            </li>
            <li className={styles.headerNavPrimaryItem}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${styles.headerNavPrimaryLink} ${styles.active}`
                    : `${styles.headerNavPrimaryLink}`
                }
                to="/notifications"
              >
                <NotificationsIcon width={21} />
                Notifications
              </NavLink>
            </li>
            <li className={styles.headerNavPrimaryItem}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${styles.headerNavPrimaryLink} ${styles.active}`
                    : `${styles.headerNavPrimaryLink}`
                }
                to={`/profile/${user.username}`}
              >
                <PersonIcon width={22} />
                {user.username}
              </NavLink>
            </li>
            <li className={styles.headerNavPrimaryItem}>
              <button onClick={logout} className={styles.headerNavPrimaryLink}>
                <LogoutIcon width={22} />
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
