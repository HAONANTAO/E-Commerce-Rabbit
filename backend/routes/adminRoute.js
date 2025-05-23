/*
 * @Date: 2025-05-08 20:20:17
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-05-13 21:13:53
 * @FilePath: /E-Commerce-Rabbit/backend/routes/adminRoute.js
 */
import express from "express";
import User from "../models/User.js";
import { protect, admin } from "../middleware/AuthMiddleware.js";
import { handleServerError } from "../utils.js";
const adminRoute = express.Router();

// @routes GET /api/admin/users
// @desc   Get all users(only for admin )
// @access Private/Admin
adminRoute.get("/users", protect, admin, async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    handleServerError(res, error);
  }
});

// @routes POST /api/admin/users
// @desc  add new user
// @access Private/Admin
adminRoute.post("/users", protect, admin, async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      res.status(400).json({ message: "User already exists" });
      return;
    }
    user = new User({
      name,
      email,
      password,
      role: role || "customer",
    });
    await user.save();
    res.status(201).json({
      message: "User created successfully",
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } catch (error) {
    handleServerError(res, error);
  }
});

// @routes PUT /api/admin/users/:id
// @desc   Update user(only for admin)
// @access Private/Admin
adminRoute.put("/users/:id", protect, admin, async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    let user = await User.findById(req.params.id);
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    user.name = name || user.name;
    user.email = email || user.email;
    user.password = password || user.password;
    user.role = role || user.role;
    await user.save();
    res.json({
      message: "User updated successfully",
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } catch (error) {
    handleServerError(res, error);
  }
});

// @routes DELETE /api/admin/users/:id
// @desc   Delete user(only for admin)
// @access Private/Admin
adminRoute.delete("/users/:id", protect, admin, async (req, res) => {
  try {
    let user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    handleServerError(res, error);
  }
});
export default adminRoute;
