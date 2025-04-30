/*
 * @Date: 2025-04-30 20:08:25
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-04-30 20:56:41
 * @FilePath: /E-Commerce-Rabbit/frontend/src/components/Products/FilterSidebar.jsx
 */
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  categories,
  genders,
  colors,
  sizes,
  materials,
  brands,
} from "@/utils/staticData.js";
const FilterSidebar = () => {
  // 专门用于处理 URL 中问号（?）后面的参数。
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 100,
  });
  const [priceRange, setPriceRange] = useState([0, 100]);

  // 设置可选择的过滤参数

  // 拿到过滤的具体数据
  useEffect(() => {
    // 2. Object.fromEntries() ： 将键值对数组转换为对象;
    // const params = {color: 'blue',size: 'L'}
    const params = Object.fromEntries([...searchParams]);
    setFilter({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: params.minPrice || 0,
      maxPrice: params.maxPrice || 100,
    });
    setPriceRange([0, params.maxPrice || 100]);
  }, [searchParams]);
  return (
    <div className="p-4">
      <h3 className="mb-4 text-xl font-medium text-gray-800">Filter</h3>

      {/* Category part */}
      <div className="mb-6">
        <label htmlFor="" className="block mb-2 font-medium text-gray-600">
          Category
        </label>
        {categories.map((category, index) => (
          <div key={category} className="flex items-center mb-1">
            {/* 单选框 */}
            <input
              type="radio"
              name="category"
              className="mr-2 w-4 h-4 text-blue-500 border-gray-300 focus:ring-blue-400"
            />
            <span className="text-gray-700">{category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterSidebar;
