/*
 * @Date: 2025-04-27 11:33:34
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-04-27 20:39:33
 * @FilePath: /E-Commerce-Rabbit/frontend/src/components/Products/ProductDetails.jsx
 */
import React from "react";
import { selectedProducts } from "../../utils/mockdb";
const ProductDetails = () => {
  return (
    <>
      <div className="p-6">
        <div className="p-8 mx-auto max-w-6xl bg-white rounded-lg">
          <div className="flex flex-col md:flex-row">
            {/* left thumbnails缩略图 */}
            <div className="hidden flex-col mr-6 space-y-4 md:flex">
              {selectedProducts.images.map((image, index) => (
                <div>
                  <img
                    src={image.url}
                    alt={image.altText || `thumbnails ${index}`}
                    key={index}
                    className="object-cover w-20 h-20 rounded-lg border cursor-pointer"
                  />
                </div>
              ))}
            </div>

            {/* main image */}
            <div className="md:w-1/2">
              <div className="mb-4">
                <img
                  src={selectedProducts.images[0].url}
                  alt="Main Product"
                  className="object-cover w-full h-auto rounded-lg"
                />
              </div>
            </div>

            {/* mobile thumbnails */}
            <div className="flex overscroll-x-contain mb-4 space-x-4 md:hidden">
              {selectedProducts.images.map((image, index) => (
                <div>
                  <img
                    src={image.url}
                    alt={image.altText || `thumbnails ${index}`}
                    key={index}
                    className="object-cover w-20 h-20 rounded-lg border cursor-pointer"
                  />
                </div>
              ))}
            </div>

            {/* right section */}
            <div className="flex flex-col md:w-1/2 md:ml-10">
              <h1 className="mb-2 text-2xl font-semibold md:text-3xl">
                {selectedProducts.name}
              </h1>

              {/* prices */}
              {/* line-through会在文本上添加一条删除线。原价 */}
              <p className="mb-1 text-lg text-gray-600 line-through">
                {selectedProducts.originalPrice &&
                  `${selectedProducts.originalPrice}`}
              </p>
              <p className="mb-2 text-xl text-gray-500">
                ${selectedProducts.price}
              </p>
              {/* description */}
              <p className="mb-4 text-gray-600">
                {selectedProducts.description}
              </p>

              {/* colors */}
              <div className="mb-4">
                <p className="text-gray-700">Color:</p>
                <div className="flex gap-2 mt-2">
                  {selectedProducts.colors.map((col, index) => (
                    <div>
                      <button
                        key={index}
                        className={` w-8 h-8 rounded-full border`}
                        // 因为背景颜色是动态的
                        style={{
                          backgroundColor: col.toLowerCase(),
                          filter: "brightness(0.7)",
                        }}></button>
                    </div>
                  ))}
                </div>
              </div>

              {/* sizes */}
              <div className="mb-4">
                <p className="text-gray-700">Size:</p>
                <div className="flex gap-2 mt-2">
                  {selectedProducts.sizes.map((size, index) => (
                    <div>
                      <button key={index} className="px-4 py-2 rounded border">
                        {size}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
