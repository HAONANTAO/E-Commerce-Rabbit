/*
 * @Date: 2025-04-29 22:17:20
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-04-30 20:07:08
 * @FilePath: /E-Commerce-Rabbit/frontend/src/pages/CollectionPage.jsx
 */
import React, { useEffect, useState } from "react";
import { topWearsWomen } from "@/utils/mockdb.js";
import { FaFilter } from "react-icons/fa";
const CollectionPage = () => {
  const [products, setProducts] = useState([]);

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
        <FaFilter className="mr-2"/>
      </button>

      {/* filter sidebar */}
      <div>
        
      </div>
    </div>
  );
};

export default CollectionPage;
