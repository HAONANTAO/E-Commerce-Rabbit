/*
 * @Date: 2025-04-27 11:33:34
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-04-27 20:16:51
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
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
