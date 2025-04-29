/*
 * @Date: 2025-04-29 22:17:20
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-04-29 22:23:53
 * @FilePath: /E-Commerce-Rabbit/frontend/src/pages/CollectionPage.jsx
 */
import React, { useEffect, useState } from "react";
import { topWearsWomen } from "@/utils/mockdb.js";
const CollectionPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // 模拟后端拿数据
    setTimeout(() => {
      setProducts(topWearsWomen);
    }, 1000);
  }, []);
  return <div>CollectionPage</div>;
};

export default CollectionPage;
