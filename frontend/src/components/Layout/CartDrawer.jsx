/*
 * @Date: 2025-04-23 21:51:05
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-04-23 21:58:37
 * @FilePath: /E-Commerce-Rabbit/frontend/src/components/Layout/CartDrawer.jsx
 */
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
// 购物车列表
const CartDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
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
        CartDrawer
      </div>
      ;
    </>
  );
};

export default CartDrawer;
