/*
 * @Date: 2025-05-04 11:32:29
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-05-04 11:45:27
 * @FilePath: /E-Commerce-Rabbit/frontend/src/components/Admin/AdminSideBar.jsx
 */
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
const AdminSideBar = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <Link to="/admin" className="text-2xl font-medium">
          Rabbit
        </Link>
      </div>

      <h2 className="mb-6 text-xl font-medium text-center">Admin Dashboard</h2>
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
      </nav>
    </div>
  );
};

export default AdminSideBar;
