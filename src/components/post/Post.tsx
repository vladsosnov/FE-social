import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserAvatar } from "components/shared";
import { API } from "hooks/useApi";
import moment from "moment";
import {
  MoreVertIcon,
  LikeIcon,
  CommentIcon,
  ShareIcon,
  SendIcon,
} from "assets/icons";
import { useTypedSelector } from "hooks/useSelector";
import type { User } from "types/User";
import type { Post as PostType } from "types/Post";
import type { FC } from "react";
import styles from "./post.module.css";

interface PostProps {
  post: PostType;
}

export const Post: FC<PostProps> = ({ post }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const { userId } = post;
  const { user: currentUser } = useTypedSelector((store) => store.auth);

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await API.get(`users?userId=${currentUser._id}`);
      setUser(res.data);
    };
    fetchUser();
  }, [userId, currentUser._id]);

  const likeHandler = () => {
    try {
      API.put(`/posts/${post._id}/like`, { userId: user?._id });
    } catch (err) {
      console.log("err", err);
    }
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  const moreVertHandle = () => {
    console.log("moreVert");
  };

  return (
    <div className={styles.post}>
      <Link to={`profile/${user?.username}`} className={styles.postActor}>
        <UserAvatar
          picture={user?.profilePicture || ""}
          username={user?.username || ""}
          size="m"
        />
        <div className={styles.postActorMeta}>
          <span className={styles.postUsername}>{user?.username}</span>
          <span className={styles.postUserPosition}>
            Company • Sporting Goods
          </span>
          <span className={styles.postPublishDate}>
            {moment().startOf(post.createdAt).fromNow()}
          </span>
        </div>
      </Link>
      <button className={styles.postControlMenu} onClick={moreVertHandle}>
        <MoreVertIcon width={21} />
      </button>
      <div className={styles.postContent}>
        <span className={styles.postText}>{post?.desc}</span>
      </div>
      <div className={styles.postImage}>
        {post.image && (
          <img
            className={styles.postImageImg}
            src={`${PF}${post.image}`}
            alt={post.desc}
          />
        )}
      </div>
      <div className={styles.postSocialActivity}>
        <div className={styles.postSocialCounts}>
          <span className={styles.postLikeCounter}>{like} people like it</span>
          <span className={styles.postCommentCounter}>
            {post.comments.length || 0} comments
          </span>
        </div>
        <div className={styles.postSocialActionBar}>
          <button
            className={styles.postSocialActionsButton}
            onClick={likeHandler}
          >
            <LikeIcon
              customClassName={styles.postSocialActionsIcon}
              width={21}
            />
            Like
          </button>
          <button
            className={styles.postSocialActionsButton}
            onClick={likeHandler}
          >
            <CommentIcon
              customClassName={styles.postSocialActionsIcon}
              width={21}
            />
            Comment
          </button>
          <button
            className={styles.postSocialActionsButton}
            onClick={likeHandler}
          >
            <ShareIcon
              customClassName={styles.postSocialActionsIcon}
              width={21}
            />
            Share
          </button>
          <button
            className={styles.postSocialActionsButton}
            onClick={likeHandler}
          >
            <SendIcon
              customClassName={styles.postSocialActionsIcon}
              width={21}
            />
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
