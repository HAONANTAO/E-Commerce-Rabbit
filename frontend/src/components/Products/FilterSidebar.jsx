/*
 * @Date: 2025-04-30 20:08:25
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-04-30 22:01:31
 * @FilePath: /E-Commerce-Rabbit/frontend/src/components/Products/FilterSidebar.jsx
 */
import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import {
  categories,
  genders,
  colors,
  sizes,
  materials,
  brands,
} from "@/utils/staticData.js";
const FilterSidebar = () => {
  const navigate = useNavigate();
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

  // 过滤条件改变
  const handleFilterChange = (e) => {
    // 解构赋值
    const { name, value, checked, type } = e.target;
    // {name: 'category', value: 'Top Wear', checked: true, type: 'radio'}

    let newFilter = { ...filter };
    // 多选框有多个数值存下来
    if (type === "checkbox") {
      if (checked) {
        newFilter[name] = [...newFilter[name], value];
      } else {
        // 是多选框 但是不checked 就把它从数组中删除
        newFilter[name] = newFilter[name].filter((item) => item !== value);
      }
    } // 单选框 只要一个
    else {
      newFilter[name] = value;
    }
    // 重置filterOptions内容
    setFilter(newFilter);
    updateURLParams(newFilter);
  };

  // 创建URL过滤参数
  const updateURLParams = (newFilters) => {
    const params = new URLSearchParams();
    // 遍历所有键值对的keyValue
    Object.keys(newFilters).forEach((key) => {
      // 如果是数组 就用逗号连接
      if (Array.isArray(newFilters[key]) && newFilters[key].length > 0) {
        // set是覆盖
        params.append(key, newFilters[key].join(","));
      } else {
        params.append(key, newFilters[key]);
      }
    });
    //  setSearchParams() ： 用于更新 URL 中的查询参数。
    setSearchParams(params);

    console.log(params);
    // 跳转路由URL
    // %2C = ","
    //localhost:5173/collections/all?category=Top+Wear&gender=&color=&size=XS%2CS&material=&brand=&minPrice=0&maxPrice=100
    http: navigate(`?${params.toString()}`);
  };
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
        <label className="block mb-2 font-medium text-gray-600">Category</label>
        {categories.map((category, index) => (
          <div key={category} className="flex items-center mb-1">
            {/* 单选框 */}
            <input
              type="radio"
              name="category"
              checked={filter.category === category}
              value={category}
              onChange={handleFilterChange}
              className="mr-2 w-4 h-4 text-blue-500 border-gray-300 focus:ring-blue-400"
            />
            <span className="text-gray-700">{category}</span>
          </div>
        ))}
      </div>

      {/* gender filter */}
      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-600">Gender</label>
        {genders.map((gender, index) => (
          <div key={gender} className="flex items-center mb-1">
            {/* 单选框 */}
            <input
              type="radio"
              checked={filter.gender === gender}
              name="gender"
              value={gender}
              onChange={handleFilterChange}
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
              type="button"
              name="color"
              value={color}
              onClick={handleFilterChange}
              // - 添加白色内边框 border-2 border-white 添加蓝色外轮廓 outline outline-2 outline-blue-500
              className={`w-8 h-8 rounded-full transition cursor-pointer hover:scale-105 ${
                filter.color === color
                  ? "border-2 border-white outline outline-2 outline-blue-500"
                  : "border border-gray-300"
              }`}
              style={{ backgroundColor: color.toLowerCase() }}
            />
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
              checked={filter.size.includes(size)}
              name="size"
              value={size}
              onChange={handleFilterChange}
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
              checked={filter.material.includes(material)}
              name="material"
              value={material}
              onChange={handleFilterChange}
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
              checked={filter.brand.includes(brand)}
              name="brand"
              value={brand}
              onChange={handleFilterChange}
              className="mr-2 w-4 h-4 text-blue-500 border-gray-300 focus:ring-blue-400"
            />
            <span className="text-gray-700">{brand}</span>
          </div>
        ))}
      </div>

      {/* Price Range filter */}
      <div className="mb-8">
        <label className="block mb-2 font-medium text-gray-600">
          Price Range
        </label>
        {/* 范围 */}
        {/* 如果不使用 appearance-none ：
        - Chrome 会显示蓝色的滑块
        - Firefox 会显示灰色的滑块
        - Safari 会有自己的样式
        使用后：移除所有默认样式 */}
        <input
          type="range"
          name="priceRange"
          min={0}
          max={100}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between mt-2 text-gray-600">
          <span>$0</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
