/*
 * @Date: 2025-04-25 18:31:40
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-04-25 18:40:54
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
              <img src={product.image} alt={product.name} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CartContent;
