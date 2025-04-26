/*
 * @Date: 2025-04-26 18:34:57
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-04-26 19:06:59
 * @FilePath: /E-Commerce-Rabbit/frontend/src/pages/Home.jsx
 */
import React from "react";
import Hero from "../components/Layout/Hero";
import GenderCollectionSection from "../components/Products/GenderCollectionSection";
const Home = () => {
  return (
    <>
      <div>
        <Hero />
        <GenderCollectionSection />
      </div>
    </>
  );
};

export default Home;
