import type { FC } from "react";
import type { User } from "types/User";
import { NavLink } from "react-router-dom";
import { UserItem } from "../userItem";
import styles from "./usersList.module.css";
interface UsersListProps {
  users: User[];
}

export const UsersList: FC<UsersListProps> = ({ users }) => {
  return (
    <ul className={styles.usersList}>
      {users.length ? (
        users.map((user) => <UserItem user={user} key={user._id} />)
      ) : (
        <div className={styles.userListEmpty}>
          User&apos;s friend list is empty!
          <NavLink to="/" className={styles.userListEmptyLink}>
            Follow new friends
          </NavLink>
        </div>
      )}
    </ul>
  );
};
