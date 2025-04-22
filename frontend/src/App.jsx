import { BrowserRouter, Routes, Route } from "react-router-dom";
import Userlayout from "./components/Layout/Userlayout";

/*
 * @Date: 2025-04-20 21:08:35
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-04-22 22:04:56
 * @FilePath: /E-Commerce-Rabbit/frontend/src/App.jsx
 */
export default function App() {
  return (
    <>
      {/* react-router-dom */}
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}>
        <Routes>
          <Route path="/" element={<Userlayout />}>
            {/* User Layout */}
          </Route>
          <Route>{/* Admin Layout */}</Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
