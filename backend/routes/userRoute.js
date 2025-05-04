import express from "express";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

const userRouter = express.Router();

// API 文档注释的格式，通常用于描述路由的基本信息：
// @route POST /api/users/register
// @desc Register a user
// @access Public
// /api/users/register
userRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: "Please fill in all fields" });
  }
  try {
    // registration logic
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User already existed" });
    // 没有才创建
    user = new User({ name, email, password });
    await user.save();
    res.status(201).json({
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

export default userRouter;
