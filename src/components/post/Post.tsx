import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserAvatar } from "components/shared";
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
import type { unitOfTime } from "moment";
import type { Post as PostType } from "types/Post";
import type { FC } from "react";
import styles from "./post.module.css";
import { UserService } from "services/user";
import { PostService } from "services/post";
import { useActions } from "hooks/useActions";
interface PostProps {
  post: PostType;
}

export const Post: FC<PostProps> = ({ post }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { likePost } = useActions();
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLike] = useState(false);
  const [user, setUser] = useState<User>({} as User);
  const { user: currentUser } = useTypedSelector((store) => store.user);

  useEffect(() => {
    setIsLike(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await UserService.getUser(currentUser._id);
        setUser(res.data);
      } catch (err) {
        console.log("err", err);
      }
    };
    fetchUser();
  }, [currentUser._id]);

  const likeHandler = () => {
    try {
      PostService.likePost(post._id, user._id);
      likePost(user._id);
    } catch (err) {
      console.log("err", err);
    }
    setLike(isLiked ? like - 1 : like + 1);
    setIsLike(!isLiked);
  };

  const moreVertHandle = () => {
    console.log("moreVert");
  };

  return (
    <div className={styles.post}>
      <Link to={`profile/${user.username}`} className={styles.postActor}>
        <UserAvatar
          picture={user.profilePicture || ""}
          username={user.username || ""}
          size="m"
        />
        <div className={styles.postActorMeta}>
          <span className={styles.postUsername}>{user.username}</span>
          <span className={styles.postUserPosition}>
            Company • Sporting Goods
          </span>
          <span className={styles.postPublishDate}>
            {moment()
              .startOf(post.createdAt as unitOfTime.StartOf)
              .fromNow()}
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
          <button className={styles.postSocialActionsBtn} onClick={likeHandler}>
            <LikeIcon
              customClassName={styles.postSocialActionsIcon}
              width={21}
            />
            Like
          </button>
          <button className={styles.postSocialActionsBtn} onClick={likeHandler}>
            <CommentIcon
              customClassName={styles.postSocialActionsIcon}
              width={21}
            />
            Comment
          </button>
          <button className={styles.postSocialActionsBtn} onClick={likeHandler}>
            <ShareIcon
              customClassName={styles.postSocialActionsIcon}
              width={21}
            />
            Share
          </button>
          <button className={styles.postSocialActionsBtn} onClick={likeHandler}>
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
