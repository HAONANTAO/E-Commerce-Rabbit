/*
 * @Date: 2025-05-04 15:45:37
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-05-04 16:15:34
 * @FilePath: /E-Commerce-Rabbit/frontend/src/components/Admin/EditProduct.jsx
 */
import React, { useState } from "react";

const EditProduct = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(productData);
  };
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: 0,
    countingStock: 0,
    sku: "",
    category: "",
    brand: "",
    sizes: [],
    colors: [],
    collections: "",
    material: "",
    gender: "",
    images: [
      {
        url: "https://picsum.photos/150?random=1",
      },
      {
        url: "https://picsum.photos/150?random=2",
      },
    ],
  });
  const handleOnchange = (e) => {
    setProductData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const handleImageUpload = async (e) => {
    // 处理图片上传逻辑

    console.log(productData.images);
  };
  return (
    <div className="p-6 mx-auto max-w-5xl rounded shadow-md">
      <h2 className="mb-6 text-3xl font-bold">Edit Product</h2>
      {/* 编辑产品信息表格 */}
      <form onSubmit={handleSubmit}>
        {/* name */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold"> Product Name</label>
          <input
            required
            type="text"
            name="name"
            value={productData.name}
            onChange={handleOnchange}
            className="p-2 w-full rounded-md border border-gray-300"
          />
        </div>

        {/* description */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">Description</label>
          <textarea
            required
            name="description"
            value={productData.description}
            onChange={handleOnchange}
            row={4}
            className="p-2 w-full rounded-md border border-gray-300"
          />
        </div>

        {/* price input */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">Price</label>
          <input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleOnchange}
            className="p-2 w-full rounded-md border border-gray-300"
          />
        </div>

        {/* count in stock 库存 */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">Counting in Stock</label>
          <input
            type="number"
            name="countingStock"
            value={productData.countingStock}
            onChange={handleOnchange}
            className="p-2 w-full rounded-md border border-gray-300"
          />
        </div>

        {/* sku */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">SKU</label>
          <input
            type="text "
            name="sku"
            value={productData.sku}
            onChange={handleOnchange}
            className="p-2 w-full rounded-md border border-gray-300"
          />
        </div>

        {/* size */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">
            Sizes (comma-separated)
          </label>
          <input
            type="text "
            name="sizes"
            value={productData.sizes.join(",")}
            onChange={(e) =>
              setProductData((prevData) => ({
                ...prevData,
                // 不要空格
                sizes: e.target.value.split(",").map((size) => size.trim()),
              }))
            }
            className="p-2 w-full rounded-md border border-gray-300"
          />
        </div>

        {/* colors */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">
            Colors (comma-separated)
          </label>
          <input
            type="text "
            name="colors"
            value={productData.colors.join(",")}
            onChange={(e) =>
              setProductData((prevData) => ({
                ...prevData,
                // 不要空格
                colors: e.target.value.split(",").map((color) => color.trim()),
              }))
            }
            className="p-2 w-full rounded-md border border-gray-300"
          />
        </div>

        {/* images upload */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">Upload Images</label>
          <input type="file" name="" value="" onChange={handleImageUpload} />
          <div className="flex gap-4 mt-4">
            {productData.images.map((image, index) => (
              <div key={index}>
                <img
                  src={image.url}
                  alt={image.altText || "Product Image"}
                  className="object-cover w-20 h-20 rounded-md shadow-md"
                />
              </div>
            ))}
          </div>
        </div>

        {/* button */}
        {/* transition-colors */}
        <button
          type="submit"
          className="py-2 w-full text-white bg-green-500 rounded-md transition-colors hover:bg-green-600">
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
