import React, { useState, useEffect } from "react";
import { myOrders } from "@/utils/mockdb.js";
//profile page info
const MyOrderPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // 模拟提前从后端拿到数据
    setTimeout(() => {
      setOrders(myOrders);
    }, 1000);
  }, []);
  return (
    <div className="p-4 mx-auto max-w-7xl sm:p-6">
      <h2 className="mb-6 text-xl font-bold sm:text-2xl">My Orders</h2>
      <div className="overflow-hidden relative shadow-md sm:rounded-lg">
        {/* 显示区域 */}
        <table className="min-w-full text-left text-gray-500">
          {/* 这些样式会应用到表格的第一行（表头），通常用来显示每一列的标题 */}
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th className="px-4 py-2 sm:py-3">Image</th>
              <th className="px-4 py-2 sm:py-3">OrderID</th>
              <th className="px-4 py-2 sm:py-3">Created</th>
              <th className="px-4 py-2 sm:py-3">Shipping Address</th>
              <th className="px-4 py-2 sm:py-3">Items</th>
              <th className="px-4 py-2 sm:py-3">Price</th>
              <th className="px-4 py-2 sm:py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.length >= 1 ? (
              orders.map((order, index) => (
                <tr
                  key={order._id}
                  className="border-b cursor-pointer hover:border-gray-50">
                  <td className="px-2 py-2 sm:py-4 sm:px-4">
                    <img
                      src={order.orderItems[0].image}
                      alt={order.orderItems[0].name}
                      className="object-cover w-10 h-10 rounded-lg sm:w-12 sm:h-12"
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                {/* 合并所有一共7个格子 */}
                <td colSpan={7} className="px-4 py-4 text-center text-gray-500">
                  You have no orders yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrderPage;
