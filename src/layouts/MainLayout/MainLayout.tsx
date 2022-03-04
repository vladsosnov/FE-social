import { Header } from "components/header";
import type { FC } from "react";
import styles from "./mainLayout.module.css";

export const MainLayout: FC = ({ children }) => {
  return (
    <div className={styles.mainLayout}>
      <Header />
      <div className={styles.mainLayoutOutledContainer}>
        <div className={styles.mainLayoutOutledContainerContent}>
          {children}
        </div>
      </div>
    </div>
  );
};
