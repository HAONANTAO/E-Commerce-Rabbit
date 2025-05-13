/*
 * @Date: 2025-05-07 21:32:16
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-05-13 21:08:05
 * @FilePath: /E-Commerce-Rabbit/backend/routes/uploadRoute.js
 */
//用于上传images到cloudinary
// 1. multer
// - 是一个处理 multipart/form-data 的中间件
// - 主要用于处理文件上传
// - 可以处理表单中的文件字段
// 2. streamifier
// - 将 Buffer 或字符串转换为可读流（Readable Stream）
// - 在文件上传到 Cloudinary 时特别有用
// - 可以将 multer 处理的文件 buffer 转换为流

import express from "express";
import multer from "multer";
import streamifier from "streamifier";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import { handleServerError } from "../utils";
dotenv.config();
const uploadRouter = express.Router();
// cloudinary configuration 是一个云端图片和视频管理服务平台：
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// multer set up
// - 创建一个内存存储引擎
// - 文件会被存储在内存中（Buffer）
// - 而不是写入磁盘
const storage = multer.memoryStorage();
// 创建 multer 实例
const upload = multer({ storage: storage });

uploadRouter.post("/", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // function to handle the stream upload to cloudinary
    const streamUpload = (fileBuffer) => {
      return new Promise((resolve, reject) => {
        // Cloudinary上传流
        const stream = cloudinary.uploader.upload_stream((error, result) => {
          if (result) {
            resolve(result);
          } else {
            reject(error);
          }
        });
        // use streamifier to convert the buffer to a stream
        // - 将buffer转换为可读流
        // -通过pipe连接到上传流;
        // 边上传边读取 省时间
        streamifier.createReadStream(fileBuffer).pipe(stream);
      });
    };
    // call the streamUpload function
    const result = await streamUpload(req.file.buffer);

    // respond with the upload url
    res.json({ imageUrl: result.secure_url });
  } catch (error) {
    handleServerError(res, error);
  }
});

export default uploadRouter;
