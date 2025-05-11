/*
 * @Date: 2025-05-11 14:19:43
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-05-11 14:25:39
 * @FilePath: /E-Commerce-Rabbit/frontend/src/components/Common/ProtectedRoute.jsx
 */
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
// children 它代表 <ProtectedRoute> 标签内包裹的内容！
const ProtectedRoute = ({ children, role }) => {
  const { user } = useSelector((state) => state.auth);
  if (!user || (role && user.role !== role)) {
    // 是自动跳转 Link要点击
    // 不要在浏览器历史记录中添加新记录，而是“替换”当前这条记录。 回退不到之前的

    // 不是admin跳转登录 但是有user就跳转回主页！
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
