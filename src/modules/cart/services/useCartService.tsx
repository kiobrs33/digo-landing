import { useAxiosContext } from "@/modules/axios/context/AxiosContext";

export const useCartService = () => {
  const { axiosInstance } = useAxiosContext();

  const getProducts = async () => {
    const response = await axiosInstance.get("/product");
    return response.data.data;
  };

  return {
    getProducts,
  };
};
