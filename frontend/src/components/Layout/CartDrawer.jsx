/*
 * @Date: 2025-04-23 21:51:05
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-05-11 13:01:41
 * @FilePath: /E-Commerce-Rabbit/frontend/src/components/Layout/CartDrawer.jsx
 */

import { IoMdClose } from "react-icons/io";
import CartContent from "../Cart/CartContent";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// 购物车列表
const CartDrawer = ({ isOpen, toggleDrawer }) => {
  const navigate = useNavigate();
  const { user, guestId } = useSelector((state) => state.auth);

  const { cart } = useSelector((state) => state.cart);
  console.log(cart);
  const userId = user ? user.id : null;
  const handleCheckOut = () => {
    // 跳转到checkout页面,但是也要关闭侧边栏
    toggleDrawer();
    // 没登录不可以checkout！
    if (!user) {
      navigate("/login?redirect=checkout");
    } else {
      navigate("/checkout");
    }
  };
  return (
    <>
      {/* transform transition-transform 让你可以对元素使用例如旋转、缩放、位移、倾斜等效果 然后加上过渡动画 */}
      {/* medium size固定大小显示cart */}
      <div
        className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem]  h-full bg-white shadow-lg  duration-300 flex flex-col z-[999] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        {/* close button */}
        <div className="flex justify-end p-4">
          <button onClick={toggleDrawer}>
            <IoMdClose className="w-6 h-6 text-gray-600 hover:text-gray-700"></IoMdClose>
          </button>
        </div>
        {/* Cart contents with scrolling */}
        <div className="overflow-y-auto flex-grow p-4">
          <h2 className="mb-4 text-xl font-semibold">Your Cart</h2>
          {cart && cart?.products?.length > 0 ? (
            <CartContent cart={cart} userId={userId} guestId={guestId} />
          ) : (
            <p>Your Cart is Empty.</p>
          )}
          {/* components for cart contents */}
        </div>

        {/* checkout button fixed at bottom */}
        {/* sticky 为了可以在很多内容的时候
        这个结账区域会"粘住"在视图底部，不会随着内容滚动而消失*/}
        <div className="sticky bottom-0 p-4 bg-white">
          {cart && cart?.products?.length > 0 && (
            <>
              <button
                onClick={handleCheckOut}
                className="py-3 w-full font-semibold text-white bg-black rounded-lg transition hover:bg-gray-800">
                Checkout
              </button>
              {/* 「字母之间的间距（letter-spacing）」，
          而 tracking-tighter 就是：让字母之间更紧凑！ */}
              <p className="mt-2 text-sm font-normal tracking-tighter text-center text-gray-600">
                Shipping, taxes, and discount codes calculated at checkout
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
