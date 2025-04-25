/*
 * @Date: 2025-04-23 21:51:05
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-04-25 18:30:23
 * @FilePath: /E-Commerce-Rabbit/frontend/src/components/Layout/CartDrawer.jsx
 */
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
// 购物车列表
const CartDrawer = ({ isOpen, toggleDrawer }) => {
  return (
    <>
      {/* transform transition-transform 让你可以对元素使用例如旋转、缩放、位移、倾斜等效果 然后加上过渡动画 */}
      <div
        className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-1/4  h-full bg-white shadow-lg  duration-300 flex flex-col z-999 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        {/* close button */}
        <div className="flex justify-end p-4">
          <button onClick={toggleDrawer}>
            <IoMdClose className="w-6 h-6 text-gray-600 hover:text-gray-700"></IoMdClose>
          </button>
        </div>
        {/* Cart contents with scrolling */}
        <div className="overflow-y-auto flex-grow p-4">
          <h2 className="mb-4 text-xl font-semibold">Your Cart</h2>
          {/* components for cart contents */}
          {/* 添加测试内容 */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((item) => (
            <div key={item} className="p-4 mb-4 rounded border">
              测试商品 {item}
            </div>
          ))}
        </div>

        {/* checkout button fixed at bottom */}
        {/* sticky 为了可以在很多内容的时候
        这个结账区域会"粘住"在视图底部，不会随着内容滚动而消失*/}
        <div className="sticky bottom-0 p-4 bg-white">
          <button className="py-3 w-full font-semibold text-white bg-black rounded-lg transition hover:bg-gray-800">
            Checkout
          </button>
          {/* 「字母之间的间距（letter-spacing）」，
          而 tracking-tighter 就是：让字母之间更紧凑！ */}
          <p className="mt-2 text-sm font-normal tracking-tighter text-center text-gray-600">
            Shipping, taxes, and discount codes calculated at checkout
          </p>
        </div>
      </div>
      ;
    </>
  );
};

export default CartDrawer;
