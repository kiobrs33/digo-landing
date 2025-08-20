import { SubmitHandler, useForm } from "react-hook-form";
import { MikroFactura, MikroUser, MikroVerifyDTO } from "../types/mikroTypes";
import { getDeudas, verifyCedula } from "../services/mikroService";
import { useState } from "react";

export const useMikroVerifyPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<MikroVerifyDTO>();

  const [userMikrowisp, setUserMikrowisp] = useState<MikroUser>(null);
  const [facturasMikrowisp, setFacturasMikrowisp] = useState<MikroFactura[]>(
    []
  );

  const onSubmit: SubmitHandler<MikroVerifyDTO> = async (data) => {
    try {
      const client = await verifyCedula(data);
      const facturas = await getDeudas(data);
      setUserMikrowisp(client);
      setFacturasMikrowisp(facturas);
    } catch (error) {
      console.error("Error de login", error);
    }
  };

  const resetUser = () => {
    setUserMikrowisp(null);
    reset();
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isSubmitting,
    userMikrowisp,
    facturasMikrowisp,
    resetUser,
  };
};
