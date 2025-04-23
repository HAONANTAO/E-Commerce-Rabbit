/*
 * @Date: 2025-04-21 20:09:43
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-04-23 21:48:35
 * @FilePath: /E-Commerce-Rabbit/frontend/src/components/Common/Header.jsx
 */
import React from "react";
import Topbar from "../Layout/Topbar";
import Navbar from "../Common/Navbar";

const Header = () => {
  return (
    <header className="border-b border-gray-200">
      <div>
        {/* top bar */}
        <Topbar />
        {/* navbar */}
        <Navbar />
        {/* cart drawer */}
      </div>
    </header>
  );
};

export default Header;
