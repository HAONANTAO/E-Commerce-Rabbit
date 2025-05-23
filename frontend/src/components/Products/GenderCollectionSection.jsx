/*
 * @Date: 2025-04-26 19:06:23
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-05-13 22:04:20
 * @FilePath: /E-Commerce-Rabbit/frontend/src/components/Products/GenderCollectionSection.jsx
 */
import React from "react";
import mensCollectionImage from "@/assets/mens-collection.webp";
import womensCollectionImage from "@/assets/womens-collection.webp";
import { Link } from "react-router-dom";
const GenderCollectionSection = () => {
  return (
    <section className="mt-12 py-16px-4 lg:px-0">
      <div className="container flex flex-col gap-6 mx-auto md:flex-row">
        {/* womensCollection  */}
        <div className="relative flex-1">
          <img
            src={womensCollectionImage}
            alt="womensCollectionImage"
            className="w-full h-[700px] object-cover"
          />
          <div className="absolute bottom-8 left-8 p-4 bg-white bg-opacity-90">
            <h2 className="mb-1 text-2xl font-bold text-gray-900">
              Women's Collection
            </h2>
            <Link
              to="collections/all?category=&gender=Women&color=&size=&material=&brand=&minPrice=0&maxPrice=100"
              className="text-gray-900 underline">
              Shop Now
            </Link>
          </div>
        </div>

        {/* mensCollection  */}
        <div className="relative flex-1">
          <img
            src={mensCollectionImage}
            alt="mensCollectionImage"
            className="w-full h-[700px] object-cover"
          />
          <div className="absolute bottom-8 left-8 p-4 bg-white bg-opacity-90">
            <h2 className="mb-1 text-2xl font-bold text-gray-900">
              Man's Collection
            </h2>
            <Link
              to="collections/all?category=&gender=Men&color=&size=&material=&brand=&minPrice=0&maxPrice=100"
              className="text-gray-900 underline">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenderCollectionSection;
