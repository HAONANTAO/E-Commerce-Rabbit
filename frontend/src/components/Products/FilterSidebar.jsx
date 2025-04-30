/*
 * @Date: 2025-04-30 20:08:25
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-04-30 20:44:11
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

  useEffect(() => {}, []);
  return <div>FilterSidebar FilterSidebar</div>;
};

export default FilterSidebar;
