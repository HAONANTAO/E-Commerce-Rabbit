/*
 * @Date: 2025-05-10 14:01:28
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-05-10 14:26:23
 * @FilePath: /E-Commerce-Rabbit/frontend/src/redux/slices/authSlice.js
 */
// Redux 的工作流程：

// 1. 组件通过 dispatch 发送 action
// 2. reducer 根据 action 更新状态
// 3. 组件通过 useSelector 获取更新后的状态
// 4. 状态更新触发组件重新渲染

// createAsyncThunk用于处理异步操作（如 API 请求）
import {
  createSlice,
  createAsyncThunk,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import axios from "axios";

// retrieve user from local storage 从localStorage获取用户信息
const userFromStorage = localStorage.getItem("userInfo")
  ? // 将 JSON 格式的字符串转换为 JavaScript 对象
    JSON.parse(localStorage.getItem("userInfo"))
  : null;

// check for the existing guest id or generate new one
// 先看看有没有保存的游客id 没有就生成
const initialGuestId = localStorage.getItem("guestId") || `guest_${Date.now()}`;
localStorage.setItem("guestId", initialGuestId);

// initial state 定义初始状态对象，
const initialState = {
  user: userFromStorage,
  guestId: initialGuestId,
  error: null,
  loading: false,
};

// async thunk for user login
// Redux 异步 action creator
export const loginUser = createAsyncThunk(
  "/auth/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/login`,
        userData,
      );
      localStorage.setItem("userInfo", JSON.stringify(response.data.user));
      localStorage.setItem("userToken", response.data.token);
      return response.data.user;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

//
export const registerUser = createAsyncThunk(
  "/auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/register`,
        userData,
      );
      localStorage.setItem("userInfo", JSON.stringify(response.data.user));
      localStorage.setItem("userToken", response.data.token);
      return response.data.user;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

// Slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  // 同步操作 用于处理状态更新
  reducers: {
    logout: (state) => {
      state.user = null;
      state.guestId = `guest_${Date.now()}`; //reset
      localStorage.removeItem("userInfo");
      localStorage.removeItem("userToken");
      localStorage.setItem("guestId", state.guestId);
    },
    generateNewGuestId: (state) => {
      state.guestId = `guest_${Date.now()}`;
      localStorage.setItem("guestId", state.guestId);
    },
  },
  // 处理异步操作的三种状态：pending/fulfilled/rejected
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "登录失败，请稍后重试";
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "注册失败，请稍后重试";
      });
  },
});
export const { logout, generateNewGuestId } = authSlice.actions;
export default authSlice.reducer;
