/*
 * @Date: 2025-04-26 19:23:01
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-04-26 20:02:10
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
  const [canScrollRight, setCanScrollRight] = useState(true);

  // 获取滚动容器
  const scrollContainer = scrollRef.current;

  // updateScrollButtons
  // 按钮显示状态
  const updateScrollButtons = () => {
    // scrollLeft- 元素已经滚动的水平距离 -从左边缘开始计算;
    // clientWidth ：-元素的可视宽度;
    // scrollWidth ：-元素的总内容宽度;

    console.log({
      scrollLeft: container.scrollLeft,
      clientWidth: container.clientWidth,
      containerScrollWidth: container.scrollWidth,
    });
  };

  // 初始化滚动位置
  useEffect(() => {
    if (container) {
      // 监听事件
      scrollContainer.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
    }
  }, {});

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
          <button className="p-2 text-black bg-white rounded border">
            <FiChevronLeft className="text-2xl" />
          </button>
          <button className="p-2 text-black bg-white rounded border">
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
