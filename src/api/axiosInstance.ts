import { config } from "@/config/env";
import { AuthState } from "@/modules/auth/types/authTypes";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: config.apiUrl, // Reemplaza con tu API base
  timeout: 10000, // Opcional: tiempo de espera
  headers: {
    "Content-Type": "application/json",
  },
});

// TODO: INTERCEPTORES
axiosInstance.interceptors.request.use(
  (config) => {
    const { token }: AuthState = JSON.parse(
      localStorage.getItem("authState") || "{}"
    );
    // const token = store.getState().auth.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log("ERROR en AXIOS => ", error);
    return Promise.reject(error);
  }
);
