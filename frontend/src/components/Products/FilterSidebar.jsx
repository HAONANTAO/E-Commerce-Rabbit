/*
 * @Date: 2025-04-30 20:08:25
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-04-30 21:20:35
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

      {/* Category filter */}
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

      {/* gender filter */}
      <div className="mb-6">
        <label htmlFor="" className="block mb-2 font-medium text-gray-600">
          Gender
        </label>
        {genders.map((gender, index) => (
          <div key={gender} className="flex items-center mb-1">
            {/* 单选框 */}
            <input
              type="radio"
              name="gender"
              className="mr-2 w-4 h-4 text-blue-500 border-gray-300 focus:ring-blue-400"
            />
            <span className="text-gray-700">{gender}</span>
          </div>
        ))}
      </div>

      {/* colors filter */}
      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-600">Color</label>
        {/* flex-wrap : 允许项目在空间不足时换行 */}
        <div className="flex flex-wrap gap-2">
          {colors.map((color, index) => (
            <button
              key={color}
              name="color"
              className="w-8 h-8 rounded-full border border-gray-300 transition cursor-pointer hover:scale-105"
              style={{ backgroundColor: color.toLowerCase() }}></button>
          ))}
        </div>
      </div>

      {/* Size filter */}
      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-600">Size</label>
        {sizes.map((size, index) => (
          <div className="flex items-center mb-1" key={size}>
            {/* 多选框 */}
            <input
              type="checkbox"
              name="size"
              value=""
              className="mr-2 w-4 h-4 text-blue-500 border-gray-300 focus:ring-blue-400"
            />
            <span className="text-gray-700">{size}</span>
          </div>
        ))}
      </div>

      {/* Material filter */}
      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-600">Material</label>
        {materials.map((material, index) => (
          <div className="flex items-center mb-1" key={material}>
            {/* 多选框 */}
            <input
              type="checkbox"
              name="material"
              value=""
              className="mr-2 w-4 h-4 text-blue-500 border-gray-300 focus:ring-blue-400"
            />
            <span className="text-gray-700">{material}</span>
          </div>
        ))}
      </div>

      {/* Brand filter */}
      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-600">Brand</label>
        {brands.map((brand, index) => (
          <div className="flex items-center mb-1" key={brand}>
            {/* 多选框 */}
            <input
              type="checkbox"
              name="brand"
              value=""
              className="mr-2 w-4 h-4 text-blue-500 border-gray-300 focus:ring-blue-400"
            />
            <span className="text-gray-700">{brand}</span>
          </div>
        ))}
      </div>

      {/* Price Range filter */}
      
    </div>
  );
};

export default FilterSidebar;
