/*
 * @Date: 2025-04-20 21:54:41
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-04-26 18:37:58
 * @FilePath: /E-Commerce-Rabbit/frontend/src/components/Layout/UserLayout.jsx
 */
import React from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import { Outlet } from "react-router-dom";
const Userlayout = () => {
  return (
    <>
      {/* header */}
      <Header />
      {/* main content */}
      <main>
        {/* <Outlet /> 是 React Router 中的一个组件，用于在父路由组件中指定子路由内容的渲染位置。 */}
        <Outlet />
      </main>
      {/* footer */}
      <Footer />
    </>
  );
};

export default Userlayout;
