/*
 * @Date: 2025-04-21 20:49:04
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-04-21 21:05:02
 * @FilePath: /E-Commerce-Rabbit/frontend/src/components/Common/Navbar.jsx
 */
import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="container flex justify-between items-center px-6 py-4 mx-auto">
        {/* left - logo */}
        <div>
          <Link to="/" className="text-2xl font-medium">
            E-Commerce Rabbit
          </Link>
        </div>

        {/* center navigation links */}
        <div className="hidden space-x-4 md:flex">
          <Link
            to="#"
            className="text-sm font-medium text-gray-700 uppercase hover:text-black">
            Men
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
