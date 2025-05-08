import express from "express";
import Order from "../models/Order.js";
import Checkout from "../models/Checkout.js";
import Cart from "../models/Cart.js";
import Product from "../models/Product.js";
import { protect } from "../middleware/AuthMiddleware.js";
const CheckOutRoute = express.Router();

//  @routes POST /api/checkout
//  @desc   Create new checkout session
//  @access Private 创建结算的东西页面

CheckOutRoute.post("/", protect, async (req, res) => {
  const { checkoutItems, shippingAddress, paymentMethod, totalPrice } =
    req.body;
  if (!checkoutItems || checkoutItems.length === 0) {
    res.status(400).json({ message: "No items in cart" });
    return;
  }
  try {
    //create new checkout session
    const newCheckout = await Checkout.create({
      user: req.user._id,
      checkoutItems,
      shippingAddress,
      paymentMethod,
      totalPrice,
      paymentStatus: "Pending",
      isPaid: false,
    });
    console.log(`good new checkout,${req.user._id}`);
    res.status(201).json(newCheckout);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// @routes PUT /api/checkout/:id/pay
// @desc   Update checkout session to mark as paid after successful payment
// @access Private给结算东西付钱
CheckOutRoute.put("/:id/pay", protect, async (req, res) => {
  const { paymentStatus, paymentDetails } = req.body;
  try {
    const checkout = await Checkout.findById(req.params.id);
    if (!checkout) {
      res.status(404).json({ message: "Checkout not found" });
      return;
    }
    if (paymentStatus === "paid") {
      checkout.isPaid = true;
      checkout.paymentStatus = paymentStatus;
      checkout.paymentDetails = paymentDetails;
      checkout.paidAt = Date.now();
      await checkout.save();

      res.status(200).json(checkout);
    } else {
      res.status(400).json({ message: "Invalid payment status" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// @route POST /api/checkout/:id/finalize
// @desc  Finalize checkout session and convert to order
// @access Private结算东西付钱成功转换为订单
CheckOutRoute.post("/:id/finalize", protect, async (req, res) => {
  try {
    const checkout = await Checkout.findById(req.params.id);
    if (!checkout) {
      res.status(404).json({ message: "Checkout not found" });
      return;
    }
    if (checkout.isPaid && !checkout.isFinalized) {
      // create the order based on the checkout session
      const finalOrder = await Order.create({
        user: checkout.user,
        orderItems: checkout.checkoutItems,
        shippingAddress: checkout.shippingAddress,
        paymentMethod: checkout.paymentMethod,
        totalPrice: checkout.totalPrice,
        isPaid: true,
        paidAt: checkout.paidAt,
        isDelivered: false,
        paymentStatus: "paid",
        paymentDetails: checkout.paymentDetails,
      });

      // mark the checkout session as finalized
      checkout.isFinalized = true;
      checkout.finalizedAt = Date.now();
      await checkout.save();
      // delete the cart
      await Cart.findOneAndDelete({ user: req.user._id });
      res.status(201).json(finalOrder);
    } else if (checkout.isFinalized) {
      res.status(400).json({ message: "Checkout already finalized" });
    } else if (!checkout.isPaid) {
      res.status(400).json({ message: "Checkout not paid" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

export default CheckOutRoute;
