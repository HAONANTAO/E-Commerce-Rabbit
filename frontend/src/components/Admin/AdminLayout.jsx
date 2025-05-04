/*
 * @Date: 2025-05-03 15:03:54
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-05-04 11:27:22
 * @FilePath: /E-Commerce-Rabbit/frontend/src/components/Admin/AdminLayout.jsx
 */
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

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
    </div>
  );
};

export default AdminLayout;
