import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
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
import "./header.css";

export const Header = () => {
  const { user } = useSelector((store: any) => store.auth);
  const { logout } = useActions();

  return (
    <div className="header">
      <div className="headerContent">
        <NavLink to="/" className="headerNavBranding">
          <LogoIcon width={34} />
        </NavLink>
        <div className="headerNavSearch">
          <SearchIcon width={18} customClassName="headerSearchIcon" />
          <input
            type="text"
            placeholder="Search"
            aria-label="Search"
            className="headerSearchInput"
          />
        </div>
        <nav className="headerNav">
          <ul className="headerNavPrimaryItems">
            <li className="headerNavPrimaryItem">
              <NavLink to="/" className="headerNavPrimaryLink">
                <HomeIcon width={21} />
                Home
              </NavLink>
            </li>
            <li className="headerNavPrimaryItem">
              <NavLink to="/network" className="headerNavPrimaryLink">
                <NetworkIcon width={21} />
                My network
              </NavLink>
            </li>
            <li className="headerNavPrimaryItem">
              <NavLink to="/messenger" className="headerNavPrimaryLink">
                <ChatIcon width={21} />
                Messaging
              </NavLink>
            </li>
            <li className="headerNavPrimaryItem">
              <NavLink to="/notifications" className="headerNavPrimaryLink">
                <NotificationsIcon width={21} />
                Notifications
              </NavLink>
            </li>
            <li className="headerNavPrimaryItem">
              <NavLink
                to={`/profile/${user.username}`}
                className="headerNavPrimaryLink"
              >
                <PersonIcon width={22} />
                {user.username}
              </NavLink>
            </li>
            <li className="headerNavPrimaryItem">
              <button onClick={logout} className="headerNavPrimaryLink">
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
