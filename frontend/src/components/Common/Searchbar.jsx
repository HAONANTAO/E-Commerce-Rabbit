/*
 * @Date: 2025-04-22 21:46:46
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-04-22 22:01:29
 * @FilePath: /E-Commerce-Rabbit/frontend/src/components/Common/Searchbar.jsx
 */
import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

const Searchbar = () => {
  // 搜索词
  const [searchTerms, setSearchTerms] = React.useState("");
  // 搜索展开框
  const [isOpen, setIsOpen] = React.useState(false);
  // 搜索函数
  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div>
        {isOpen ? (
          <form className="flex relative justify-center items-center w-full">
            <div className="relative w-1/2">
              <input
                type="text"
                placeholder=" Search..."
                value={searchTerms}
                // outline-none 表示移除元素在获得焦点时浏览器默认添加的轮廓线
                className="px-4 py-2 pr-12 pl-2 w-full bg-gray-100 rounded-full focus:outline-none placeholder:text-gray-700"
              />
            </div>
          </form>
        ) : (
          <button
            className="relative hover:text-black"
            onClick={handleSearchToggle}>
            <HiMagnifyingGlass className="w-6 h-6 text-gray-700"></HiMagnifyingGlass>
          </button>
        )}
      </div>
    </>
  );
};

export default Searchbar;
