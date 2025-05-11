/*
 * @Date: 2025-05-03 14:05:27
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-05-11 14:12:59
 * @FilePath: /E-Commerce-Rabbit/frontend/src/pages/OrderDetailsPage.jsx
 */
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrderDetails } from "../redux/slices/orderSlice";
// import { mockOrderDetails } from "@/utils/mockdb";
const OrderDetailsPage = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { orderDetails, loading, error } = useSelector((state) => state.orders);
  useEffect(() => {
    dispatch(fetchOrderDetails(id));
  }, [dispatch, id]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
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
          <div className="grid grid-cols-1 gap-8 mb-8 sm:grid-cols-2 md:grid-cols-3">
            <div>
              <h4 className="mb-2 text-lg font-semibold">Payment Info</h4>
              <p>Payment Method: {orderDetails.paymentMethod}</p>
              <p>Status: {orderDetails.isPaid ? "Paid" : "Unpaid"}</p>
            </div>
            <div>
              <h4 className="mb-2 text-lg font-semibold">Shipping Info</h4>
              <p>Shipping Method: {orderDetails.shippingMethod}</p>
              <p>
                Address:{" "}
                {`${orderDetails.shippingAddress.address}, ${orderDetails.shippingAddress.city}, ${orderDetails.shippingAddress.country}`}
              </p>
            </div>
          </div>

          {/* product list */}
          <div className="overflow-x-auto">
            <h4 className="mb-4 text-lg font-semibold">Products</h4>
            <table className="mb-4 min-w-full text-gray-600">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Unit Price</th>
                  <th className="px-4 py-2">Quantity</th>
                  <th className="px-4 py-2">Total</th>
                </tr>
              </thead>
              <tbody className="items-center">
                {orderDetails.orderItems.map((order, index) => (
                  <tr key={order.productId} className="border-b">
                    <td className="flex items-center px-4 py-2">
                      <img
                        src={order.image}
                        alt={order.name}
                        className="object-cover mr-4 w-12 h-12 rounded-lg"
                      />
                      <Link
                        to={`/product/${order.productId}`}
                        className="text-blue-500 hover:underline">
                        {order.name}
                      </Link>
                    </td>
                    <td className="px-4 py-2 text-center">${order.price}</td>
                    <td className="px-4 py-2 text-center">{order.quantity}</td>
                    <td className="px-4 py-2 text-center">
                      ${order.price * order.quantity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* back toOrder clickable */}
          <Link to="/my-orders" className="text-blue-500 hover:underline">
            Back to my Orders
          </Link>
        </div>
      )}
    </div>
  );
};

export default OrderDetailsPage;
