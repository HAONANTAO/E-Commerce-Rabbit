/*
 * @Date: 2025-04-21 20:49:04
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-04-25 19:12:25
 * @FilePath: /E-Commerce-Rabbit/frontend/src/components/Common/Navbar.jsx
 */
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineUser, HiOutlineShoppingBag } from "react-icons/hi";
import { HiBars3BottomRight } from "react-icons/hi2";
import Searchbar from "./Searchbar";
import CartDrawer from "../Layout/CartDrawer";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCartDrawer = () => {
    setIsCartOpen(!isCartOpen);
  };
  // 给小屏按钮显示cart点击的
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };
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

          <button
            onClick={toggleCartDrawer}
            className="relative hover:text-black">
            <HiOutlineShoppingBag className="w-6 h-6 text-gray-700"></HiOutlineShoppingBag>
            {/* TODO:responsive display according to the items in the bags  */}
            <span className="absolute -top-1  px-2 py-0.5 text-xs text-white rounded-full bg-e-red">
              5
            </span>
          </button>

          {/* Search bar */}

          <Searchbar />

          {/* 拓展按键 只在小屏幕展示 */}
          <button onClick={toggleNavDrawer} className="md:hidden">
            <HiBars3BottomRight className="w-6 h-6 text-gray-700"></HiBars3BottomRight>
          </button>
        </div>
      </nav>
      <CartDrawer isOpen={isCartOpen} toggleDrawer={toggleCartDrawer} />

      {/* mobile navigation  */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 3 h-full bg-white  shadow-lg transform transition-transform duration-300 z-999 ${
          navDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
        <div className="flex justify-end p-4">
          <button>
            <IoMdClose
              onClick={() => {
                setNavDrawerOpen(false);
              }}
              className="w-6 h-6 text-gray-600"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
