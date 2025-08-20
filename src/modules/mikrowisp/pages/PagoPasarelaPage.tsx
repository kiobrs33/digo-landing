import { useParams } from "react-router-dom";
import { useState } from "react";

export const PagoPasarelaPage = () => {
  const { facturaId } = useParams();
  const [isPaying, setIsPaying] = useState(false);

  const handlePayment = () => {
    setIsPaying(true);
    setTimeout(() => {
      alert("Pago realizado con éxito");
      window.location.href = "mikro/dashboard";
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Pago de Factura #{facturaId}
        </h2>

        {/* Información de Factura */}
        <div className="mb-6">
          <p className="text-gray-700 mb-1">Monto a pagar:</p>
          <p className="text-2xl font-bold text-green-600">S/. 80.00</p>
        </div>

        {/* Formulario de pago simulado */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handlePayment();
          }}
          className="space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Número de tarjeta
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="**** **** **** ****"
              required
            />
          </div>

          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Expira
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="MM/AA"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                CVC
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="***"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isPaying}
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            {isPaying ? "Procesando..." : "Pagar ahora"}
          </button>
        </form>
      </div>
    </div>
  );
};
