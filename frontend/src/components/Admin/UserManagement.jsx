/*
 * @Date: 2025-05-04 12:11:36
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-05-04 12:28:33
 * @FilePath: /E-Commerce-Rabbit/frontend/src/components/Admin/UserManagement.jsx
 */
import React, { useState } from "react";
import { Users } from "@/utils/mockdb";
const UserManagement = () => {
  // 通用onchange function
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // reset the formdata after submision
    setFormData({
      name: "",
      email: "",
      password: "",
      role: "customer", //default
    });
  };
  // all fileds in formData
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer", //default
  });
  return (
    <div className="p-6 mx-auto max-w-7xl">
      <h2 className="mb-4 text-2xl font-bold">User Management</h2>
      {/* add new user Form */}
      <div className="p-6 mb-6 rounded-lg">
        <h3 className="mb-4 text-lg font-bold">Add New User</h3>
        <form onSubmit={handleSubmit}>
          {/* name */}
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text "
              className="p-2 w-full rounded border"
              required
              name="name"
              value={formData.name}
              onChange={handleChange}></input>
          </div>
          {/* email */}
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email "
              className="p-2 w-full rounded border"
              required
              name="email"
              value={formData.email}
              onChange={handleChange}></input>
          </div>

          {/* password */}
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password "
              className="p-2 w-full rounded border"
              required
              name="password"
              value={formData.password}
              onChange={handleChange}></input>
          </div>

          {/* role */}
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="p-2 w-full rounded border">
              <option className="" value="customer">
                Customer
              </option>
              <option className="" value="admin">
                Admin
              </option>
            </select>
          </div>

          {/* button */}
          <button
            type="submit"
            className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600">
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserManagement;
