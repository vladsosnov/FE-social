import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthLayout } from "layouts/AuthLayout";
import { useActions } from "hooks/useActions";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import styles from "layouts/AuthLayout/authLayout.module.css";

export const Login = () => {
  const formSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email(),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password length should be at least 8 characters"),
  });
  const validationOpt = { resolver: yupResolver(formSchema) };
  const { register, handleSubmit, formState } = useForm(validationOpt);
  const { errors } = formState;
  const { login } = useActions();
  const [isFetching, setIsFetching] = useState(false);

  const onSubmit = async (data: Record<string, string>) => {
    setIsFetching(true);
    const loginResult = await login({
      email: data.email,
      password: data.password,
    });

    if (!loginResult) {
      setIsFetching(false);
    }
  };

  return (
    <AuthLayout>
      <form className={styles.loginBox} onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("email")}
          placeholder="Email"
          type="email"
          className={`${styles.authInput} ${
            errors.email ? styles.authInputError : ""
          }`}
        />
        <div className="errorValidationText">{errors.email?.message}</div>
        <input
          {...register("password")}
          placeholder="Password"
          type="password"
          className={`${styles.authInput} ${
            errors.password ? styles.authInputError : ""
          }`}
        />
        <div className="errorValidationText">{errors.password?.message}</div>
        <div className={styles.authWrapper}>
          <button
            className={styles.loginButton}
            disabled={isFetching}
            type="submit"
          >
            {isFetching ? "Loading" : "Log In"}
          </button>
          <button className={styles.loginRegisterButton}>
            <Link to="/register">
              {isFetching ? "Loading" : "Create a New Account"}
            </Link>
          </button>
        </div>
      </form>
    </AuthLayout>
  );
};
