import { createSlice } from "@reduxjs/toolkit";

import decode from "jwt-decode";

let token = localStorage.getItem("token");

const details = token && decode(token);

const initialState = {
  token: token,
  role: details?.role || "user",
  isLoggedIn: token ? true : false,
};

const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.token = payload.token;
      state.isLoggedIn = true;
      state.role = payload.role;
    },
    logout: (state, { payload }) => {
      state.token = "";
      state.isLoggedIn = false;
      state.role = payload.role;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
