/*
 * @Date: 2025-05-03 14:05:27
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-05-03 14:22:19
 * @FilePath: /E-Commerce-Rabbit/frontend/src/pages/OrderDetailsPage.jsx
 */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mockOrderDetails } from "@/utils/mockdb";
const OrderDetailsPage = () => {
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    setOrderDetails(mockOrderDetails);
  }, [id]);
  return (
    <div className="p-4 mx-auto max-x-7xl sm:p-6">
      <h2 className="mb-6 text-2xl font-bold md:text-3xl">Order Details</h2>
      
    </div>
  );
};

export default OrderDetailsPage;
