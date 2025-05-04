/*
 * @Date: 2025-05-04 12:45:13
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-05-04 12:59:27
 * @FilePath: /E-Commerce-Rabbit/frontend/src/components/Admin/ProductsManagement.jsx
 */
import React from "react";
import { Products } from "@/utils/mockdb";
import { Link } from "react-router-dom";
const ProductsManagement = () => {
  // TODO
  const handleDelete = (productId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      console.log("delete id", productId);
    }
  };
  return (
    <div className="p-6 mx-auto max-w-7xl">
      <h2 className="mb-6 text-2xl font-bold">Product Management</h2>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">SKU</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {Products.length > 0 ? (
              Products.map((product, index) => (
                <tr
                  key={product._id}
                  className="border-b cursor-pointer hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                    {product.name}
                  </td>
                  <td className="p-4">${product.price}</td>
                  <td className="p-4">{product.sku}</td>
                  <td className="p-4">
                    <Link
                      to={`/admin/products/${product._id}/edit`}
                      className="px-2 py-1 mr-2 text-white bg-yellow-500 rounded hover:bg-yellow-600">
                      Edit
                    </Link>
                    <button
                      type="button"
                      onClick={() => handleDelete(product._id)}
                      className="px-2 py-1 text-white bg-red-500 rounded hover:bg-red-600">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="p-4 text-center text-gray-500" colSpan={4}>
                  No Products Found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsManagement;
