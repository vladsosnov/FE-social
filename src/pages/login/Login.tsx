import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { AuthLayout } from "layouts/AuthLayout";
import { useActions } from "hooks/useActions";

export const Login = () => {
  const email: any = useRef();
  const password: any = useRef();
  const [isFetching, setIsFetching] = useState(false);
  const { login } = useActions();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsFetching(true);
    login({ email: email.current.value, password: password.current.value });
  };

  return (
    <AuthLayout>
      <form className="loginBox" onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          type="email"
          className="loginInput"
          ref={email}
        />
        <input
          placeholder="Password"
          type="password"
          className="loginInput"
          ref={password}
        />
        <div className="authWrapper">
          <button className="loginButton" disabled={isFetching}>
            {isFetching ? "Loading" : "Log In"}
          </button>
          <button className="loginRegisterButton">
            <Link to="/register">
              {isFetching ? "Loading" : "Create a New Account"}
            </Link>
          </button>
        </div>
      </form>
    </AuthLayout>
  );
};
