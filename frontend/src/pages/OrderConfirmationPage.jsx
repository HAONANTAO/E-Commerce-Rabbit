/*
 * @Date: 2025-05-02 21:14:03
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-05-02 21:26:31
 * @FilePath: /E-Commerce-Rabbit/frontend/src/pages/OrderConfirmationPage.jsx
 */
import React from "react";
import { checkout } from "@/utils/mockdb";
const OrderConfirmationPage = () => {
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
          </div>

          {/* estimated delivery */}
          <div>
            <p className="text-sm text-emerald-700">
              Estimated delivery:{" "}
              {calculatedEstimatedDelivery(checkout.createdAt)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderConfirmationPage;
