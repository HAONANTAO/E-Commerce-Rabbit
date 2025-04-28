import React from "react";

const FeatureCollection = () => {
  return (
    <>
      <section className="px-4 py-16 lg:px-0">
        {/* flex-col-reverse 因为从右边写起来*/}
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
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureCollection;
