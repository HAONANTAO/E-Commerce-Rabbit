/*
 * @Date: 2025-04-29 20:44:35
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-05-13 21:16:36
 * @FilePath: /E-Commerce-Rabbit/frontend/src/components/Products/Register.jsx
 */
/*
 * @Date: 2025-04-29 20:44:35
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-04-29 21:11:05
 * @FilePath: /E-Commerce-Rabbit/frontend/src/components/Products/Login.jsx
 */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RegisterImage from "@/assets/register.webp";
import { registerUser } from "@/redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

import { mergeCart } from "../../redux/slices/cartSlice";

// 登录页面
const Register = () => {
  // - 用于向 Redux store 发送 action   -触发状态更新;
  const dispatch = useDispatch();

  const navigate = useNavigate();
  // 获取当前页面的 URL 信息
  const location = useLocation();
  const { user, guestId, loading, error } = useSelector((state) => state.auth);

  const { cart } = useSelector((state) => state.cart);
  // get the redirect parameter and check if it is checkout or something
  // 看看是checkout跳转过来的还是单纯地登录！
  const redirect = new URLSearchParams(location.search).get("redirect") || "/";
  // 看看是不是checkout跳转过来的
  const isCheckoutRedirect = redirect.includes("checkout");

  // 保证购物车合并和页面跳转的正确性。
  useEffect(() => {
    if (user) {
      // user和guest的信息都有 需要合并购物车！
      if (cart?.products.length > 0 && guestId) {
        dispatch(mergeCart({ guestId, user })).then(() => {
          navigate(isCheckoutRedirect ? "/checkout" : "/");
        });
      } else {
        navigate(isCheckoutRedirect ? "/checkout" : "/");
      }
    }
  }, [user, guestId, cart, redirect, isCheckoutRedirect, navigate, dispatch]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      registerUser({
        name,
        email,
        password,
      }),
    );
    // 注册逻辑成功后 会自动跳转 因为useeffect
    // 无所谓清空输入框
    // setEmail("");
    // setPassword("");
    // setName("");
  };
  return (
    <>
      <div className="flex">
        <div className="flex flex-col justify-center items-center p-8 w-full md:w-1/2 md:p-12">
          {/* 主页面 */}
          <form
            className="p-8 w-full max-w-md bg-white rounded-lg border shadow-sm"
            onSubmit={handleSubmit}>
            <div className="flex justify-center mb-6">
              <h2 className="text-xl font-medium">Rabbit</h2>
            </div>
            <h2 className="mb-6 text-2xl font-bold text-center">
              Hey there! 👋
            </h2>
            <p className="mb-6 text-center">
              Enter your email and password to login.
            </p>
            {/* Name */}
            <div className="mb-4">
              <label htmlFor="" className="block mb-2 text-sm font-semibold">
                Name
              </label>
              <input
                type="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-2 w-full rounded border"
                placeholder="Enter your name..."
              />
            </div>
            {/* email */}
            <div className="mb-4">
              {/* 用于为表单控件（如输入框、复选框等）创建说明标签。 */}

              <label htmlFor="" className="block mb-2 text-sm font-semibold">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 w-full rounded border"
                placeholder="Enter your email..."
              />
            </div>

            {/* password */}
            <div className="mb-4">
              <label htmlFor="" className="block mb-2 text-sm font-semibold">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-2 w-full rounded border"
                placeholder="Enter your password..."
              />
            </div>

            {/*   SignIn button */}
            <button
              className="p-2 w-full font-semibold text-white bg-black rounded-lg transition hover:bg-gray-700"
              type="submit">
              {loading ? "loading..." : "SignUp"}
            </button>
            <p className="mt-6 text-sm text-center">
              Already have an account?{"     "}
              <Link
                to={`/login?redirect=${encodeURIComponent(redirect)}`}
                className="text-blue-500">
                Login
              </Link>
            </p>
          </form>
        </div>

        {/* mobile version hidden */}
        <div className="hidden w-1/2 bg-gray-800 md:block">
          <div className="flex flex-col justify-center items-center h-full">
            <img
              src={RegisterImage}
              alt="Register a account"
              className="h-[750px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
