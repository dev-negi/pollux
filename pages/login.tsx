import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import Layout from "../components/Layout";
import useForm from "../hooks/useForm";
import useToaster from "../hooks/useToaster";
import {
  addToToastList,
  removeFromToastList,
  selectToastItems,
} from "../redux/toastSlice";

import { loginValidation, getRegisterError, showToaster } from "../utils";

function LoginPage() {
  const { showToaster } = useToaster();
  const toastCount = useSelector(selectToastItems);
  const [list, setList] = useState([]);
  const [position, setPosition] = useState("top-left");
  let [checkValue, setCheckValue] = useState(false);
  const [autoDeleteTime, setAutoDeleteTime] = useState(300);

  const router = useRouter();
  const { redirect } = router.query;
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    loginValidation
  );
  const { email, password } = values;
  async function login() {
    try {
      const { data } = await axios.post("/api/users/login", {
        email,
        password,
      });
      router.push(redirect || "/");
    } catch (error) {
      const errorMessage = getRegisterError(error);
      showToaster({
        id: toastCount.length + 1,
        message: errorMessage,
        type: "error",
        delay: 5000,
      });
    }
  }

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
