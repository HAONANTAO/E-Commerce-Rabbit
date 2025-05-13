/*
 * @Date: 2025-05-13 22:10:17
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-05-13 22:10:19
 * @FilePath: /E-Commerce-Rabbit/frontend/src/components/ScrollToTop.jsx
 */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
