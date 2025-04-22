/*
 * @Date: 2025-04-21 20:09:43
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-04-22 21:27:52
 * @FilePath: /E-Commerce-Rabbit/frontend/src/components/Common/Header.jsx
 */
import React from "react";
import Topbar from "../Layout/Topbar";
import Navbar from "../Common/Navbar";

const Header = () => {
  return (
    <>
      <div>
        {/* top bar */}
        <Topbar />
        {/* navbar */}
        <Navbar />
        {/* cart drawer */}
      </div>
    </>
  );
};

export default Header;
