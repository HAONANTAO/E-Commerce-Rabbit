import express from "express";
import { protect } from "../middleware/AuthMiddleware.js";
import Cart from "../models/Cart.js";
import Product from "../models/Product.js";
const cartRouter = express.Router();

// helper function to get cart for guest or logged user帮助查找购物车的函数
const getCart = async (userId, guestId) => {
  // 如果有userId就代表是登录了 直接找用户的购物车
  if (userId) {
    return await Cart.findOne({ user: userId });
  } else if (guestId) {
    // 如果没有userId就代表是游客 直接找游客的购物车
    return await Cart.findOne({ guestId });
  }
  return null;
};

// @ routes POST /api/cart
// @ desc add product to cart for guest or logged user
// @ access Public
cartRouter.post("/", async (req, res) => {
  const { productId, quantity, guestId, userId, size, color } = req.body;
  try {
    // 找到需要添加的商品
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // determine if the user is logged in or guest看看用户到底是什么状态添加的购物车?
    let cart = await getCart(userId, guestId);

    // 如果有购物车，就更新购物车，如果没有就创建购物车
    if (cart) {
      // 用来查找符合条件的元素在数组中的索引位置。为了可以添加同样的item但是不同的规格
      // 3. 返回值： 如果找到匹配的商品，返回其在数组中的索引
      // - 如果没找到，返回 -1
      //  这样可以判断购物车中是否已经存在相同规格（尺寸、颜色）的商品，用于后续的数量更新或新增操作。
      const productIndex = cart.products.findIndex(
        (p) =>
          (p.productId.toString() === productId) &
          (p.size === size) &
          (p.color === color),
      );
      if (productIndex !== -1) {
        // 已经有了一样的商品了 就更新数量
        cart.products[productIndex].quantity += quantity;
      } else {
        // 没有就添加新的商品
        cart.products.push({
          productId,
          name: product.name,
          image: product.images[0].url,
          price: product.price,
          quantity,
          size,
          color,
        });
      }

      // recalculate total price
      // reduce 是一个数组方法，用于将数组中的所有元素归并为一个值。
      cart.totalPrice = cart.products.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
      );
      await cart.save();
      res.status(200).json(cart);
    } else {
      // create a new cart
      const newCart = await Cart.create({
        user: userId ? userId : undefined,
        guestId: guestId ? guestId : "guest_" + new Date().getTime(),
        products: [
          {
            productId,
            name: product.name,
            image: product.images[0].url,
            price: product.price,
            size,
            color,
            quantity,
          },
        ],
        totalPrice: product.price * quantity,
      });
      return res.status(201).json(newCart);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// @routes PUT /api/cart
// @desc update cart for guest or logged user
// @access Public
cartRouter.put("/", async (req, res) => {
  const { productId, quantity, size, color, guestId, userId } = req.body;
  try {
    let cart = await getCart(userId, guestId);
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    // find the product in the cart
    const productIndex = cart.products.findIndex(
      (p) =>
        p.productId.toString() === productId &&
        p.size === size &&
        p.color === color,
    );
    if (productIndex === -1) {
      return res.status(404).json({ message: "Product not found in cart" });
    }
    // update the product quantity
    if (quantity === 0) {
      // 从productIndex开始删除1个元素
      cart.products.splice(productIndex, 1);
    } else {
      cart.products[productIndex].quantity = quantity;
    }
    // recalculate total price
    cart.totalPrice = cart.products.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    );
    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// @routes DELETE /api/cart
// @desc delete product from cart for guest or logged user
// @access Public
cartRouter.delete("/", async (req, res) => {
  const { productId, size, color, guestId, userId } = req.body;
  try {
    let cart = await getCart(userId, guestId);
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    // find the product in the cart
    const productIndex = cart.products.findIndex(
      (p) =>
        p.productId.toString() === productId &&
        p.size === size &&
        p.color === color,
    );
    if (productIndex === -1) {
      return res.status(404).json({ message: "Product not found in cart" });
    }
    cart.products.splice(productIndex, 1);
    // recalculate total price
    cart.totalPrice = cart.products.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    );
    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// @routes GET /api/cart
// @desc get cart for guest or logged user
// @access Public
cartRouter.get("/", async (req, res) => {
  const { userId, guestId } = req.query;
  const cart = await getCart(userId, guestId);
  if (!cart) {
    return res.status(404).json({ message: "Cart not found" });
  }
  res.status(200).json(cart);
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// 合并游客购物车到登录用户的购物车
// @routes POST /api/cart/merge
// @desc merge guest cart to logged user cart
// @access Private/logged user
cartRouter.post("/merge", protect, async (req, res) => {
  const { guestId } = req.body;
  try {
    // find the guest cart
    let guestCart = await Cart.findOne({ guestId });
    // 从protect里面拿userId （req.user._id）
    let userCart = await Cart.findOne({ user: req.user._id });
    if (guestCart) {
      // 有游客购物车，那就需要合并了
      if (guestCart.products.length === 0) {
        // 如果游客购物车是空的，那就直接删除游客购物车
        // await Cart.deleteOne({ guestId });
        return res.status(400).json({ message: "Guest cart is empty" });
      }
      if (userCart) {
        // 合并merge购物车
        // 从游客购物车里面遍历，看看有没有一样的商品，如果有就合并数量，如果没有就添加新的商品
        guestCart.products.forEach((product) => {
          const productIndex = userCart.products.findIndex(
            (p) =>
              p.productId.toString() === product.productId.toString() &&
              p.size === product.size &&
              p.color === product.color,
          );
          if (productIndex > -1) {
            // 有一样的商品
            userCart.products[productIndex].quantity += product.quantity;
          } else {
            // 没有一样的商品
            userCart.products.push(product);
          }
        });
        userCart.totalPrice = userCart.products.reduce(
          (acc, item) => (acc += item.price * item.quantity),
          0,
        );
        await userCart.save();
        // 合并完了之后，就可以删除游客购物车了
        try {
          await Cart.findOneAndDelete({ guestId });
        } catch (error) {
          console.log(error);
          res.status(500).json({ message: " Error when deleting guest cart" });
        }
        res.status(200).json(userCart);
      }
      // 没有用户购物车，那就直接把guest购物车的商品复制到用户购物车
      guestCart.user = req.user._id;
      guestCart.guestId = undefined;
      await guestCart.save();
      res.status(200).json(guestCart);
      // 合并完了之后，就可以删除游客购物车了
      // await Cart.findOneAndDelete({ guestId });
    } else {
      // 没有游客购物车，那就不需要合并了
      if (userCart) {
        // already merged
        res.status(200).json(userCart);
      }
      res.status(404).json({ message: "Guest cart not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});
export default cartRouter;
