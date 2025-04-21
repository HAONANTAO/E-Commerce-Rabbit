/*
 * @Date: 2025-04-21 20:11:01
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-04-21 20:32:29
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
      <div className="bg-[#ea2e0e] text-white">
        {/* container + mx-auto = 自动响应式宽度 + 水平居中 */}
        <div className="container mx-auto flex justify-between items-center py-3 px-4">
          {/* clickable icons and routes */}
          {/* 自适应 小屏隐藏 */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://facebook.com/"
              target="_blank"
              // safety 安全性优化
              rel="noopener noreferrer"
              className="hover:text-gray-300">
              {/* Meta（Facebook 母公司）品牌 logo。 */}
              <TbBrandMeta className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300">
              {/* Instagram logo。 */}
              <IoLogoInstagram className="h-4 w-4" />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300">
              {/* Twitter  logo。 */}
              <FaTwitter className="h-4 w-4" />
            </a>
            <a
              href="https://weixin.qq.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300">
              {/* wechat logo。 */}
              <IoLogoWechat className="h-4 w-4" />
            </a>
          </div>
          {/* flex-grow为了小屏居中显示 */}
          <div className="text-sm text-center flex-grow">
            <span>We Ship worldwide - Fast and Reliable Shipping!</span>
          </div>
          <div className="text-sm hidden md:block ">
            {/* face time */}
            <a href="tel:+123456789" className="hover:text-blue-300">
              123-456-789
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
