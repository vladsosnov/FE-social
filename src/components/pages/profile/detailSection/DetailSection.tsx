import { Link } from "react-router-dom";
import { SidebarHeadIcon } from "assets/icons";
import { UserAvatar } from "components/shared";
import type { FC } from "react";
import type { User } from "types/User";
import styles from "./detailSection.module.css";

interface DetailSectionProps {
  user: User | null;
  handleAvatarClick: () => void;
}

export const DetailSection: FC<DetailSectionProps> = ({
  user,
  handleAvatarClick,
}) => {
  return (
    <section className={styles.detailProfile}>
      {user && (
        <>
          {user.coverPicture ? (
            <img
              className={styles.detailProfileCoverImg}
              src={user.coverPicture}
              alt=""
            />
          ) : (
            <SidebarHeadIcon customClassName={styles.detailProfileCoverImg} />
          )}
          <div className={styles.detailProfileContent}>
            <button
              className={styles.detailProfileAvatarImg}
              onClick={handleAvatarClick}
            >
              <UserAvatar
                picture={user.profilePicture}
                username={user.username}
                size="xl"
              />
            </button>
            <div className={styles.detailProfileUser}>
              <h1 className={styles.detailProfileUserName}>{user.username}</h1>
              <div className={styles.detailProfileUserPosition}>
                {user.position}
              </div>
              <div className={styles.detailProfileUserLocation}>Ukraine</div>
              <span className={styles.detailProfileUserDesc}>{user.desc}</span>
              <Link
                to="/network"
                className={styles.detailProfileUserConnections}
              >
                {user.followers.length || 0} connections
              </Link>
            </div>
          </div>
        </>
      )}
    </section>
  );
};
