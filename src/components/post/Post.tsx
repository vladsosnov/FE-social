import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
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
import "./post.css";

export const Post = ({ post }: any) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState<any>({});
  const { userId } = post;
  const { user: currentUser } = useSelector((store: any) => store.auth);

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
      API.put(`/posts/${post._id}/like`, { userId: user._id });
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
    <div className="post">
      <Link to={`profile/${user.username}`} className="postActor">
        <UserAvatar
          picture={user.profilePicture}
          username={user.name}
          size="medium"
        />
        <div className="postActorMeta">
          <span className="postUsername">{user.username}</span>
          <span className="postUserPosition">Company • Sporting Goods</span>
          <span className="postPublishDate">
            {moment().startOf(post.createdAt).fromNow()}
          </span>
        </div>
      </Link>
      <div className="postControlMenu" onClick={moreVertHandle}>
        <MoreVertIcon width={21} />
      </div>
      <div className="postContent">
        <span className="postText">{post?.desc}</span>
      </div>
      <div className="postImage">
        {post.image && (
          <img
            className="postImageImg"
            src={`${PF}${post.image}`}
            alt={post.desc}
          />
        )}
      </div>
      <div className="postSocialActivity">
        <div className="postSocialCounts">
          <span className="postLikeCounter">{like} people like it</span>
          <span className="postCommentCounter">
            {post.comment || 0} comments
          </span>
        </div>
        <div className="postSocialActionBar">
          <button className="postSocialActionsButton" onClick={likeHandler}>
            <LikeIcon customClassName="postSocialActionsIcon" width={21} />
            Like
          </button>
          <button className="postSocialActionsButton" onClick={likeHandler}>
            <CommentIcon customClassName="postSocialActionsIcon" width={21} />
            Comment
          </button>
          <button className="postSocialActionsButton" onClick={likeHandler}>
            <ShareIcon customClassName="postSocialActionsIcon" width={21} />
            Share
          </button>
          <button className="postSocialActionsButton" onClick={likeHandler}>
            <SendIcon customClassName="postSocialActionsIcon" width={21} />
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
