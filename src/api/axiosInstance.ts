// src/api/axios.ts
import { config } from "@/config/env";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: config.apiUrl, // Reemplaza con tu API base
  timeout: 10000, // Opcional: tiempo de espera
  headers: {
    "Content-Type": "application/json",
  },
});

// INTERCEPTORES (opcional)
// axiosInstance.interceptors.request.use(
//   (config) => {
//     // const token = localStorage.getItem("token");
//     const token = store.getState().auth.token;
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log("ERROR axios", error);
    return Promise.reject(error);
  }
);
