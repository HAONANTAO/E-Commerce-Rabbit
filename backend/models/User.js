/*
 * @Date: 2025-05-04 17:44:34
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-05-08 20:40:55
 * @FilePath: /E-Commerce-Rabbit/backend/models/User.js
 */

import mongoose from "mongoose";
import bcrypt from "bcryptjs";
// 定义一个schema 映射到mongodb的collection
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      // 自动删除字符串前后的空白字符
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      // 正则表达式验证邮箱
      match: [/.+\@.+\..+/, "Please enter a valid email address"],
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    role: {
      type: String,
      // 枚举类型
      enum: ["customer", "admin"],
      default: "customer",
    },
  },
  { timestamps: true },
);

// password 加密
// 在保存文档之前执行的中间件!
UserSchema.pre("save", async function (next) {
  // 如果密码没有修改，就不加密
  if (!this.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// match user entered password to hashed password in database
// 用于定义模型实例的方法，模型实例方法就是每个用户对象都可以调用的方法
// 为用户验证输入密码和数据库密码是不是一样的
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Schema 转换为可用的 Mongoose 模型User
export default mongoose.model("User", UserSchema);
