import express from "express";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import { protect } from "../middleware/AuthMiddleware.js";
import { handleServerError } from "../utils";
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

    // create JWT payload using User info
    const payload = { user: { id: user._id, role: user.role } };
    // sign and return the token along with the user data
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "40h" },
      (error, token) => {
        if (error) throw error;

        // send the user and token in response
        // 201 Created
        res.status(201).json({
          user: {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
          },
          token,
        });
      },
    );
  } catch (error) {
    handleServerError(res, error);
  }
});

// @route POST /api/user/login
// @desc Authenticate user
// @access public
userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    // find the user by email
    const user = await User.findOne({ email });
    if (!user)
      res.status(400).json({ message: "can not find this user to login" });
    // 找到了的话
    // 对比密码
    const isMatch = await user.matchPassword(password);
    if (!isMatch) res.status(400).json({ message: "invalid password!" });

    // create JWT payload using User info
    const payload = { user: { id: user._id, role: user.role } };
    // sign and return the token along with the user data
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "40h" },
      (error, token) => {
        if (error) throw error;

        // send the user and token in response
        res.status(200).json({
          user: {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
          },
          token,
        });
      },
    );
  } catch (error) {
   handleServerError(res, error);
  }
});

// @route GET /api/user/profile
// @desc Get the logged in user profile(只有经过授权的用户才能访问的路由protected route)
// @access Private
userRouter.get("/profile", protect, async (req, res) => {
  res.json(req.user);
});

export default userRouter;
