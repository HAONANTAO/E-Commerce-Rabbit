/*
 * @Date: 2025-05-04 11:56:35
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-05-04 12:08:42
 * @FilePath: /E-Commerce-Rabbit/frontend/src/pages/AdminHomePage.jsx
 */
import React from "react";
import { Link } from "react-router-dom";
import { AdminOrders as orders } from "@/utils/mockdb";
const AdminHomePage = () => {
  return (
    <div className="p-6 mx-auto max-w-7xl">
      <h1 className="mb-6 text-3xl font-bold">Admin Dashboard</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* 第一列 */}
        <div className="p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Revenue</h2>
          <p className="text-2xl">$10000</p>
        </div>

        {/* 第2列 */}
        <div className="p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Total Orders</h2>
          <p className="text-2xl">200</p>
          <Link to="/admin/orders" className="text-blue-500 hover:underline">
            Mange Orders
          </Link>
        </div>

        {/* 第3列 */}
        <div className="p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Total Products</h2>
          <p className="text-2xl">999</p>
          <Link to="/admin/orders" className="text-blue-500 hover:underline">
            Mange Products
          </Link>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="mt-6">
        <h2 className="mb-4 text-2xl font-bold">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th className="px-4 py-3">Order ID</th>
                <th className="px-4 py-3">User</th>
                <th className="px-4 py-3">Total Price</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.length > 0 ? (
                orders.map((order, index) => (
                  <tr
                    key={order._id}
                    className="border-b cursor-pointer hover:bg-gray-50">
                    <td className="p-4">{order._id}</td>
                    <td className="p-4">{order.user.name}</td>
                    <td className="p-4">{order.totalPrice}</td>
                    <td className="p-4">{order.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="p-4 text-center text-gray-500">
                    No Recent Orders Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;
