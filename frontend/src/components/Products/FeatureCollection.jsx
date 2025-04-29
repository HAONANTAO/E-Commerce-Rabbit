import React from "react";
import { Link } from "react-router-dom";
import featured from "@/assets/featured.webp";
const FeatureCollection = () => {
  return (
    <>
      <section className="px-4 py-16 lg:px-0">
        {/* flex-col-reverse mobile version 先图片*/}
        <div className="container flex flex-col-reverse items-center mx-auto bg-green-50 rounded-3xl lg:flex-row">
          {/* left content */}
          <div className="p-8 text-center lg:w-1/2 lg:text-left">
            <h2 className="mb-2 text-lg font-semibold text-gray-700">
              Comfort and Style
            </h2>
            <h2 className="mb-6 text-4xl font-bold lg:text-5xl">
              {/* 服装 */}
              Apparel for everyday life
            </h2>
            <p className="mb-6 text-lg text-gray-600">
              Discover high-quality clothing that suits your style and
              personality.Designed to make you feel confident and comfortable.
            </p>
            {/* TODO */}
            {/* Link其实就是一个按钮的样式 */}
            <Link
              to="/collections/all"
              className="px-6 py-3 text-lg text-white bg-black rounded-lg hover:bg-gray-800">
              Shop Now
            </Link>
          </div>

          {/* right component */}
          <div className="lg:w-1/2">
            <img
              src={featured}
              alt="Feature Collection"
              className="object-contain w-full h-full lg:rounded-tr-3xl lg:rounded-br-3xl"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureCollection;
