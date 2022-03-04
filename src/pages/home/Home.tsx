import { useSelector } from "react-redux";
import { MainLayout } from "layouts/MainLayout/MainLayout";
import { Feed } from "components/feed";
import { Aside } from "components/aside";
import { Sidebar } from "components/sidebar/HomeSidebar";
import { Share } from "components/share";
import styles from "./home.module.css";

export const Home = () => {
  const { user } = useSelector((store: any) => store.auth);

  return (
    <MainLayout>
      <Sidebar user={user} />
      <main className={styles.home}>
        <Share />
        <Feed username="" />
      </main>
      <Aside user={null} />
    </MainLayout>
  );
};
