/*
 * @Date: 2025-04-20 21:08:35
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-05-13 22:11:16
 * @FilePath: /E-Commerce-Rabbit/frontend/src/App.jsx
 */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Userlayout from "@/components/Layout/UserLayout";
import ScrollToTop from "@/components/ScrollToTop";
import Home from "./pages/Home";
import { Toaster } from "sonner";
import Login from "@/components/Products/Login";
import Register from "@/components/Products/Register";
import Profile from "@/pages/Profile";
import CollectionPage from "@/pages/CollectionPage";
import NotFound from "@/pages/NotFound";
import ProductDetails from "@/components/Products/ProductDetails";
import CheckOut from "@/components/Cart/CheckOut";
import OrderConfirmationPage from "@/pages/OrderConfirmationPage";
import OrderDetailsPage from "@/pages/OrderDetailsPage";
import MyOrderPage from "@/pages/MyOrderPage";
import AdminLayout from "@/components/Admin/AdminLayout";
import AdminHomePage from "@/pages/AdminHomePage";
import UserManagement from "@/components/Admin/UserManagement";
import ProductsManagement from "@/components/Admin/ProductsManagement";
import EditProduct from "@/components/Admin/EditProduct";
import OrderManagement from "@/components/Admin/OrderManagement";
import { Provider } from "react-redux";
import store from "@/redux/store";
import ProtectedRoute from "./components/Common/ProtectedRoute";
/*
 * @Date: 2025-04-20 21:08:35
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-05-02 21:14:45
 * @FilePath: /E-Commerce-Rabbit/frontend/src/App.jsx
 */
export default function App() {
  return (
    <Provider store={store}>
      {/* react-router-dom */}
      <BrowserRouter
        // 提前启用 v7 的新功能，取消控制台warning
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}>
        <ScrollToTop />
        <Toaster position="top-center" richColors /> {/* 添加 Toaster 组件 */}
        <Routes>
          {/* User Layout */}
          <Route path="/" element={<Userlayout />}>
            {/* index 在 React Router 中是一个特殊的属性，表示这是父路由的默认子路由。
            后面的子路由默认outlet，index是默认的首页面 */}
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="profile" element={<Profile />}></Route>
            {/* 东西最多的展示页面 */}
            {/* 这里的 :collection 是一个动态参数 */}
            <Route
              path="collections/:collection"
              element={<CollectionPage />}></Route>
            <Route path="product/:id" element={<ProductDetails />}></Route>
            <Route path="checkout" element={<CheckOut />}></Route>
            <Route
              path="order-confirmation"
              element={<OrderConfirmationPage />}></Route>
            <Route path="order/:id" element={<OrderDetailsPage />}></Route>
            <Route path="my-orders" element={<MyOrderPage />}></Route>
          </Route>

          {/* Admin Layout */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute role="admin">
                <AdminLayout />
              </ProtectedRoute>
            }>
            <Route index element={<AdminHomePage />}></Route>
            <Route path="users" element={<UserManagement />}></Route>
            <Route path="products" element={<ProductsManagement />}></Route>
            <Route path="products/:id/edit" element={<EditProduct />}></Route>
            <Route path="orders" element={<OrderManagement />}></Route>
          </Route>

          {/* the end */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
