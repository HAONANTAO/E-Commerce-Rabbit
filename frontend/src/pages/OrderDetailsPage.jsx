/*
 * @Date: 2025-05-03 14:05:27
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-05-03 14:32:17
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
      {!orderDetails ? (
        <p>No Order details found</p>
      ) : (
        <div className="p-4 rounded-lg border sm:p-6">
          <div className="flex flex-col justify-between mb-8 sm:flex-row">
            <div>
              <h3 className="text-lg font-semibold md:text-xl">
                Order ID: {orderDetails._id}
              </h3>
              <p className="text-gray-600">
                {new Date(orderDetails.createdAt).toLocaleString()}
              </p>
            </div>

            <div className="flex flex-col items-start mt-4 sm:items-end sm:mt-0">
              <span
                className={`${
                  orderDetails.isPaid
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700  "
                } px-3 py-1 rounded-full text-sm font-medium mb-2`}>
                {orderDetails.isPaid ? "Approved" : "Pending "}
              </span>
              <span
                className={`${
                  orderDetails.isDelivered
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700  "
                } px-3 py-1 rounded-full text-sm font-medium mb-2`}>
                {orderDetails.isDelivered ? "Delivered" : "Pending Delivery "}
              </span>
            </div>
          </div>

          {/* customer payment and shipping info */}
        </div>
      )}
    </div>
  );
};

export default OrderDetailsPage;
