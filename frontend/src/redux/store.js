/*
 * @Date: 2025-05-10 14:00:06
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-05-10 15:25:24
 * @FilePath: /E-Commerce-Rabbit/frontend/src/redux/store.js
 */

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import productReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";
// 创建store
const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    cart: cartReducer,
  },
});
export default store;
