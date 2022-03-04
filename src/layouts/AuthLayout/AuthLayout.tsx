import type { FC } from "react";
import styles from "./authLayout.module.css";

export const AuthLayout: FC = ({ children }) => {
  return (
    <div className={styles.login}>
      <div className={styles.loginWrapper}>
        <div className={styles.loginRight}>{children}</div>
      </div>
    </div>
  );
};
