/*
 * @Date: 2025-04-29 20:44:35
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-05-10 14:55:07
 * @FilePath: /E-Commerce-Rabbit/frontend/src/components/Products/Register.jsx
 */
/*
 * @Date: 2025-04-29 20:44:35
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-04-29 21:11:05
 * @FilePath: /E-Commerce-Rabbit/frontend/src/components/Products/Login.jsx
 */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import RegisterImage from "@/assets/register.webp";
import { registerUser } from "@/redux/slices/authSlice";
import { useDispatch } from "react-redux";
// 登录页面
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      registerUser({
        name,
        email,
        password,
      }),
    );
    //todo: 注册逻辑成功后？
    // 清空输入框
    setEmail("");
    setPassword("");
    setName("");
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
              SignUp
            </button>
            <p className="mt-6 text-sm text-center">
              Already have an account?{"     "}
              <Link to="/register" className="text-blue-500">
                Login
              </Link>
            </p>
            {/* TODO: */}
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
