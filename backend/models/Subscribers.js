import mongoose from "mongoose";
const SubscribersSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    // 正则表达式，用于验证邮箱格式
    match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  },
  subscribedAt: {
    type: Date,
    default: Date.now,  
  },
});

export default mongoose.model("Subscribers", SubscribersSchema);
