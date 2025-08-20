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
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit: SubmitHandler<MikroVerifyDTO> = async (data) => {
    try {
      const client = await verifyCedula(data);
      const facturas = await getDeudas(data);

      if (!client) {
        setErrorMessage(
          "No encontramos un cliente con ese número de identificación."
        );
      }

      setUserMikrowisp(client);
      setFacturasMikrowisp(facturas);
    } catch (error) {
      // En el handleSubmit, si el backend devuelve que no existe:
      console.error("Error", error);
    }
  };

  const resetUser = () => {
    setUserMikrowisp(null);
    setErrorMessage("");
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
    errorMessage,
  };
};
