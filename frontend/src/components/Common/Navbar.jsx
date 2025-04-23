/*
 * @Date: 2025-04-21 20:49:04
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-04-23 21:31:01
 * @FilePath: /E-Commerce-Rabbit/frontend/src/components/Common/Navbar.jsx
 */
import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineUser, HiOutlineShoppingBag } from "react-icons/hi";
import { HiBars3BottomRight } from "react-icons/hi2";
import Searchbar from "./Searchbar";
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
          <Link
            to="#"
            className="text-sm font-medium text-gray-700 uppercase hover:text-black">
            Women
          </Link>
          <Link
            to="#"
            className="text-sm font-medium text-gray-700 uppercase hover:text-black">
            Top Wear
          </Link>
          <Link
            to="#"
            className="text-sm font-medium text-gray-700 uppercase hover:text-black">
            Bottom Wear
          </Link>
        </div>

        {/* right section for icons */}
        <div className="flex items-center space-x-4">
          {/* profile router */}
          <Link to="/profile" className="hover:text-black">
            <HiOutlineUser className="w-6 h-6 text-gray-700"></HiOutlineUser>
          </Link>

          <button className="relative hover:text-black">
            <HiOutlineShoppingBag className="w-6 h-6 text-gray-700"></HiOutlineShoppingBag>
            {/* !TODO:responsive display according to the items in the bags */}
            <span className="absolute -top-1  px-2 py-0.5 text-xs text-white rounded-full bg-e-red">
              5
            </span>
          </button>

          {/* Search bar */}

          <Searchbar />

          {/* 拓展按键 只在小屏幕展示 */}
          <button className="md:hidden">
            <HiBars3BottomRight className="w-6 h-6 text-gray-700"></HiBars3BottomRight>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
