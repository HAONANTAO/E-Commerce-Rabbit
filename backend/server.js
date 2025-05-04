/*
 * @Date: 2025-05-04 17:25:45
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-05-04 20:28:02
 * @FilePath: /E-Commerce-Rabbit/backend/server.js
 */
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoute.js";
import productRoutes from "./routes/productRoute.js";
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
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
