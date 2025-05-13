/*
 * @Date: 2025-05-08 20:55:33
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-05-13 21:02:38
 * @FilePath: /E-Commerce-Rabbit/backend/routes/adminOrderRoute.js
 */
import express from "express";
import { protect, admin } from "../middleware/AuthMiddleware.js";
import { handleServerError } from "../utils";
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

adminOrderRoute.put("/:id", protect, admin, async (req, res) => {
  try {
    let order = await Order.findById(req.params.id).populate(
      "user",
      "name email",
    );
    if (!order) {
      res.status(404).json({ message: "Order not found" });
      return;
    }

    // 只有当订单状态从非Delivered变为Delivered时才更新时间戳
    // if orders
    order.status = req.body.status || order.status;

    //如果本身没有deliver然后现在delivered了 才更新
    const isNewlyDelivered =
      !order.isDelivered && req.body.status === "Delivered";

    order.status = req.body.status || order.status;

    if (isNewlyDelivered) {
      order.isDelivered = true;
      order.deliveredAt = Date.now();
    }

    const updatedOrder = await order.save();
    res.status(200).json(updatedOrder);
  } catch (error) {
    handleServerError(res, error);
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
    handleServerError(res, error);
  }
});
export default adminOrderRoute;
