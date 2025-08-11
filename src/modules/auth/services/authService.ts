import { axiosInstance } from "@/api/axiosInstance";
import { LoginDTO } from "../types/authTypes";

export const loginAuth = async (data: LoginDTO) => {
  const response = await axiosInstance.post("/auth/login", data);
  return response.data.data;
};
