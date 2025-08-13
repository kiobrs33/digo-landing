// export const MikroClientPage = () => {
//   return <div>MikroClientPage</div>;
// };

import { useState } from "react";

// Datos simulados del cliente
const clienteData = {
  id: 20,
  nombre: "ANGEL IGNACIO GALDOS TELLEZ",
  estado: "SUSPENDIDO",
  correo: "",
  telefono: "",
  movil: "959390107",
  cedula: "43325205",
  codigo: "43325205",
  direccion_principal: "CL. INDEPENDENCIA MZ.N LT.6 BELLA PAMPA",
  fecha_suspendido: "2025-08-11 03:00:02",
  facturacion: {
    facturas_nopagadas: 1,
    total_facturas: "80.00",
  },
};

// Deudas simuladas
const deudasData = [
  {
    IDFactura: 3350,
    detalle: "Pago de comprobante Nº 00003350 -  Vencimiento: 01/08/2025",
    valor: "80.00",
  },
];

export const MikroClientPage = () => {
  const [paginaActual, setPaginaActual] = useState(1);
  const porPagina = 5;

  const totalPaginas = Math.ceil(deudasData.length / porPagina);
  const inicio = (paginaActual - 1) * porPagina;
  const deudasPagina = deudasData.slice(inicio, inicio + porPagina);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Información del Cliente */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Información del Cliente
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <p>
            <span className="font-semibold">Nombre:</span> {clienteData.nombre}
          </p>
          <p>
            <span className="font-semibold">Estado:</span>
            <span
              className={`ml-2 px-2 py-1 rounded text-white text-sm ${
                clienteData.estado === "SUSPENDIDO"
                  ? "bg-red-500"
                  : "bg-green-500"
              }`}
            >
              {clienteData.estado}
            </span>
          </p>
          <p>
            <span className="font-semibold">Teléfono:</span>{" "}
            {clienteData.movil || clienteData.telefono}
          </p>
          <p>
            <span className="font-semibold">DNI/Cédula:</span>{" "}
            {clienteData.cedula}
          </p>
          <p>
            <span className="font-semibold">Dirección:</span>{" "}
            {clienteData.direccion_principal}
          </p>
          <p>
            <span className="font-semibold">Deudas:</span>{" "}
            {clienteData.facturacion.facturas_nopagadas} (
            {clienteData.facturacion.total_facturas} S/)
          </p>
        </div>
      </div>

      {/* Tabla de Deudas */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Deudas del Cliente
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="py-2 px-4 border-b">Factura</th>
                <th className="py-2 px-4 border-b">Detalle</th>
                <th className="py-2 px-4 border-b text-right">Valor (S/)</th>
              </tr>
            </thead>
            <tbody>
              {deudasPagina.length > 0 ? (
                deudasPagina.map((deuda) => (
                  <tr key={deuda.IDFactura} className="text-gray-800">
                    <td className="py-2 px-4 border-b">{deuda.IDFactura}</td>
                    <td className="py-2 px-4 border-b">{deuda.detalle}</td>
                    <td className="py-2 px-4 border-b text-right">
                      {deuda.valor}
                      <button
                        onClick={() => {
                          // Aquí rediriges a la vista de pago
                          window.location.href = `/mikro/pago/${deuda.IDFactura}`;
                        }}
                        className="ml-4 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
                      >
                        Pagar
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="text-center py-4 text-gray-500">
                    No hay deudas registradas.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Paginación */}
        {totalPaginas > 1 && (
          <div className="flex justify-center mt-4 space-x-2">
            <button
              onClick={() => setPaginaActual((p) => Math.max(p - 1, 1))}
              disabled={paginaActual === 1}
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
              Anterior
            </button>
            {[...Array(totalPaginas)].map((_, i) => (
              <button
                key={i}
                onClick={() => setPaginaActual(i + 1)}
                className={`px-3 py-1 rounded ${
                  paginaActual === i + 1
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() =>
                setPaginaActual((p) => Math.min(p + 1, totalPaginas))
              }
              disabled={paginaActual === totalPaginas}
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
              Siguiente
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
