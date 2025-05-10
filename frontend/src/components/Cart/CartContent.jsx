/*
 * @Date: 2025-04-25 18:31:40
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-05-10 20:23:23
 * @FilePath: /E-Commerce-Rabbit/frontend/src/components/Cart/CartContent.jsx
 */
import React from "react";
import { RiDeleteBin3Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/slices/cartSlice";
import { updateCartItemQuantity } from "../../redux/slices/cartSlice";
// import { cartProducts } from "@/utils/mockdb";
const CartContent = ({ cart, userId, guestId }) => {
  const dispatch = useDispatch();
  // handle adding or subtracting to cart
  // delta 通常是一个 增量值（difference），表示对购物车中某个商品的数量进行的更改。
  const handleAddToCart = (productId, delta, quantity, size, color) => {
    console.log("click to add/minus the cart quantity");
    const newQuantity = delta + quantity;
    if (newQuantity >= 1) {
      dispatch(
        updateCartItemQuantity({
          productId,
          size,
          color,
          quantity: newQuantity,
          guestId,
          userId,
        }),
      );
    }
  };

  const handleRemoveFromCart = (productId, size, color) => {
    dispatch(removeItemFromCart({ productId, size, color, userId, guestId }));
  };
  return (
    <>
      <div>
        {cart.products.map((product, index) => (
          <div
            key={`${product.productId}-${product.size}-${product.color}`} // 使用 productId、size、color 组合
            className="flex justify-between items-start py-4 border-b">
            <div className="flex items-start">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-20 h-24 rounded"
              />

              {/* main body */}
              <div className="ml-4">
                <h3>{product.name}</h3>
                <p className="text-sm text-gray-500">
                  size: {product.size} | color: {product.color}
                </p>

                {/* quantity add and remove */}
                <div className="flex items-center mt-2">
                  <button
                    className="px-2 py-1 text-xl font-medium rounded border"
                    onClick={() =>
                      handleAddToCart(
                        product.productId,
                        -1,
                        product.quantity,
                        product.size,
                        product.color,
                      )
                    }>
                    -
                  </button>
                  <span className="mx-4">{product.quantity}</span>
                  <button
                    className="px-2 py-1 text-xl font-medium rounded border"
                    onClick={() =>
                      handleAddToCart(
                        product.productId,
                        1,
                        product.quantity,
                        product.size,
                        product.color,
                      )
                    }>
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* amount of price */}
            <div className="flex flex-col">
              {/* 会根据当前**用户的本地语言设置（locale）**来格式化数字 */}
              <p className="font-medium">$ {product.price.toLocaleString()}</p>
              {/* delete button */}
              <button
                onClick={() =>
                  handleRemoveFromCart(
                    product.productId,
                    product.size,
                    product.color,
                  )
                }>
                <RiDeleteBin3Line className="mt-2 w-6 h-6 text-red-600" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CartContent;
