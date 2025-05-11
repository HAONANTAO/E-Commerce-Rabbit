/*
 * @Date: 2025-05-02 21:14:03
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-05-11 13:52:54
 * @FilePath: /E-Commerce-Rabbit/frontend/src/pages/OrderConfirmationPage.jsx
 */
import React, { useEffect } from "react";
// import { checkout } from "@/utils/mockdb";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/slices/cartSlice";
const OrderConfirmationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { checkout } = useSelector((state) => state.checkout);
  // clear the cart when order is confirmed
  useEffect(() => {
    // 结账成功
    if (checkout && checkout._id) {
      dispatch(clearCart());
      localStorage.removeItem("cart");
    } else {
      // 还没结账
      navigate("/my-orders");
    }
  }, [checkout, navigate, dispatch]);

  // 计算是五天后到
  const calculatedEstimatedDelivery = (createdAt) => {
    const orderDate = new Date(createdAt);
    orderDate.setDate(orderDate.getDate() + 5);
    return orderDate.toLocaleDateString();
  };

  return (
    <div className="p-6 mx-auto max-w-4xl bg-white">
      <h1 className="mb-8 text-4xl font-bold text-center text-emerald-700">
        Thank you for your order!
      </h1>
      {checkout && (
        <div className="p-6 rounded-lg border">
          <div className="flex justify-between mb-20">
            <div>
              {/* order id and date */}
              <h2 className="text-xl font-semibold">
                Order ID: {checkout._id}
              </h2>
              <p className="text-gray-500">
                Order Date: {new Date(checkout.createdAt).toLocaleDateString()}
              </p>
            </div>
            {/* estimated delivery */}
            <div>
              <p className="text-sm text-emerald-700">
                Estimated delivery:{" "}
                {calculatedEstimatedDelivery(checkout.createdAt)}
              </p>
            </div>
          </div>

          {/* orderItems shows */}
          <div className="mb-20">
            {checkout.checkoutItems.map((item, index) => (
              <div key={item.productId} className="flex items-center mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover mr-4 w-16 h-16 rounded-md"
                />
                <div>
                  <h4 className="font-semibold text-md">{item.name}</h4>
                  <p className="text-sm text-gray-500">
                    {item.color} | {item.size}
                  </p>
                </div>

                {/* text-right : 让这个 div 内的文本右对齐 */}
                <div className="ml-auto text-right">
                  <p className="text-md">${item.price}</p>
                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>

          {/* payment and delivery info */}
          <div className="grid grid-cols-2 gap-8">
            {/* payment info */}
            <div>
              <h4 className="mb-2 text-lg font-semibold">Payment</h4>
              <p className="text-gray-600">Paypal</p>
            </div>

            {/* Delivery info */}
            <div>
              <h4 className="mb-2 text-lg font-semibold">Delivery</h4>
              <p className="text-gray-600">
                {checkout.shippingAddress.address}
              </p>
              <p className="text-gray-600">
                {checkout.shippingAddress.city},{" "}
                {checkout.shippingAddress.country}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderConfirmationPage;
