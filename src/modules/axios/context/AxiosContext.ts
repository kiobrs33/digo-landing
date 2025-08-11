import { createContext, useContext } from "react";
import { AxiosContextType } from "../types/axiosTypes";

export const AxiosContext = createContext<AxiosContextType | null>(null);

export const useAxiosContext = () => useContext(AxiosContext);
