/*
 * @Date: 2025-04-25 19:25:13
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-04-25 20:49:42
 * @FilePath: /E-Commerce-Rabbit/frontend/src/components/Common/Footer.jsx
 */
import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";
import { Link } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
const Footer = () => {
  return (
    <>
      <footer className="py-12 border-t">
        {/* mobile grids小屏1列 大屏4列 */}

        <div className="container grid grid-cols-1 gap-8 px-4 mx-auto md:grid-cols-4 lg:px-0">
          {/* grid1 */}
          <div>
            <h3 className="mb-4 text-lg text-gray-800">NewsLetter</h3>
            <p className="mb-4 text-gray-500">
              Be the first one who knows about the latest products,exclusive
              offers and more.
            </p>
            <p className="mb-6 text-sm font-medium text-gray-600">
              {" "}
              Sign up and get 10% off on your first order
            </p>

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
              <button
                type="submit"
                className="px-6 py-3 text-sm text-white bg-black rounded-r-md transition-all hover:bg-gray-800">
                Subscribe
              </button>
            </form>
          </div>

          {/* grid2 */}
          {/* Shopping links */}
          <div>
            <h3 className="mb-4 text-lg text-gray-800">Shop</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link to="#" className="transition-colors hover:text-gray-500">
                  Men's Top Wear
                </Link>
              </li>
              <li>
                <Link to="#" className="transition-colors hover:text-gray-500">
                  Women's Top Wear
                </Link>
              </li>
              <li>
                <Link to="#" className="transition-colors hover:text-gray-500">
                  Men's Bottom Wear
                </Link>
              </li>
              <li>
                <Link to="#" className="transition-colors hover:text-gray-500">
                  Women's Bottom Wear
                </Link>
              </li>
            </ul>
          </div>

          {/* grid3 */}
          {/* Support links */}
          <div>
            <h3 className="mb-4 text-lg text-gray-800">Support</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link to="#" className="transition-colors hover:text-gray-500">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="#" className="transition-colors hover:text-gray-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="transition-colors hover:text-gray-500">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="#" className="transition-colors hover:text-gray-500">
                  Features
                </Link>
              </li>
            </ul>
          </div>

          {/* grid4 */}
          {/* Follow us */}
          <div>
            <h3 className="mb-4 text-lg text-gray-800">Follow Us</h3>
            <div className="flex items-center mb-6 space-x-4">
              {/* noopener: 新页面无法访问父页面。
              noreferrer: 不发送来源页面的 URL 信息。 */}
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopner noreferrer">
                {/* facebooks */}
                <TbBrandMeta className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopner noreferrer">
                {/* facebooks */}
                <IoLogoInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopner noreferrer">
                {/* facebooks */}
                <RiTwitterXLine className="w-5 h-5" />
              </a>
            </div>

            {/* call us */}
            <p className="text-gray-500">Call Us</p>
            <p>
              <FiPhoneCall className="inline-block mr-2" />
              0123-456-789
            </p>
          </div>
        </div>
        
        {/* footer bottom */}
        <div className="container px-4 pt-6 mx-auto mt-12 border-t border-gray-200 lg:px-0">
          {/* option+G */}
          <p className="text-sm tracking-tighter text-center text-gray-500">
            © 2025,CompileTab. All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
