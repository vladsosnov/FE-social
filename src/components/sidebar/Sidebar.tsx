import { UserAvatar } from "components/shared";
import { SidebarHeadIcon } from "assets/icons";
import "./sidebar.css";

export const Sidebar = ({ user }: any) => {
  return (
    <div className="sidebar">
      <div className="sidebarHead">
        <SidebarHeadIcon customClassName="sidebarHeadBg" />
        <UserAvatar
          picture={user?.userPicture}
          username={user.username}
          size="large"
          customClassName="sidebarUserAvatar"
        />
        <div className="sidebarUsernameText">{user.username}</div>
        <p className="sidebarUserPosition">{user.position}</p>
      </div>
      <div className="sidebarStatistics">
        <h2 className="sidebarStatisticsTitle">Statistics</h2>
        <ul className="sidebarListItems">
          <li className="sidebarListItem">Followers</li>
          <li className="sidebarListItem">Followings</li>
          <li className="sidebarListItem">Your posts likes</li>
          <li className="sidebarListItem">Liked posts</li>
        </ul>
      </div>
      <a href="/" className="sidebarSavedItemsLink">
        Saved items
      </a>
      <div className="sidebarGroups">
        <h2 className="sidebarGroupsTitle">Groups</h2>
        <ul className="sidebarListItems">
          <li className="sidebarListItem">Front End Developer Group</li>
          <li className="sidebarListItem">Front-end Developer Network</li>
        </ul>
        <a href="/" className="sidebarListItem">
          See all
        </a>
      </div>
    </div>
  );
};
