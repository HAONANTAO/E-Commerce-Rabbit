/*
 * @Date: 2025-05-05 19:50:37
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-05-05 19:57:43
 * @FilePath: /E-Commerce-Rabbit/backend/seeder.js
 */
import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "/models/Product.js";
import User from "/models/User.js";
import products from "/data/products.js";

// seed data（种子数据）是指用于初始化数据库的示例或测试数据。在这个上下文中
dotenv.config();

// connect to database
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// function to seed data
const seedData = async () => {
  try {
    // clear existing data
    await Product.deleteMany();
    await User.deleteMany();

    // create a default admin user
    const createdUser = await User.create({
      name: "Admin User",
      email: "admin@example.com",
      password: "123456",
      role: "admin",
    });
    // Assign the created user's ID to the product data
    const userID = createdUser._id;
    // 加上admin的id
    const sampleProducts = products.map((product) => ({
      ...product,
      userID,
    }));

    // insert sample products
    await Product.insertMany(sampleProducts);
    console.log("Data seeded successfully");
    process.exit();
  } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(1);
  }
};

seedData();
