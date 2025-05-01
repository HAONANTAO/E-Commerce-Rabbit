/*
 * @Date: 2025-04-29 22:17:20
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-05-01 21:04:41
 * @FilePath: /E-Commerce-Rabbit/frontend/src/pages/CollectionPage.jsx
 */
import React, { useEffect, useRef, useState } from "react";
import { topWearsWomen } from "@/utils/mockdb.js";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "@/components/Products/FilterSidebar";
import SortOptions from "@/components/Products/SortOptions";
import ProductGrid from "@/components/Products/ProductGrid";
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
    // 返回清理函数
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
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
        onClick={toggleSidebar}
        className="flex justify-center items-center px-2 border lg:hidden">
        <FaFilter className="mr-2" /> Filters
      </button>

      {/* filter sidebar */}
      <div
        ref={SidebarRef}
        // translate-x-0 会在关闭的时候回到原位
        // 在侧边栏中使用 inset-y-0 的作用： 让侧边栏垂直方向撑满整个视口

        // - 小屏幕时：侧边栏可以滑入滑出（通过 translate-x-full 控制）
        // - 大屏幕时：侧边栏永远在左侧不会被隐藏不受 isSidebarOpen 状态影响
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 z-10 left-0 w-64 bg-white overflow-y-auto  transition-transform duration-300 lg:static lg:translate-x-0`}>
        <FilterSidebar />
      </div>
      <div className="flex-grow p-4">
        <h2 className="mb-4 text-2xl uppercase">All Collection</h2>

        {/* sortBy options */}
        <SortOptions />
        {/* products grid */}
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default CollectionPage;
