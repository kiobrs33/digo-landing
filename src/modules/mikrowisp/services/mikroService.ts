import axios from "axios";
import { MikroVerifyDTO } from "../types/mikroTypes";
import { config } from "@/config/env";

export const verifyCedula = async (data: MikroVerifyDTO) => {
  const response = await axios.post(
    "https://app.digo.net.pe/api/v1/GetClientsDetails",
    {
      token: config.mikrowispKey,
      ...data,
    }
  );
  // return response.data?.datos[0];
  return response.data?.datos?.[0] ?? null;
};

export const getDeudas = async (data: MikroVerifyDTO) => {
  const response = await axios.post(
    "https://app.digo.net.pe/facilito/consultadeuda",
    {
      token: config.mikrowispKey,
      ...data,
    }
  );
  return response.data.facturas;
};
