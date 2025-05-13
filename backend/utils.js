/*
 * @Date: 2025-05-05 22:40:01
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-05-13 20:53:36
 * @FilePath: /E-Commerce-Rabbit/backend/utils.js
 */
// utils/errorHandler.js
const handleServerError = (res, error) => {
  console.error(error);
  res.status(500).json({ message: `Server Error:${error.message}` });
};
export { handleServerError };
