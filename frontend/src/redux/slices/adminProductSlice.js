/*
 * @Date: 2025-05-10 16:42:55
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-05-11 16:28:22
 * @FilePath: /E-Commerce-Rabbit/frontend/src/redux/slices/adminProductSlice.js
 */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = `${import.meta.env.VITE_BACKEND_URL}`;
const userToken = `Bearer ${localStorage.getItem("userToken")}`;

//async thunk to fetch the admin products
export const fetchAdminProducts = createAsyncThunk(
  "adminProducts/fetchProducts",
  async () => {
    const response = await axios.get(`${API_URL}/api/admin/products`, {
      headers: {
        Authorization: userToken,
      },
    });
    return response.data;
  },
);

//async function to create a new product
export const createProduct = createAsyncThunk(
  "adminProducts/createProduct",
  async (productData) => {
    const response = await axios.post(
      `${API_URL}/api/admin/products`,
      productData,
      {
        headers: {
          Authorization: userToken,
        },
      },
    );
    return response.data;
  },
);

//async thunk to update an existing product
export const updateProduct = createAsyncThunk(
  "adminProducts/updateProduct",
  async ({ id, productData }) => {
    try {
      const response = await axios.put(
        `${API_URL}/api/products/${id}`,
        productData,
        { headers: { Authorization: userToken } },
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

//async thunk to delete the product
export const deleteProduct = createAsyncThunk(
  "adminProducts/deleteProduct",

  async ({ id }) => {
    await axios.delete(`${API_URL}/api/products/${id}`, {
      headers: { Authorization: userToken },
    });

    return id;
  },
);

const adminProductSlice = createSlice({
  name: "adminProduct",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdminProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAdminProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchAdminProducts.rejected, (state) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // create product
      .addCase(createProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })

      //update product
      .addCase(updateProduct.fulfilled, (state, action) => {
        const updatedProduct = action.payload;

        const updatedIndex = state.products.findIndex(
          (pro) => pro._id === updatedProduct._id,
        );
        if (updatedIndex !== -1) {
          state.products[updatedIndex] = updatedProduct;
        }
      })
      //delete product
      .addCase(deleteProduct.fulfilled, (state, action) => {
        const deleteProductId = action.payload;
        state.products = state.products.filter(
          (pro) => pro._id !== deleteProductId,
        );
      });
  },
});
export default adminProductSlice.reducer;
