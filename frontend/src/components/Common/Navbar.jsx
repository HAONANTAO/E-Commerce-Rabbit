/*
 * @Date: 2025-04-21 20:49:04
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-05-11 14:28:45
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
import { useSelector } from "react-redux";
const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);
  // 把购物车里面每一种累的个数加起来算总量
  const cartItemCount =
    cart?.products?.reduce((total, product) => total + product.quantity, 0) ||
    0;
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
            to="/collections/all?gender=Men"
            className="text-sm font-medium text-gray-700 uppercase hover:text-black">
            Men
          </Link>
          <Link
            to="/collections/all?gender=Women"
            className="text-sm font-medium text-gray-700 uppercase hover:text-black">
            Women
          </Link>
          <Link
            to="/collections/all?category=Top Wear"
            className="text-sm font-medium text-gray-700 uppercase hover:text-black">
            Top Wear
          </Link>
          <Link
            to="/collections/all?category=Bottom Wear"
            className="text-sm font-medium text-gray-700 uppercase hover:text-black">
            Bottom Wear
          </Link>
        </div>

        {/* right section for icons */}
        <div className="flex items-center space-x-4">
          {/* profile router */}
          {user?.role === "admin" ? (
            <Link
              to="/admin"
              className="block px-2 text-sm text-white bg-black rounded">
              admin
            </Link>
          ) : (
            ""
          )}

          <Link to="/profile" className="hover:text-black">
            <HiOutlineUser className="w-6 h-6 text-gray-700"></HiOutlineUser>
          </Link>

          <button
            onClick={toggleCartDrawer}
            className="relative hover:text-black">
            <HiOutlineShoppingBag className="w-6 h-6 text-gray-700"></HiOutlineShoppingBag>
            {cartItemCount > 0 && (
              <span className="absolute -top-1  px-2 py-0.5 text-xs text-white rounded-full bg-e-red">
                {cartItemCount}
              </span>
            )}
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
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 3 h-full bg-white  shadow-lg transform transition-transform duration-300 z-10 ${
          // navDrawerisopen就在原地 不open就往左侧划出去
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
        {/* contents */}
        <div className="p-4">
          <h2 className="mb-4 text-xl font-semibold">Menu</h2>
          {/* H5语义化标签 */}
          <nav className="space-y-4">
            {/* 导航标签 */}
            {/* block为了横向显示 */}
            <Link
              to="/collections/all?gender=Men"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black">
              Men
            </Link>
            <Link
              to="/collections/all?gender=Women"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black">
              Women
            </Link>
            <Link
              to="/collections/all?category=Top Wear"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black">
              TopWear
            </Link>
            <Link
              to="/collections/all?category=Bottom Wear"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black">
              BottomWear
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
