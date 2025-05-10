/*
 * @Date: 2025-04-27 11:33:34
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-05-10 18:54:17
 * @FilePath: /E-Commerce-Rabbit/frontend/src/components/Products/ProductDetails.jsx
 */
import React, { useEffect, useState } from "react";
// import { selectedProducts, similarProducts } from "../../utils/mockdb";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSimilarProducts,
  fetchSingleProduct,
} from "../../redux/slices/productSlice";
import { addItemToCart } from "../../redux/slices/cartSlice";
const ProductDetails = ({ productId }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedProducts, loading, error, similarProducts } = useSelector(
    (state) => state.products,
  );
  const { user, guestId } = useSelector((state) => state.auth);
  const [imgUrl, setImgUrl] = useState("");
  const [selectSize, setSelectSize] = useState("");
  const [selectColor, setSelectColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const productFetchId = productId || id;
  useEffect(() => {
    if (productFetchId) {
      dispatch(fetchSingleProduct(productFetchId));
      dispatch(fetchSimilarProducts({ id: productFetchId }));
    }
  }, [dispatch, productFetchId]);

  useEffect(() => {
    if (selectedProducts?.images?.length > 0) {
      setImgUrl(selectedProducts.images[0].url);
    }
  }, [selectedProducts]);

  // 数量加减
  const handleQuantityChange = (action) => {
    if (action === "increment") {
      setQuantity((prevQuantity) => prevQuantity + 1);
    } else if (action === "decrement" && quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  // 加入购物车
  const handleAddToCart = () => {
    if (!selectSize || !selectColor) {
      toast.error("Please Select Size and Color before adding to cart!", {
        duration: 1000,
      });
      return;
    }
    // 都选了就可以计入购物车
    // 先按钮不可用
    setIsButtonDisabled(true);
    // 过段时间回复按钮功能
    dispatch(
      addItemToCart({
        productId: productFetchId,
        quantity,
        size: selectSize,
        color: selectColor,
        guestId,
        userId: user?._id,
      }),
    )
      .then(() => {
        toast.success("Product added to the cart!", {
          duration: 1000,
        });
      })
      .finally(() => {
        setIsButtonDisabled(false);
      });
  };
  if (!selectedProducts || !selectedProducts.images) {
    return <p>Loading product details...</p>;
  }
  if (loading) {
    <p>Loading...</p>;
  }
  if (error) {
    <p>Error:{error}</p>;
  }
  return (
    <>
      <div className="p-6">
        {selectedProducts && (
          <div className="p-8 mx-auto max-w-6xl bg-white rounded-lg">
            {/* 上部分 */}
            <div className="flex flex-col md:flex-row">
              {/* left thumbnails缩略图 */}
              <div className="hidden flex-col mr-6 space-y-4 md:flex">
                {selectedProducts.images.map((image, index) => (
                  <img
                    src={image.url}
                    alt={image.altText || `thumbnails ${index}`}
                    key={index}
                    className={`${
                      imgUrl === image.url ? "border-black" : "border-gray-300"
                    } object-cover w-20 h-20 rounded-lg border cursor-pointer`}
                    onClick={() => setImgUrl(image.url)}
                  />
                ))}
              </div>

              {/* main image */}
              <div className="md:w-1/2">
                <div className="mb-4">
                  <img
                    src={imgUrl}
                    alt="Main Product"
                    className="object-cover w-full h-auto rounded-lg"
                  />
                </div>
              </div>

              {/* mobile thumbnails */}
              <div className="flex overscroll-x-contain mb-4 space-x-4 md:hidden">
                {selectedProducts.images.map((image, index) => (
                  <img
                    src={image.url}
                    alt={image.altText || `thumbnails ${index}`}
                    key={index}
                    onClick={() => setImgUrl(image.url)}
                    className={`${
                      imgUrl === image.url ? "border-black" : "border-gray-300"
                    } object-cover w-20 h-20 rounded-lg border cursor-pointer`}
                  />
                ))}
              </div>

              {/* right section */}
              <div className="flex flex-col md:w-1/2 md:ml-10">
                <h1 className="mb-2 text-2xl font-semibold md:text-3xl">
                  {selectedProducts.name}
                </h1>

                {/* prices */}
                {/* line-through会在文本上添加一条删除线。原价 */}
                <p className="mb-1 text-lg text-gray-600 line-through">
                  {selectedProducts.originalPrice &&
                    `$ ${selectedProducts.originalPrice}`}
                </p>
                <p className="mb-2 text-xl text-gray-500">
                  ${selectedProducts.price}
                </p>

                {/* description */}
                <p className="mb-4 text-gray-600">
                  {selectedProducts.description}
                </p>

                {/* colors */}
                <div className="mb-4">
                  <p className="text-gray-700">Color:</p>
                  <div className="flex gap-2 mt-2">
                    {selectedProducts.colors.map((col, index) => (
                      <button
                        onClick={() => setSelectColor(col)}
                        key={index}
                        className={`${
                          selectColor === col
                            ? "border-4 border-black "
                            : "border-gray-300"
                        } w-8 h-8 rounded-full border`}
                        // 因为背景颜色是动态的
                        style={{
                          backgroundColor: col.toLowerCase(),
                          filter: "brightness(0.7)",
                        }}></button>
                    ))}
                  </div>
                </div>

                {/* sizes */}
                <div className="mb-4">
                  <p className="text-gray-700">Size:</p>
                  <div className="flex gap-2 mt-2">
                    {selectedProducts.sizes.map((size, index) => (
                      <button
                        onClick={() => setSelectSize(size)}
                        key={index}
                        className={`${
                          selectSize === size ? "bg-black text-white" : ""
                        } px-4 py-2 rounded border`}>
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* quantity */}
                <div className="mb-6">
                  <p className="text-gray-700">Quantity:</p>
                  <div className="flex items-center mt-2 space-x-4">
                    <button
                      onClick={() => handleQuantityChange("decrement")}
                      disabled={quantity === 0}
                      className="px-2 py-1 text-lg bg-gray-200 rounded">
                      -
                    </button>
                    <span className="text-lg">{quantity}</span>
                    <button
                      onClick={() => handleQuantityChange("increment")}
                      className="px-2 py-1 text-lg bg-gray-200 rounded">
                      +
                    </button>
                  </div>
                </div>

                {/* add to cart */}
                <button
                  onClick={() => handleAddToCart()}
                  className={`${
                    isButtonDisabled
                      ? "cursor-not-allowed opacity-50"
                      : "hover:bg-gray-900"
                  } px-6 py-2 mb-4 w-full text-white bg-black rounded`}
                  disabled={isButtonDisabled}>
                  {isButtonDisabled ? "Adding ..." : "ADD TO CART"}
                </button>

                {/* Characteristics */}
                <div className="mt-10 text-gray-700">
                  <h3 className="mb-4 text-xl font-bold">Characteristics</h3>
                  <table className="w-full text-sm text-left text-gray-600">
                    <tbody>
                      <tr>
                        <td className="py-1">Brand</td>
                        <td className="py-1">{selectedProducts.brand}</td>
                      </tr>
                      <tr>
                        <td className="py-1">Material</td>
                        <td className="py-1">{selectedProducts.material}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* you also like! */}
            <div className="mt-20">
              <h2 className="mb-4 text-2xl font-medium text-center">
                You May Also Like...
              </h2>
              <ProductGrid
                products={similarProducts}
                loading={loading}
                error={error}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductDetails;
