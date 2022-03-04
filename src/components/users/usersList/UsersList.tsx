import type { FC } from "react";
import type { User } from "types/User";
import { UserItem } from "../userItem";
import styles from "./usersList.module.css";

interface UsersListProps {
  users: User[];
}

export const UsersList: FC<UsersListProps> = ({ users }) => {
  return (
    <ul className={styles.usersList}>
      {users.map((user) => (
        <UserItem user={user} key={user._id} />
      ))}
    </ul>
  );
};
