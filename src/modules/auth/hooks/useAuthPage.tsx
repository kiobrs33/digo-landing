import { useAuthContext } from "../context/AuthContext";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginDTO } from "../types/authTypes";
import { loginAuth } from "../services/authService";

export const useAuthPage = () => {
  const { dispatch } = useAuthContext();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginDTO>();

  const onSubmit: SubmitHandler<LoginDTO> = async (data) => {
    try {
      const response = await loginAuth(data);
      const { token, user } = response;

      dispatch({ type: "LOGIN", payload: { token, user } });
    } catch (error) {
      console.error("Error de login", error);
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isSubmitting,
  };
};
