import express from "express";
import Subscribers from "../models/Subscribers.js";

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
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

export default SubscribersRouter;
