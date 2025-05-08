import express from "express";
import User from "../models/User.js";
import { protect, admin } from "../middleware/AuthMiddleware.js";

const adminRoute = express.Router();

// @routes GET /api/admin/users
// @desc   Get all users(only for admin )
// @access Private/Admin
adminRoute.get("/users", protect, admin, async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});
export default adminRoute;
