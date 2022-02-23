import noAvatar from "assets/images/shared/noAvatar.png";
import "./userAvatar.css";

export const UserAvatar = ({
  picture,
  username,
  customClassName = "",
  size = "small",
  type = "circle",
}: any) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <img
      className={`userAvatar userAvatar--${size} userAvatar--${type} ${customClassName}`}
      src={picture ? `${PF}${picture}` : noAvatar}
      alt={username}
    />
  );
};
