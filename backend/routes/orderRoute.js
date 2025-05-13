/*
 * @Date: 2025-05-07 21:14:43
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-05-13 21:06:35
 * @FilePath: /E-Commerce-Rabbit/backend/routes/orderRoute.js
 */
import express from "express";
import Order from "../models/Order.js";
import { protect } from "../middleware/AuthMiddleware.js";
const orderRouter = express.Router();
import { handleServerError } from "../utils";
// @routes GET /api/orders/my-orders
// @desc Get all orders for logged in user
// @access Private
orderRouter.get("/my-orders", protect, async (req, res) => {
  try {
    // find all orders for the logged in user
    const orders = await Order.find({ user: req.user._id }).sort({
      createdAt: -1,
    });
    res.json(orders);
  } catch (error) {
    handleServerError(res, error);
  }
});

// @routes GET /api/orders/:id
// @desc Get all the details  by ID
// @access Private
orderRouter.get("/:id", protect, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate(
      "user",
      "name email",
    );
    if (!order) {
      res.status(404).json({ message: "Order not found" });
      return;
    }
    res.json(order);
  } catch (error) {
    handleServerError(res, error);
  }
});
export default orderRouter;
