/*
 * @Date: 2025-04-27 21:31:26
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-04-28 19:10:32
 * @FilePath: /E-Commerce-Rabbit/frontend/src/components/Products/ProductGrid.jsx
 */
import React from "react";
import { Link } from "react-router-dom";
const ProductGrid = ({ products }) => {
  return (
    <>
      {/* - 0-639px: 1列 ( grid-cols-1 )
      - 640-1023px: 2列 ( sm:grid-cols-2 )
      - 1024px及以上: 4列 ( lg:grid-cols-4 ) */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products?.map((product, index) => (
          //   TODO:Link
          // 1. 默认情况下 <Link> 是行内元素（inline），设置 block 后变成块级元素
          //       如果不设置 block ：- 链接可能只在文本区域可点击
          <Link
            key={product._id}
            className="block"
            to={`/product/${product._id}`}>
            <div className="p-4 bg-white rounded-lg">
              <div className="mb-4 w-full h-96">
                <img
                  src={product.images[0].url}
                  alt={product.images[0].altText || product.name}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <h3 className="mb-2 text-sm">{product.name}</h3>
              <p className="text-sm font-medium tracking-tighter text-gray-500">
                $ {product.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ProductGrid;
