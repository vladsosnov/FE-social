import { Link } from "react-router-dom";
import { SidebarHeadIcon } from "assets/icons";
import { UserAvatar } from "components/shared";
import "./detailSection.css";

export const DetailSection = ({ user, handleAvatarClick }: any) => {
  return (
    <section className="detailProfile">
      {user.coverPicture ? (
        <img className="detailProfileCoverImg" src={user.coverPicture} alt="" />
      ) : (
        <SidebarHeadIcon customClassName="detailProfileCoverImg" />
      )}
      <div className="detailProfileContent">
        <button className="detailProfileAvatarImg" onClick={handleAvatarClick}>
          <UserAvatar
            picture={user.profilePicture}
            username={user.username}
            size="extra-large"
          />
        </button>
        <div className="detailProfileUser">
          <h1 className="detailProfileUserName">{user.username}</h1>
          <div className="detailProfileUserPosition">{user.position}</div>
          <div className="detailProfileUserLocation">Ukraine</div>
          <span className="detailProfileUserDesc">{user.desc}</span>
          <Link to="/network" className="detailProfileUserConnections">
            {user.followers?.length} connections
          </Link>
        </div>
      </div>
    </section>
  );
};
