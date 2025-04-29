import React, { useState, useEffect } from "react";

//profile page info
const MyOrderPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // 模拟提前从后端拿到数据
    setTimeout(() => {});
  }, []);
  return <div>MyOrderPage</div>;
};

export default MyOrderPage;
