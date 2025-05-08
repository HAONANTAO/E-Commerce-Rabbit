import express from "express";
import { protect, admin } from "../middleware/AuthMiddleware.js";
import Order from "../models/Order.js";
const adminOrderRoute = express.Router();

// @routes GET /api/admin/orders
// @desc   Get all orders(only for admin)
// @access Private/Admin
adminOrderRoute.get("/", protect, admin, async (req, res) => {
  try {
    let orders = await Order.find({}).populate("user", "email name");
    res.status(200).json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// @routes PUT /api/admin/orders/:id
// @desc   Update order to delivered status
// @access Private/Admin
// TODO:如果点击两次mark as delivered,会出现时间戳更新
adminOrderRoute.put("/:id", protect, admin, async (req, res) => {
  try {
    let order = await Order.findById(req.params.id);
    if (!order) {
      res.status(404).json({ message: "Order not found" });
      return;
    }

    // if orders
    order.status = req.body.status || order.status;
    order.isDelivered =
      req.body.status === "Delivered" ? true : order.isDelivered;
    order.deliveredAt =
      req.body.status === "Delivered" ? Date.now() : order.deliveredAt;
    const updatedOrder = await order.save();
    res.status(200).json(updatedOrder);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// @routes DELETE /api/admin/orders/:id
// @desc   Delete order
// @access Private/Admin
adminOrderRoute.delete("/:id", protect, admin, async (req, res) => {
  try {
    let order = await Order.findById(req.params.id);
    if (!order) {
      res.status(404).json({ message: "Order not found" });
      return;
    }
    await order.deleteOne();
    res.status(200).json({ message: "Order deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});
export default adminOrderRoute;
