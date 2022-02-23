import { useEffect, useState } from "react";
import { API } from "hooks/useApi";
import "./chatOnline.css";

export const ChatOnline = ({ onlineUsers, currentId, setCurrentChat }: any) => {
  const [friends, setFriends] = useState<any>([]);
  const [onlineFriends, setOnlineFriends] = useState([]);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const getFriends = async () => {
      try {
        const res = await API.get(`/users/friends/${currentId}`);
        setFriends(res.data);
      } catch (err) {
        console.log("err", err);
      }
    };
    getFriends();
  }, [currentId]);

  useEffect(() => {
    setOnlineFriends(
      friends.filter((friend: any) => onlineUsers.includes(friend._id)),
    );
  }, [friends, onlineUsers]);

  const handleClick = async (user: any) => {
    try {
      const res = await API.get(`/conversations/find/${currentId}/${user._id}`);
      setCurrentChat(res.data);
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <div className="chatOnline">
      {onlineFriends.map((o: any) => (
        <div className="chatOnlineFriend" onClick={() => handleClick(o)}>
          <div className="chatOnlineImgContainer">
            <img
              className="chatOnlineImg"
              src={
                o?.profilePicture
                  ? `${PF}${o.profilePicture}`
                  : `${PF}person/noAvatar.png`
              }
              alt=""
            />
            <div className="chatOnlineBadge"></div>
          </div>
          <span className="chatOnlineName">{o?.username}</span>
        </div>
      ))}
    </div>
  );
};
