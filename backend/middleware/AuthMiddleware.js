import jwt from "jsonwebtoken";
import User from "../models/User.js";

// middleware to protect routes 用于jwt验证的中间件
const protect = async (req, res, next) => {
  let token;
  // 头部有验证的信息存在
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6...
      token = req.headers.authorization.split(" ")[1];
      // 解析出
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.user.id).select("-password"); //exclude password
      next();
    } catch (error) {
      console.log("token verification failed", error);
      res.status(401).json({ message: "Not authorized, token failed! " });
    }
  } else {
    res.status(401).json({ message: "Not authorized, no token provided" });
  }
};
export default protect;
