import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { API } from "hooks/useApi";
import type { FC } from "react";
import type { Follower, User } from "types/User";
import styles from "./rightbar.module.css";

interface RightbarProps {
  user: User;
}

export const Rightbar: FC<RightbarProps> = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState<Follower[]>([]);
  const { user: currentUser } = useSelector((store: any) => store.auth);
  const [followed, setFollowed] = useState(
    currentUser.followings.includes(user?.id),
  );

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await API.get("/users/friends/" + user?._id);
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user]);

  const handleClick = async () => {
    try {
      if (followed) {
        await API.put(`/users/${user._id}/unfollow`, {
          userId: currentUser._id,
        });
        //dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await API.put(`/users/${user._id}/follow`, {
          userId: currentUser._id,
        });
        //dispatch({ type: "FOLLOW", payload: user._id });
      }
      setFollowed(!followed);
    } catch (err) {
      console.log("err", err);
    }
  };

  const HomeRightbar = () => {
    return (
      <>
        {user?.username !== currentUser?.username && (
          <button className={styles.rightbarFollowButton} onClick={handleClick}>
            {followed ? "Unfollow" : "Follow"}
          </button>
        )}
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className={styles.rightbarTitle}>User information</h4>
        <div className={styles.rightbarInfo}>
          <div className={styles.rightbarInfoItem}>
            <span className={styles.rightbarInfoKey}>City:</span>
            <span className={styles.rightbarInfoValue}>{user.city}</span>
          </div>
          <div className={styles.rightbarInfoItem}>
            <span className={styles.rightbarInfoKey}>From:</span>
            <span className={styles.rightbarInfoValue}>{user.from}</span>
          </div>
          <div className={styles.rightbarInfoItem}>
            <span className={styles.rightbarInfoKey}>Relationship:</span>
            <span className={styles.rightbarInfoValue}>
              {user.relationship === 1
                ? "Single"
                : user.relationship === 2
                ? "Married"
                : "-"}
            </span>
          </div>
        </div>
        <h4 className={styles.rightbarTitle}>User friends</h4>
        <div className={styles.rightbarFollowings}>
          {friends.map((friend) => (
            <Link
              key={friend.userId}
              to={`profile/${friend.username}`}
              style={{ textDecoration: "none" }}
            >
              <div className={styles.rightbarFollowing}>
                <img
                  src={
                    friend.profilePicture
                      ? `${PF}${friend.profilePicture}`
                      : `${PF}person/noAvatar.png`
                  }
                  alt=""
                  className={styles.rightbarFollowingImg}
                />
                <span className={styles.rightbarFollowingName}>
                  {friend.username}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className={styles.rightbar}>
      <div className={styles.rightbarWrapper}>
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};
