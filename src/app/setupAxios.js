import axios from "axios";

import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { axiosSettings } from "../constants/axiosSettings";

import { logout } from "./modules/Auth/redux/AuthReducer";

const setupAxios = ({ children }) => {
  const userAuth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    axios.interceptors.request.use(
      (config) => {
        const { token } = userAuth;

        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
      },
      (err) => Promise.reject(err)
    );
    axios.interceptors.response.use(
      (config) => {
        return config;
      },
      (error) => {
        if (error?.response && error.response?.data) {
          if (
            error.response.data?.[axiosSettings.logout.field] ===
            axiosSettings.logout.code
          ) {
            // logout
            dispatch(logout());
          }
        }
        return Promise.reject(error);
      }
    );
  }, [userAuth]);

  return <>{children}</>;
};

export default setupAxios;
