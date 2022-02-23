import { Header } from "components/header";
import type { FC } from "react";
import "./mainLayout.css";

export const MainLayout: FC<any> = ({ children }) => {
  return (
    <div className="mainLayout">
      <Header />
      <div className="mainLayoutOutledContainer">
        <div className="mainLayoutOutledContainerContent">{children}</div>
      </div>
    </div>
  );
};
