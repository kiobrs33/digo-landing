import { ReactNode, useMemo } from "react";
import axios from "axios";
import { config } from "@/config/env";
import { AxiosContext } from "./AxiosContext";
import { useAuthContext } from "@/modules/auth/context/AuthContext";

export const AxiosProvider = ({ children }: { children: ReactNode }) => {
  const { state } = useAuthContext(); // Suponiendo que tienes un hook useAuth()

  const axiosInstance = useMemo(() => {
    const instance = axios.create({
      baseURL: config.apiUrl,
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
    });

    instance.interceptors.request.use(
      (config) => {
        if (state.token) {
          config.headers.Authorization = `Bearer ${state.token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    instance.interceptors.response.use(
      (response) => response,
      (error) => {
        console.log("ERROR en AXIOS => ", error);
        return Promise.reject(error);
      }
    );

    return instance;
  }, [state.token]); // Recrear la instancia cuando el token cambie

  return (
    <AxiosContext.Provider value={{ axiosInstance }}>
      {children}
    </AxiosContext.Provider>
  );
};
