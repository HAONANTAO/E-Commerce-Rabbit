/*
 * @Date: 2025-04-26 18:34:57
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-05-11 13:29:28
 * @FilePath: /E-Commerce-Rabbit/frontend/src/pages/Home.jsx
 */
import React, { useEffect, useState } from "react";
import Hero from "@/components/Layout/Hero";
import GenderCollectionSection from "@/components/Products/GenderCollectionSection";
import NewArrivals from "@/components/Products/NewArrivals";
import ProductDetails from "@/components/Products/ProductDetails";
import ProductGrid from "@/components/Products/ProductGrid";
// import { topWearsWomen } from "@/utils/mockdb";
import FeatureCollection from "@/components/Products/FeatureCollection";
import FeatureSection from "@/components/Products/FeatureSection";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByFilters } from "../redux/slices/productSlice";
import axios from "axios";
const Home = () => {
  const dispatch = useDispatch();
  const [bestSellerProducts, setBestSellerProducts] = useState(null);
  // useSelector 拿到整个 Redux 的状态 state。
  // 然后从 state.productState 中取出 products、loading 和 error 三个字段。
  const { products, loading, error } = useSelector((state) => state.products);
  useEffect(() => {
    //fetch products for a specific collection
    dispatch(
      // 这就是top wear women!
      fetchProductsByFilters({
        gender: "Women",
        category: "Bottom Wear",
        limit: 8,
      }),
    );
    // fetch the best seller products
    const fetchBestSeller = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/best-seller`,
        );
        // console.log("the best seller", response.data);
        setBestSellerProducts(response.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBestSeller();
    // “防御性编程”。[dispatch]
  }, [dispatch]);

  return (
    <>
      <div>
        <Hero />
        <GenderCollectionSection />
        <NewArrivals />

        {/* best seller */}

        <h2 className="mb-4 text-3xl font-bold text-center">Best Seller</h2>
        {bestSellerProducts ? (
          <ProductDetails productId={bestSellerProducts._id} />
        ) : (
          <p className="text-center">Loading best seller products...</p>
        )}

        {/*   Top Wears for Women */}
        <div className="container mx-auto">
          <h2 className="mb-4 text-3xl font-bold text-center">
            Top Wears for Women
          </h2>
          <ProductGrid products={products} loading={loading} error={error} />
        </div>

        {/*  FeatureCollection*/}
        <FeatureCollection />

        {/* features section */}
        <FeatureSection />
      </div>
    </>
  );
};

export default Home;
