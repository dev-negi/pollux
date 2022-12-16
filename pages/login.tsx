import Link from "next/link";
import { useState } from "react";

import Layout from "../components/Layout";
import useForm from "../hooks/useForm";
import { loginValidation } from "../utils";

function LoginPage() {
    
  function login() {
    setLoggedIn(true);
  }
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    loginValidation
  );
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Layout title="Login">
      <form
        className="mx-auto max-w-screen-md"
        onSubmit={handleSubmit}
        noValidate
      >
        <h1 className="mb-4 text-xl">Login</h1>
        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <input
            autoComplete="off"
            type="email"
            name="email"
            className="w-full"
            id="email"
            onChange={handleChange}
            required
            autoFocus
          ></input>
          {errors.email && <p className="red">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="w-full"
            id="password"
            onChange={handleChange}
            required
            autoFocus
          ></input>
          {errors.password && <p className="red">{errors.password}</p>}
        </div>
        <div className="mb-4">
          <button type="submit">Login</button>
        </div>
        <div className="mb-4">
          Don&apos;t have an account ? &nbsp;
          <Link href="register">Register</Link>
        </div>
      </form>
    </Layout>
  );
}

export default LoginPage;
