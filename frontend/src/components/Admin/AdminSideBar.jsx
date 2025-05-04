/*
 * @Date: 2025-05-04 11:32:29
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-05-04 11:53:07
 * @FilePath: /E-Commerce-Rabbit/frontend/src/components/Admin/AdminSideBar.jsx
 */
import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaUser,
  FaBoxOpen,
  FaClipboardList,
  FaStore,
  FaSignOutAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const AdminSideBar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };
  return (
    <div className="p-6">
      <div className="mb-6">
        <Link to="/admin" className="text-2xl font-medium">
          Rabbit
        </Link>
      </div>

      <h2 className="mb-6 text-xl font-medium text-center">Admin Dashboard</h2>
      {/* 导航栏 */}
      <nav className="flex flex-col space-y-2">
        {/* - 可以根据当前路由是否匹配来添加激活样式
            - 通过 className 函数可以动态设置样式
            - 比普通的 Link 更适合用于导航菜单 */}
        <NavLink
          to="/admin/users"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-700 text-white py-3 px-4  rounded flex items-center space-x-2"
              : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
          }>
          <FaUser />
          <span>User</span>
        </NavLink>

        <NavLink
          to="/admin/products"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-700 text-white py-3 px-4  rounded flex items-center space-x-2"
              : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
          }>
          <FaBoxOpen />
          <span>Products</span>
        </NavLink>

        <NavLink
          to="/admin/orders"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-700 text-white py-3 px-4  rounded flex items-center space-x-2"
              : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
          }>
          <FaClipboardList />
          <span>Orders</span>
        </NavLink>

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-700 text-white py-3 px-4  rounded flex items-center space-x-2"
              : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
          }>
          <FaStore />
          <span>Shop</span>
        </NavLink>
      </nav>

      {/* handleLogout */}
      <div className="mt-6">
        <button
          type="button"
          onClick={handleLogout}
          className="flex justify-center items-center px-4 py-2 space-x-2 w-full text-white bg-red-500 rounded hover:bg-red-600">
          <FaSignOutAlt />
          <span>LogOut</span>
        </button>
      </div>
    </div>
  );
};

export default AdminSideBar;
