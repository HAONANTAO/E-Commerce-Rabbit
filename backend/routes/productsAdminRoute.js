/*
 * @Date: 2025-05-08 20:49:13
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-05-13 21:07:32
 * @FilePath: /E-Commerce-Rabbit/backend/routes/productsAdminRoute.js
 */
import express from "express";
import { protect, admin } from "../middleware/AuthMiddleware.js";
import Product from "../models/Product.js";
import { handleServerError } from "../utils.js";
const productsAdminRoute = express.Router();

//@ routes GET /api/admin/products
//@desc Get all products(only for admin)
//@access Private/Admin
productsAdminRoute.get("/", protect, admin, async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    let products = await Product.find({});
    res.status(200).json(products);
    handleServerError(res, error);
  }
});
export default productsAdminRoute;
