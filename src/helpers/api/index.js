// src/utils/api.ts
import axios from "axios";
import { toast } from "react-toastify";

const apiURL = process.env.NEXT_PUBLIC_API_GATEWAY || "http://localhost:3000";

// const getToken = () => {
//   if (typeof window === "undefined") return undefined;
//   return JSON.parse(localStorage.getItem("authUser") || "{}")?.token || null;
// };

export const axiosInstance = axios.create({
  baseURL: apiURL,
  timeout: 60000,
  maxContentLength: Infinity,
  maxBodyLength: Infinity,
  withCredentials: false,
});

// ➕ Request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // const token = getToken();
    // if (token) {
    //   config.headers["Authorization"] = "Bearer " + token;
    // }

    config.headers["Access-Control-Expose-Headers"] = "Content-Disposition";
    config.headers["Access-Control-Allow-Origin"] = "*";
    config.headers["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE";
    config.headers["Access-Control-Allow-Headers"] =
      "Content-Type, Authorization";

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// ➕ Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const status = error?.response?.status;

    if (status === 401) {
      localStorage.removeItem("adminToken");
      window.location.href = "/admin/login";
    } else if (error?.response?.data?.exception) {
      throw error.response.data.exception;
    } else {
      const errorMessage = error?.response?.data?.message || "Bir hata oluştu!";
      toast.error(errorMessage, {
        autoClose: 3000,
      });
    }

    return Promise.reject(error);
  }
);

const API = axiosInstance;
export default API;
