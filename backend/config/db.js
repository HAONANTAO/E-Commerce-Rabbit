import mongoose from "mongoose";

// 连接数据库
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MONGO DB connected");
  } catch (error) {
    console.log("DB connected failed", error);
    process.exit(1); // 退出进程
  }
};

export default connectDB;
