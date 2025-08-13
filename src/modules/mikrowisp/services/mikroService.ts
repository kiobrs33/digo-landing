import axios from "axios";
import { MikroLoginDTO } from "../types/mikroTypes";

export const mikroLoginAuth = async (data: MikroLoginDTO) => {
  const response = await axios.post(
    "https://app.digo.net.pe/api/v1/GetClientsDetails",
    data
  );
  return response.data.datos[0];
};
