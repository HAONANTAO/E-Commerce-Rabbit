/*
 * @Date: 2025-04-26 19:23:01
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-04-26 20:22:51
 * @FilePath: /E-Commerce-Rabbit/frontend/src/components/Products/NewArrivals.jsx
 */
import React, { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { newProducts } from "../../utils/mockdb";
import { Link } from "react-router-dom";
const NewArrivals = () => {
  // 点击按钮滚动
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = React.useState(false);
  // x位置滚动初始位置
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  // 初始化只可以往右边滚动
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [canScrollLeft, setCanScrollLeft] = useState(false);

  // 滚动实现
  const scroll = (direction) => {
    // 滚动距离一下是300px
    const scrollAmount = direction === "left" ? -300 : 300;
    // 滚动实现
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  // 按钮显示状态
  const updateScrollButtons = () => {
    // 获取滚动容器
    const scrollContainer = scrollRef.current;

    // 打印滚动信息
    // scrollLeft- 元素已经滚动的水平距离 -从左边缘开始计算;
    // clientWidth ：-元素的可视宽度;
    // scrollWidth ：-元素的总内容宽度;
    // {scrollLeft: 0, clientWidth: 1536, containerScrollWidth: 3370}
    console.log({
      scrollLeft: scrollContainer.scrollLeft,
      clientWidth: scrollContainer.clientWidth,
      containerScrollWidth: scrollContainer.scrollWidth,
    });

    if (scrollContainer) {
      // 获取左边滚动的距离，只要大于0 说明可以滚动
      setCanScrollLeft(scrollContainer.scrollLeft > 0);

      //  整个内容宽度只要大于左边滚动的距离加上可视宽度，只要大于0 说明可以滚动
      setCanScrollRight(
        scrollContainer.scrollWidth > leftScroll + scrollContainer.clientWidth,
      );
    }
  };

  // 初始化滚动位置
  useEffect(() => {
    // 获取滚动容器
    const scrollContainer = scrollRef.current;

    if (scrollContainer) {
      // 监听事件
      scrollContainer.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
    }
  }, []);

  return (
    <section>
      {/* top section */}
      <div className="container relative mx-auto mt-10 text-center">
        <h2 className="mb-4 text-3xl font-bold">Explore New Arrivals</h2>
        <p className="mb-8 text-lg text-gray-600">
          Discover our latest collection of stylish and trendy products. Shop
          now and experience the perfect blend of fashion and comfort.
        </p>

        {/* scroll button */}
        <div className="flex absolute right-0 bottom-[-20px] space-x-2">
          <button
            onClick={scroll("left")}
            className="p-2 text-black bg-white rounded border">
            <FiChevronLeft className="text-2xl" />
          </button>
          <button
            onClick={scroll("right")}
            className="p-2 text-black bg-white rounded border">
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>

      {/* scroll contents */}
      <div
        ref={scrollRef}
        className="container flex overflow-x-scroll relative mx-auto space-x-6">
        {newProducts.map((product, index) => (
          <div
            key={product._id}
            className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative">
            <img
              src={product.images[0].url}
              alt={product.images[0].altText || product.name}
              className="w-full h-[500px] object-cover rounded-lg"
            />
            {/* backdrop-blur-md 磨砂玻璃效果*/}
            <div className="absolute right-0 bottom-0 left-0 p-4 text-white bg-opacity-50 rounded-b-lg backdrop-blur-md">
              {/* TODO */}
              <Link to={`/product/${product._id}`} className="block">
                <h4 className="font-medium">{product.name}</h4>
                <p className="mt-1">$ {product.price} </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
