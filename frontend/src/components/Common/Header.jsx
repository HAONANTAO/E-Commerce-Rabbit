/*
 * @Date: 2025-04-21 20:09:43
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-04-21 20:53:30
 * @FilePath: /E-Commerce-Rabbit/frontend/src/components/Common/Header.jsx
 */
import React from "react";
import Topbar from "../Layout/Topbar";
import Navbar from "../Common/Navbar";

const Header = () => {
  return (
    <>
      <Header>
        {/* top bar */}
        <Topbar />
        {/* navbar */}
        <Navbar />
        {/* cart drawer */}
      </Header>
    </>
  );
};

export default Header;
