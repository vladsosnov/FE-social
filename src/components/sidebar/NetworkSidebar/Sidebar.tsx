import styles from "./sidebar.module.css";

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h2 className={styles.sidebarTitle}>Manage my network</h2>
      <ul className={styles.sidebarList}>
        <li className={styles.sidebarItem}>
          <div className={styles.sidebarItemCountWrap}>
            <img src="" alt="" className="" />
            <div className={styles.sidebarItemName}>Connections</div>
          </div>
          <div className={styles.sidebarItemCount}>5</div>
        </li>
        <li className={styles.sidebarItem}>
          <div className={styles.sidebarItemCountWrap}>
            <img src="" alt="" className="" />
            <div className={styles.sidebarItemName}>Groups</div>
          </div>
          <div className={styles.sidebarItemCount}>0</div>
        </li>
        <li className={styles.sidebarItem}>
          <div className={styles.sidebarItemCountWrap}>
            <img src="" alt="" className="" />
            <div className={styles.sidebarItemName}>Events</div>
          </div>
          <div className={styles.sidebarItemCount}>0</div>
        </li>
      </ul>
    </div>
  );
};
