import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthLayout } from "layouts/AuthLayout";
import { API } from "hooks/useApi";

export const Register = () => {
  const username: any = useRef();
  const position: any = useRef();
  const email: any = useRef();
  const password: any = useRef();
  const passwordAgain: any = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (password.current.value !== passwordAgain.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match");
      return;
    }

    const user = {
      username: username.current.value,
      position: position.current.value,
      email: email.current.value,
      password: password.current.value,
    };

    try {
      await API.post("/auth/register", user);
      navigate("login");
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <AuthLayout>
      <form className="loginBox" onSubmit={handleSubmit}>
        <input
          placeholder="Username"
          className="loginInput"
          ref={username}
          required
        />
        <input
          placeholder="Position"
          className="loginInput"
          ref={position}
          required
        />
        <input
          placeholder="Email"
          className="loginInput"
          ref={email}
          required
          type="email"
        />
        <input
          placeholder="Password"
          className="loginInput"
          ref={password}
          required
          type="password"
          minLength={6}
        />
        <input
          placeholder="Password Again"
          className="loginInput"
          ref={passwordAgain}
          required
          type="password"
        />
        <div className="authWrapper">
          <button className="loginButton" type="submit">
            Sign Up
          </button>
          <button className="loginRegisterButton">
            <Link to="/login">Log into Account</Link>
          </button>
        </div>
      </form>
    </AuthLayout>
  );
};
