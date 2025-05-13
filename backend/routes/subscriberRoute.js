/*
 * @Date: 2025-05-08 20:09:25
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-05-13 21:13:36
 * @FilePath: /E-Commerce-Rabbit/backend/routes/subscriberRoute.js
 */
import express from "express";
import Subscribers from "../models/Subscribers.js";
import { handleServerError } from "../utils.js";
const SubscribersRouter = express.Router();

// @routes POST /api/subscribe
// @desc  handle newsletter subscription
// @access Public
SubscribersRouter.post("/", async (req, res) => {
  const { email } = req.body;
  if (!email) {
    res.status(400).json({ message: "Email is required" });
    return;
  }
  try {
    // check if email already subscribed
    let subscriber = await Subscribers.findOne({ email });
    if (subscriber) {
      res.status(400).json({ message: "Email already subscribed" });
      return;
    }
    // create new subscriber
    subscriber = new Subscribers({
      email,
    });
    await subscriber.save();
    res.status(201).json({ message: "Successfully subscribed" });
  } catch (error) {
    handleServerError(res, error);
  }
});

export default SubscribersRouter;
