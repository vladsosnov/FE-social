import noAvatar from "assets/images/shared/noAvatar.png";
import type { FC } from "react";
import "./userAvatar.css";

interface UserAvatarProps {
  picture: string;
  username: string;
  customClassName?: string;
  size?: "s" | "m" | "l" | "xl" | "xxl";
  type?: "circle" | "square";
}

export const UserAvatar: FC<UserAvatarProps> = ({
  picture,
  username,
  customClassName = "",
  size = "s",
  type = "circle",
}) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <img
      className={`userAvatar userAvatar--${size} userAvatar--${type} ${customClassName}`}
      src={picture ? `${PF}${picture}` : noAvatar}
      alt={username}
    />
  );
};
