/*
 * @Date: 2025-04-26 18:35:16
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-04-26 18:56:43
 * @FilePath: /E-Commerce-Rabbit/frontend/src/components/Layout/Hero.jsx
 */
import React from "react";
import heroImage from "../../assets/rabbit-hero.webp";
const Hero = () => {
  return (
    <>
      <section>
        <img src={heroImage} alt="heroImage" />
      </section>
    </>
  );
};

export default Hero;
