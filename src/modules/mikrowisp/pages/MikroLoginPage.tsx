import { useMikroLoginPage } from "../hooks/useMikroLoginPage";

export const MikroLoginPage = () => {
  const { register, handleSubmit, errors, isSubmitting } = useMikroLoginPage();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Verificación de Identidad
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Número de identificación
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Ingrese su número"
              {...register("identification", {
                required: "El número de identificación es obligatorio",
                pattern: {
                  value: /^[0-9]{8,11}$/,
                  message: "Debe tener entre 8 y 11 dígitos",
                },
              })}
            />
            {errors.identification && (
              <p className="text-red-500 text-sm mt-1">
                {errors.identification.message}
              </p>
            )}
          </div>
          <button
            disabled={isSubmitting}
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            {isSubmitting ? "Verificando..." : "Continuar"}
          </button>
        </form>
      </div>
    </div>
  );
};
