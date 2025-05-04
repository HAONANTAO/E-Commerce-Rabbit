import mongoose from "mongoose";

// 连接数据库
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MONGO DB connected");
  } catch (error) {
    console.log("DB connected failed", error);
  }
};

export default connectDB;
