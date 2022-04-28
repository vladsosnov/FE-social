import type { FC } from "react";
import styles from "./homeLayout.module.css";

export const HomeLayout: FC = ({ children }) => {
  return <div className={styles.homeLayout}>HomeLayout {children}</div>;
};
