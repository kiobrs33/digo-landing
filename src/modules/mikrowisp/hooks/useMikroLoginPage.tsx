import { SubmitHandler, useForm } from "react-hook-form";
import { MikroLoginDTO } from "../types/mikroTypes";

export const useMikroLoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<MikroLoginDTO>();

  const onSubmit: SubmitHandler<MikroLoginDTO> = async (data) => {
    console.log("login");
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isSubmitting,
  };
};
