import { axiosInstance } from "@/api/axiosInstance";

export const getProducts = async () => {
  const response = await axiosInstance.get("/product");
  return response.data.data;
};
