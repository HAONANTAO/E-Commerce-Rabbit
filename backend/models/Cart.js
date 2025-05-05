/*
 * @Date: 2025-05-05 22:26:14
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-05-05 22:30:30
 * @FilePath: /E-Commerce-Rabbit/backend/models/Cart.js
 */
import mongoose from "mongoose";
// cartSchema nested内部的ItemSchema
const cartItemSchema = new mongoose.Schema(
  {
    // 外联到product
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
      required: true,
    },
    name: String,
    image: String,
    price: String,
    sizes: String,
    color: String,
    quantity: {
      type: Number,
      default: 1,
    },
  },
  // 不要自动生成id
  { _id: false },
);

const cartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    guestId: {
      type: String,
    },
    products: [cartItemSchema],
    totalPrice: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);
export default mongoose.model("Cart", cartSchema);
