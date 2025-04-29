import { BrowserRouter, Routes, Route } from "react-router-dom";
import Userlayout from "@/components/Layout/UserLayout";
import Home from "./pages/Home";
import { Toaster } from "sonner";
import Login from "@/components/Products/Login";
/*
 * @Date: 2025-04-20 21:08:35
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-04-29 21:00:50
 * @FilePath: /E-Commerce-Rabbit/frontend/src/App.jsx
 */
export default function App() {
  return (
    <>
      {/* react-router-dom */}
      <BrowserRouter
        // 提前启用 v7 的新功能，取消控制台warning
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}>
        <Toaster position="top-center" richColors /> {/* 添加 Toaster 组件 */}
        <Routes>
          {/* User Layout */}
          <Route path="/" element={<Userlayout />}>
            {/* index 在 React Router 中是一个特殊的属性，表示这是父路由的默认子路由。
            后面的子路由默认outlet，index是默认的首页面 */}
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route>{/* Admin Layout */}</Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
