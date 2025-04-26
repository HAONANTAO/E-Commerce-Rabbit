/*
 * @Date: 2025-04-26 18:35:16
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-04-26 19:02:39
 * @FilePath: /E-Commerce-Rabbit/frontend/src/components/Layout/Hero.jsx
 */
import React from "react";
import heroImage from "../../assets/rabbit-hero.webp";
const Hero = () => {
  return (
    <>
      <section className="relative">
        {/* hero image */}
        <img
          src={heroImage}
          alt="heroImage"
          className="w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover"
        />
        {/* - 
    - 四边都贴合父元素（ inset-0 ）
    - 从而实现完全覆盖父元素的效果 */}
        <div className="flex absolute inset-0 justify-center items-center bg-black bg-opacity-10">
          <div className="p-6 text-center text-white">
            <h1 className="mb-4 text-4xl font-bold tracking-tighter uppercase md:text-9xl">
              Vacation
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
