/*
 * @Date: 2025-05-04 17:25:45
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-05-04 17:40:01
 * @FilePath: /E-Commerce-Rabbit/backend/server.js
 */
import express from "express";
import cors from "cors";

import dotenv from "dotenv";
// 初始化
const app = express();
// 中间件 允许跨域 json解析
app.use(express.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
