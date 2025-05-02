/*
 * @Date: 2025-05-02 21:14:03
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-05-02 21:21:30
 * @FilePath: /E-Commerce-Rabbit/frontend/src/pages/OrderConfirmationPage.jsx
 */
import React from "react";
import { checkout } from "@/utils/mockdb";
const OrderConfirmationPage = () => {
  return (
    <div className="p-6 mx-auto max-w-4xl bg-white">
      <h1 className="mb-8 text-4xl font-bold text-center text-emerald-700">
        Thank you for your order!
      </h1>
    </div>
  );
};

export default OrderConfirmationPage;
