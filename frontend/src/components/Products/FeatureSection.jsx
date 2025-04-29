/*
 * @Date: 2025-04-29 20:32:06
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-04-29 20:35:31
 * @FilePath: /E-Commerce-Rabbit/frontend/src/components/Products/FeatureSection.jsx
 */
import React from "react";
import { HiShoppingBag } from "react-icons/hi";
const FeatureSection = () => {
  return (
    <>
      <section className="px-4 py-16 bg-white">
        <div className="container grid grid-cols-1 gap-8 mx-auto text-center md:grid-cols-3">
          {/* Feature1 */}
          <div className="flex flex-col items-center">
            <div className="p-4 mb-4 rounded-full">
              <HiShoppingBag className="text-2xl" />
            </div>
            <h4 className="mb-2 tracking-tighter">
              FREE INTERNATIONAL SHIPPING
            </h4>
            <p className="text-sm tracking-tighter text-gray-600">
              On All Orders Over $100.00
            </p>
          </div>
          {/* Feature2 */}

          {/* Feature3 */}
        </div>
      </section>
    </>
  );
};

export default FeatureSection;
