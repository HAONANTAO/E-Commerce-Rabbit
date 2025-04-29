/*
 * @Date: 2025-04-29 20:44:35
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-04-29 20:54:00
 * @FilePath: /E-Commerce-Rabbit/frontend/src/components/Products/Login.jsx
 */
import React, { useState } from "react";

// 登录页面
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div className="flex">
        <div className="flex flex-col justify-center p-8 w-full md:w-1/2 md:p-12">
          {/* 主页面 */}
          <form className="p-8 w-full max-w-md bg-white rounded-lg border shadow-sm">
            <div className="flex justify-center mb-6">
              <h2 className="text-xl font-medium">Rabbit</h2>
            </div>
            <h2 className="mb-6 text-2xl font-bold text-center">
              Hey there! 👋
            </h2>
            <p className="mb-6 text-center">
              Enter your email and password to login.
            </p>

            {/* email */}
            <div className="mb-4">
              {/* 用于为表单控件（如输入框、复选框等）创建说明标签。 */}

              <label for="" className="block mb-2 text-sm font-semibold">
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
              <label for="" className="block mb-2 text-sm font-semibold">
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
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
