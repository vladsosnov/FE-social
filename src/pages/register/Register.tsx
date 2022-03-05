import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthLayout } from "layouts/AuthLayout";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import styles from "layouts/AuthLayout/authLayout.module.css";
import { useActions } from "hooks/useActions";

export const Register = () => {
  const navigate = useNavigate();
  const formSchema = Yup.object().shape({
    username: Yup.string()
      .required("Username is required")
      .min(8, "Username length should be at least 8 characters"),
    position: Yup.string().required("Position is required"),
    email: Yup.string().required("Email is required").email(),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password length should be at least 8 characters"),
  });
  const validationOpt = { resolver: yupResolver(formSchema) };
  const { register, handleSubmit, formState } = useForm(validationOpt);
  const { errors } = formState;
  const { register: registerAction } = useActions();
  const [isFetching, setIsFetching] = useState(false);

  const onSubmit = async (data: Record<string, string>) => {
    setIsFetching(true);
    const user = {
      username: data.username,
      position: data.position,
      email: data.email,
      password: data.password,
    };

    const registerResult = await registerAction(user);

    if (!registerResult) {
      return setIsFetching(false);
    }

    navigate("/");
  };

  return (
    <AuthLayout>
      <form className={styles.loginBox} onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("username", {
            required: true,
          })}
          placeholder="Username"
          className={styles.authInput}
        />
        {errors.username && <p>Please check the username</p>}
        <input
          {...register("position", {
            required: true,
          })}
          placeholder="Position"
          className={styles.authInput}
        />
        {errors.position && <p>Please check the position</p>}
        <input
          {...register("email", {
            required: true,
          })}
          placeholder="Email"
          className={styles.authInput}
          type="email"
        />
        {errors.email && <p>Please check the email</p>}
        <input
          {...register("password", {
            required: true,
          })}
          placeholder="Password"
          className={styles.authInput}
          type="password"
        />
        {errors.password && <p>Please check the password</p>}
        <div className={styles.authWrapper}>
          <button className={styles.loginButton} type="submit">
            {isFetching ? "Loading" : "Sign Up"}
          </button>
          <button className={styles.loginRegisterButton}>
            <Link to="/login">Log into Account</Link>
          </button>
        </div>
      </form>
    </AuthLayout>
  );
};
