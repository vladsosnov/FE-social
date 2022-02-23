import type { FC } from 'react';
import './authLayout.css';

export const AuthLayout: FC<any> = ({ children }) => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginRight">{children}</div>
      </div>
    </div>
  );
};
