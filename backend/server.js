/*
 * @Date: 2025-05-04 17:25:45
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-05-08 20:56:21
 * @FilePath: /E-Commerce-Rabbit/backend/server.js
 */
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoute.js";
import productRoutes from "./routes/productRoute.js";
import cartRoutes from "./routes/cartRoute.js";
import checkoutRoutes from "./routes/checkoutRoute.js";
import orderRouter from "./routes/orderRoute.js";
import uploadRouter from "./routes/uploadRoute.js";
import subscribersRouter from "./routes/subscriberRoute.js";
import adminRouter from "./routes/adminRoute.js";
import productsAdminRouter from "./routes/productsAdminRoute.js";
import adminOrderRouter from "./routes/adminOrderRoute.js";
// 初始化
const app = express();
// 中间件 允许跨域 json解析
app.use(express.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 3000;

// 数据库连接
connectDB();
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// API Routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/checkout", checkoutRoutes);
app.use("/api/orders", orderRouter);
app.use("/api/upload", uploadRouter);
app.use("/api/subscribe", subscribersRouter);
app.use("/api/admin", adminRouter);
app.use("/api/admin/products", productsAdminRouter);
app.use("/api/admin/orders", adminOrderRouter);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
