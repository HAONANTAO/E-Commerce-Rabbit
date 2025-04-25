/*
 * @Date: 2025-04-25 19:25:13
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-04-25 19:37:33
 * @FilePath: /E-Commerce-Rabbit/frontend/src/components/Common/Footer.jsx
 */
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="py-12 border-t">
        {/* mobile小屏1列 大屏4列 */}
        <div className="container grid grid-cols-1 mx-auto md:grid-cols-4"></div>
      </footer>
      ;
    </>
  );
};

export default Footer;
