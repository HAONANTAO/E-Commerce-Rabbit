/*
 * @Date: 2025-04-21 20:11:01
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-04-25 20:35:28
 * @FilePath: /E-Commerce-Rabbit/frontend/src/components/Layout/Topbar.jsx
 */
import React from "react";
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { IoLogoWechat } from "react-icons/io5";
const Topbar = () => {
  return (
    <>
      <div className="text-white bg-e-red">
        {/* container + mx-auto = 自动响应式宽度 + 水平居中 */}
        <div className="container flex justify-between items-center px-4 py-3 mx-auto">
          {/* clickable icons and routes */}
          
          {/* 自适应 小屏隐藏 */}
          <div className="hidden items-center space-x-4 md:flex">
            <a
              href="https://facebook.com/"
              target="_blank"
              // safety 安全性优化
              rel="noopener noreferrer"
              className="hover:text-gray-300">
              {/* Meta（Facebook 母公司）品牌 logo。 */}
              <TbBrandMeta className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300">
              {/* Instagram logo。 */}
              <IoLogoInstagram className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300">
              {/* Twitter  logo。 */}
              <FaTwitter className="w-4 h-4" />
            </a>
            <a
              href="https://weixin.qq.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300">
              {/* wechat logo。 */}
              <IoLogoWechat className="w-4 h-4" />
            </a>
          </div>
          {/* flex-grow为了小屏居中显示 */}
          <div className="flex-grow text-sm text-center">
            <span>We Ship worldwide - Fast and Reliable Shipping!</span>
          </div>
          <div className="hidden text-sm md:block">
            {/* face time */}
            <a href="tel:+123456789" className="hover:text-blue-300">
              +(61)123-456-789
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
