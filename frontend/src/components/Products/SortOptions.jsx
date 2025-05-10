/*
 * @Date: 2025-04-30 20:29:03
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-05-01 20:34:31
 * @FilePath: /E-Commerce-Rabbit/frontend/src/components/Products/SortOptions.jsx
 */
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const SortOptions = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleSortChange = (e) => {
    const sortBy = e.target.value;
    searchParams.set("sortBy", sortBy);
    setSearchParams(searchParams); // Update the searchParams stat
  };
  return (
    <div className="flex justify-end items-center mb-4">
      {/* 下拉选择框元素 */}
      {/* 除默认的浏览器焦点轮廓 */}
      <select
        id="sort"
        className="p-2 rounded-md border focus:outline-none"
        onChange={handleSortChange}
        // 避免拿到null
        value={searchParams.get("sortBy") || ""}>
        <option value="">Default</option>
        <option value="priceAsc">Price: Low to High </option>
        <option value="priceDesc">Price: High to Low</option>
        <option value="popularity">Popularity</option>
      </select>
    </div>
  );
};

export default SortOptions;
