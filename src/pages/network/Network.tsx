import { Sidebar } from "components/sidebar/NetworkSidebar";
import { UsersList } from "components/users/usersList";
import { API } from "hooks/useApi";
import { useTypedSelector } from "hooks/useSelector";
import { MainLayout } from "layouts";
import { useEffect, useState } from "react";
import type { User } from "types/User";
import styles from "./network.module.css";

export const Network = () => {
  const [users, setUsers] = useState<User[]>([]);
  const { user } = useTypedSelector((store) => store.auth);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await API.get(`/users/${user._id}/all`);
      console.log("res", res);
      setUsers(res.data.users);
    };
    fetchUsers();
  }, [user._id]);

  return (
    <MainLayout>
      <Sidebar />
      <main className={styles.network}>
        <UsersList users={users} />
      </main>
    </MainLayout>
  );
};
