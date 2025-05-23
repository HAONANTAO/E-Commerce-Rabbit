/*
 * @Date: 2025-04-29 21:30:33
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-05-11 12:52:01
 * @FilePath: /E-Commerce-Rabbit/frontend/src/pages/Profile.jsx
 */
import React, { useEffect } from "react";
import MyOrderPage from "./MyOrderPage";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/slices/cartSlice";
import { logout } from "../redux/slices/authSlice.js";
const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    // 函数稳定性
  }, [user, navigate]);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearCart());
    navigate("/login");
  };
  return (
    <div className="flex flex-col min-h-screen">
      {/* flex-grow 会让这个元素占据父元素中所有可用的剩余空间 */}
      <div className="container flex-grow p-4 mx-auto md:p-6">
        <div className="flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0">
          {/* left section */}
          <div className="p-6 w-full rounded-lg shadow-md md:w-1/3 lg:w-1/4">
            <h1 className="mb-4 text-2xl font-bold md:text-3xl">
              {user?.name}
            </h1>
            <p className="mb-4 text-lg text-gray-600">{user?.email}</p>
            <button
              onClick={handleLogout}
              type="button"
              className="px-4 py-2 w-full text-white bg-red-500 rounded hover:bg-red-600 00">
              LogOut
            </button>
          </div>

          {/* right section */}
          <div className="w-full md:w-2/3 lg:w-3/4">
            <MyOrderPage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
