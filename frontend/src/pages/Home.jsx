/*
 * @Date: 2025-04-26 18:34:57
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-04-28 19:06:53
 * @FilePath: /E-Commerce-Rabbit/frontend/src/pages/Home.jsx
 */
import React from "react";
import Hero from "../components/Layout/Hero";
import GenderCollectionSection from "../components/Products/GenderCollectionSection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";
import ProductGrid from "../components/Products/ProductGrid";
import { topWearsWomen } from "../utils/mockdb";
import FeatureCollection from "../components/Products/FeatureCollection";
const Home = () => {
  return (
    <>
      <div>
        <Hero />
        <GenderCollectionSection />
        <NewArrivals />

        {/* best seller */}
        <div>
          <h2 className="mb-4 text-3xl font-bold text-center">Best Seller</h2>
          <ProductDetails />

          {/*   Top Wears for Women */}
          <div className="container mx-auto">
            <h2 className="mb-4 text-3xl font-bold text-center">
              Top Wears for Women
            </h2>
            <ProductGrid products={topWearsWomen} />
          </div>

          {/*  FeatureCollection*/}
          <FeatureCollection />
        </div>
      </div>
    </>
  );
};

export default Home;
