/*
 * @Date: 2025-04-26 19:23:01
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-04-26 19:36:25
 * @FilePath: /E-Commerce-Rabbit/frontend/src/components/Products/NewArrivals.jsx
 */
import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { newProducts } from "../../utils/mockdb";
const NewArrivals = () => {
  return (
    <section>
      <div className="container relative mx-auto mt-10 text-center">
        <h2 className="mb-4 text-3xl font-bold">Explore New Arrivals</h2>
        <p className="mb-8 text-lg text-gray-600">
          Discover our latest collection of stylish and trendy products. Shop
          now and experience the perfect blend of fashion and comfort.
        </p>

        {/* scroll button */}
        <div className="flex absolute right-0 bottom-[-20px] space-x-2">
          <button className="p-2 text-black bg-white rounded border">
            <FiChevronLeft className="text-2xl" />
          </button>
          <button className="p-2 text-black bg-white rounded border">
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
