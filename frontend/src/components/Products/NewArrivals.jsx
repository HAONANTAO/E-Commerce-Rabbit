/*
 * @Date: 2025-04-26 19:23:01
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-05-10 18:04:42
 * @FilePath: /E-Commerce-Rabbit/frontend/src/components/Products/NewArrivals.jsx
 */
import React, { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import axios from "axios";
// import { newProducts } from "../../utils/mockdb";
import { Link } from "react-router-dom";
const NewArrivals = () => {
  const [newProducts, setNewProducts] = useState([]);

  // 从后端拿到数据
  useEffect(() => {
    const fetchNewArrivals = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/new-arrivals`,
        );

        setNewProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNewArrivals();
  }, []);

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
    // 滚动距离一下是300px,是left就是往左边移动
    const scrollAmount = direction === "left" ? -350 : 350;

    // 滚动实现
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  // 按钮显示状态 获取位置信息
  const updateScrollButtons = () => {
    // 获取滚动容器
    const scrollContainer = scrollRef.current;

    // 打印滚动信息
    // scrollLeft- 元素已经滚动的水平距离 -从左边缘开始计算;
    // clientWidth ：-元素的可视宽度;
    // scrollWidth ：-元素的总内容宽度;
    // {scrollLeft: 0, clientWidth: 1536, containerScrollWidth: 3370}
    // console.log({
    //   scrollLeft: scrollContainer.scrollLeft,
    //   clientWidth: scrollContainer.clientWidth,
    //   containerScrollWidth: scrollContainer.scrollWidth,
    //   offsetLeft: scrollContainer.offsetLeft,
    // });

    if (scrollContainer) {
      // 获取左边滚动的距离，只要大于0 说明可以滚动
      setCanScrollLeft(scrollContainer.scrollLeft > 0);

      //  整个内容宽度只要大于左边滚动的距离加上可视宽度，只要大于0 说明可以滚动(但是肯呢个空几个px所以+100)
      setCanScrollRight(
        scrollContainer.scrollWidth >
          scrollContainer.scrollLeft + scrollContainer.clientWidth + 100,
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
      // 最佳实践！- 组件从页面中移除时（比如切换路由）- 组件重新渲染，导致 useEffect 需要重新执行时卸载
      return () => {
        // 移除事件
        scrollContainer.removeEventListener("scroll", updateScrollButtons);
      };
    }
  }, [newProducts]);

  // 鼠标按下 记录位置
  const handleMouseDown = (e) => {
    const scrollContainer = scrollRef.current;
    setIsDragging(true);
    // 1. e.pageX ：- 鼠标在整个页面上的水平位置坐标- 从页面左边缘开始计算
    // 2. scrollRef.current.offsetLeft ：- 滚动容器左边缘距离页面左边的距离
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    // 记录当前滚动位置，为了在mouseMove中做滚动拖拽
    setScrollLeft(scrollContainer.scrollLeft);
  };

  // 移动鼠标 实行拖拽滚动
  const handleMouseMove = (e) => {
    const scrollContainer = scrollRef.current;
    if (!isDragging) return;
    // 终止点
    const x = e.pageX - scrollRef.current.offsetLeft;
    // - 当你向右拖动时（walk 为正数），内容向左滚动（scrollLeft 减小）
    // - 当你向左拖动时（walk 为负数），内容向右滚动（scrollLeft 增大）
    // 计算鼠标移动的距离
    const walk = x - startX;
    // 设置滚动位置
    scrollContainer.scrollLeft = scrollLeft - walk;
  };
  // 抬起鼠标
  const handleMouseUp = () => {
    // 结束移动
    setIsDragging(false);
  };
  // 鼠标离开
  const handleMouseLeave = () => {};

  return (
    <section className="px-4 py-16 lg:px-0">
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
            disabled={!canScrollLeft}
            onClick={() => scroll("left")}
            className={`p-2  rounded border ${
              canScrollLeft
                ? "text-black bg-white"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}>
            <FiChevronLeft className="text-2xl" />
          </button>
          <button
            onClick={() => scroll("right")}
            className={`p-2  rounded border ${
              canScrollRight
                ? "text-black bg-white"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}>
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>

      {/* scroll contents */}
      <div
        ref={scrollRef}
        // 1. cursor-grab ：默认状态（未拖拽时）显示一个"抓取"手型光标
        // cursor-grabbing ：拖拽状态（正在拖拽时）显示一个"抓住"手型光标
        className={`${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        } container flex overflow-x-scroll relative mx-auto space-x-6`}
        // 按下鼠标和移动鼠标
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}>
        {newProducts.map((product, index) => (
          <div
            key={product._id}
            className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative">
            <img
              src={product.images[0].url}
              alt={product.images[0].altText || product.name}
              className="w-full h-[500px] object-cover rounded-lg"
              draggable={false}
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
