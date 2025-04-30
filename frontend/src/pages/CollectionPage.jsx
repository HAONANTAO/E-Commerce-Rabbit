/*
 * @Date: 2025-04-29 22:17:20
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-04-30 20:14:43
 * @FilePath: /E-Commerce-Rabbit/frontend/src/pages/CollectionPage.jsx
 */
import React, { useEffect, useRef, useState } from "react";
import { topWearsWomen } from "@/utils/mockdb.js";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "@/components/Products/FilterSidebar";
const CollectionPage = () => {
  const [products, setProducts] = useState([]);
  const SidebarRef = useRef(null);
  // 点按钮打开 点击其他关闭
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  // 点击外面关闭sidebar
  const handleClickOutside = (e) => {
    // 事件是否发生在 Sidebar 组件外
    if (SidebarRef.current && !SidebarRef.current.contains(e.target)) {
      setIsSidebarOpen(false);
    }
  };
  useEffect(() => {
    // add event listener for clicks
    document.addEventListener("mousedown", handleClickOutside);
  }, []);
  useEffect(() => {
    // 模拟后端拿数据
    setTimeout(() => {
      setProducts(topWearsWomen);
    }, 1000);
  }, []);
  return (
    <div className="flex flex-col lg:flex-row">
      {/* mobile filter button */}
      <button
        type="button"
        className="flex justify-center items-center px-2 border lg:hidden">
        <FaFilter className="mr-2" />
      </button>

      {/* filter sidebar */}
      <div ref={SidebarRef}>
        <FilterSidebar />
      </div>
    </div>
  );
};

export default CollectionPage;
