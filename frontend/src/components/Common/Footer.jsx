/*
 * @Date: 2025-04-25 19:25:13
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-04-25 19:54:32
 * @FilePath: /E-Commerce-Rabbit/frontend/src/components/Common/Footer.jsx
 */
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="py-12 border-t">
        {/* mobile grids小屏1列 大屏4列 */}
        <div className="container grid grid-cols-1 gap-8 px-4 mx-auto md:grid-cols-4 lg:px-0">
          <div>
            <h3 className="mb-4 text-lg text-gray-800">NewsLetter</h3>
            <p className="mb-4 text-gray-500">
              Be the first one who knows about the latest products,exclusive
              offers and more.
            </p>
            <p> Sign up and get 10% off on your first order</p>

            {/* Newsletter form */}
            <form className="flex">
              <input
                type="email"
                placeholder="enter your email..."
                // rounded-l-md左侧圆角
                // transition-all: 当你对按钮的样式做改变时，变化会平滑过渡。
                // focus:outline-none: 获取焦点时，按钮不会显示默认的轮廓。
                // focus:ring-2 focus:ring-gray-500: 获取焦点时，按钮周围会有一个灰色的环形阴影。
                className="p-3 w-full text-sm rounded-l-md border-t border-b border-l border-gray-300 transition-all focus:outline-none focus:ring-2 focus:ring-gray-500"
                required
              />
            </form>
          </div>
        </div>
      </footer>
      ;
    </>
  );
};

export default Footer;
