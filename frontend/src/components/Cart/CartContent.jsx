/*
 * @Date: 2025-04-25 18:31:40
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-04-25 18:54:56
 * @FilePath: /E-Commerce-Rabbit/frontend/src/components/Cart/CartContent.jsx
 */
import React from "react";

const CartContent = () => {
  const cartProducts = [
    {
      productId: 1,
      name: "T-shirt",
      size: "M",
      color: "Black",
      quantity: 1,
      price: 20,
      // random image from picsum.photos
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 2,
      name: "Jeans",
      size: "S",
      color: "Blue",
      quantity: 13,
      price: 220,
      // random image from picsum.photos
      image: "https://picsum.photos/200?random=2",
    },
  ];
  return (
    <>
      <div>
        {cartProducts.map((product, index) => (
          <div
            key={index}
            className="flex justify-between items-start py-4 border-b">
            <div className="flex items-start">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-20 h-24 rounded"
              />
              <div className="ml-4">
                <h3>{product.name}</h3>
                <p className="text-sm text-gray-500">
                  size: {product.size} | color: {product.color}
                </p>

                {/* quantity add and remove */}
                <div className="flex items-center mt-2">
                  <button className="px-2 py-1 text-xl font-medium rounded border">
                    -
                  </button>
                  <span className="mx-4">{product.quantity}</span>
                  <button className="px-2 py-1 text-xl font-medium rounded border">
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CartContent;
