/*
 * @Date: 2025-05-03 15:03:54
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-05-04 11:39:13
 * @FilePath: /E-Commerce-Rabbit/frontend/src/components/Admin/AdminLayout.jsx
 */
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import AdminSideBar from "./AdminSideBar";
import { Outlet } from "react-router-dom";
const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="flex relative flex-col min-h-screen md:flex-row">
      {/* mobile toggle button */}
      <div className="flex z-20 p-4 text-white bg-gray-900 md:hidden">
        <button type="button" onClick={toggleSidebar}>
          {/* 侧边栏按钮 */}
          <FaBars size={24} />
        </button>{" "}
        <h1 className="ml-4 text-xl font-medium">Admin Dashboard</h1>
      </div>

      {/* 覆盖层overlay for mobile sidebar */}
      {/* inset-0 四个方向都设为 0 */}
      {/* 为了点开后点击可以回去的！ */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-10 bg-black bg-opacity-50 md:hidden"
          onClick={toggleSidebar}></div>
      )}

      {/*  // sidebar */}
      <div
        className={`bg-gray-900 w-64 min-h-screen text-white absolute md:relative transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:translate-x-0 md:static md:block z-20`}>
        <AdminSideBar />
      </div>

      {/* main content */}
      <div className="overflow-auto flex-grow p-6">
        {/* 其他字路由内容显示在这里！ */}
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
