// import { useMikroVerifyPage } from "../hooks/useMikroVerifyPage";

// export const MikroVerifyPage = () => {
//   const { register, handleSubmit, errors, isSubmitting, userMikrowisp } =
//     useMikroVerifyPage();

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
//       <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
//           Verificación de Identidad
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-600 mb-1">
//               Número de identificación
//             </label>
//             <input
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               type="text"
//               placeholder="Ingrese su número"
//               {...register("cedula", {
//                 required: "El número de cedula es obligatorio",
//                 pattern: {
//                   value: /^[0-9]{8,11}$/,
//                   message: "Debe tener entre 8 y 11 dígitos",
//                 },
//               })}
//             />
//             {errors.cedula && (
//               <p className="text-red-500 text-sm mt-1">
//                 {errors.cedula.message}
//               </p>
//             )}
//           </div>
//           <button
//             disabled={isSubmitting}
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
//           >
//             {isSubmitting ? "Verificando..." : "Continuar"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

import React, { useMemo, useState } from "react";
import { useMikroVerifyPage } from "../hooks/useMikroVerifyPage";
import { MikroFactura } from "../types/mikroTypes";
// import type { MikroUser } from "../types/mikro"; // <-- ajusta la ruta si tu interfaz está en otro archivo

/**
 * Vista combinada (ajustada a `MikroUser`):
 * - Form de verificación (cedula) usando el hook.
 * - Al tener `userMikrowisp: MikroUser`, renderiza la ficha del cliente.
 * - Paginación lista para una posible lista de deudas/facturas si el hook la expone.
 * - Botón "Cambiar de cliente" para volver al formulario.
 *
 * Si tu hook expone además `facturas` o `deudas`, tipa con `MikroFactura[]` (ver abajo) y conéctalo
 * en la constante `deudas`.
 */

// (Opcional) Tipado del detalle de facturas si lo manejas aparte del agregado `facturacion`.

export const MikroVerifyPage = () => {
  const {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    userMikrowisp,
    resetUser, // opcional
    facturasMikrowisp,
  } = useMikroVerifyPage();

  const [paginaActual, setPaginaActual] = useState(1);
  const porPagina = 5;

  const cliente = userMikrowisp ?? null;

  // Si no tienes `facturas` en el hook, deja `[]` y solo se mostrará el resumen.
  const deudas: MikroFactura[] = useMemo(
    () => facturasMikrowisp ?? [],
    [facturasMikrowisp]
  );

  const totalPaginas = Math.max(1, Math.ceil(deudas.length / porPagina));
  const inicio = (paginaActual - 1) * porPagina;
  const deudasPagina = deudas.slice(inicio, inicio + porPagina);

  React.useEffect(() => setPaginaActual(1), [userMikrowisp]);

  // ===== Render =====
  if (!cliente) {
    // --- FORMULARIO DE VERIFICACIÓN ---
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
                {...register("cedula", {
                  required: "El número de cedula es obligatorio",
                  pattern: {
                    value: /^[0-9]{8,11}$/,
                    message: "Debe tener entre 8 y 11 dígitos",
                  },
                })}
              />
              {errors?.cedula && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.cedula.message}
                </p>
              )}
            </div>
            <button
              disabled={isSubmitting}
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 disabled:opacity-60"
            >
              {isSubmitting ? "Verificando..." : "Continuar"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // --- VISTA DE CLIENTE + DEUDAS ---
  const estadoUpper = (cliente.estado || "").toUpperCase();
  const isSuspendido = estadoUpper === "SUSPENDIDO";

  return (
    <section className="py-20 bg-white">
      <div className="min-h-screen bg-gray-100 p-6">
        {/* Encabezado */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Panel del Cliente
          </h1>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (typeof resetUser === "function") resetUser();
              }}
              className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white"
            >
              Cambiar de cliente
            </button>
          </div>
        </div>

        {/* Información del Cliente */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Información del Cliente
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p>
              <span className="font-semibold">Nombre:</span> {cliente.nombre}
            </p>
            <p className="flex items-center gap-2">
              <span className="font-semibold">Estado:</span>
              <span
                className={`px-2 py-1 rounded text-white text-sm ${
                  isSuspendido ? "bg-red-500" : "bg-green-500"
                }`}
              >
                {cliente.estado}
              </span>
            </p>
            <p>
              <span className="font-semibold">Correo:</span>{" "}
              {cliente.correo || "—"}
            </p>
            <p>
              <span className="font-semibold">Teléfono:</span>{" "}
              {cliente.movil || cliente.telefono || "—"}
            </p>
            <p>
              <span className="font-semibold">DNI/Cédula:</span>{" "}
              {cliente.cedula}
            </p>
            <p>
              <span className="font-semibold">Código:</span> {cliente.codigo}
            </p>
            <p className="md:col-span-2">
              <span className="font-semibold">Dirección:</span>{" "}
              {cliente.direccion_principal}
            </p>
            {isSuspendido && cliente.fecha_suspendido && (
              <p className="md:col-span-2">
                <span className="font-semibold">Fecha de suspensión:</span>{" "}
                {cliente.fecha_suspendido}
              </p>
            )}
            <p>
              <span className="font-semibold">Mantenimiento:</span>{" "}
              {cliente.mantenimiento ? "Sí" : "No"}
            </p>
            <p>
              <span className="font-semibold">Deudas (resumen):</span>{" "}
              {cliente.facturacion.facturas_nopagadas} (
              {cliente.facturacion.total_facturas} S/)
            </p>
          </div>
        </div>

        {/* Servicios del Cliente */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Servicios</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="py-2 px-4 border-b">ID Servicio</th>
                  <th className="py-2 px-4 border-b">Perfil</th>
                  <th className="py-2 px-4 border-b">IP</th>
                  <th className="py-2 px-4 border-b">MAC</th>
                  <th className="py-2 px-4 border-b">Costo</th>
                  <th className="py-2 px-4 border-b">Estado</th>
                </tr>
              </thead>
              <tbody>
                {cliente.servicios?.length ? (
                  cliente.servicios.map((s) => (
                    <tr key={s.id} className="text-gray-800">
                      <td className="py-2 px-4 border-b text-center">{s.id}</td>
                      <td className="py-2 px-4 border-b text-center">
                        {s.perfil}
                      </td>
                      <td className="py-2 px-4 border-b text-center">
                        {s.ip || s.ipap || "—"}
                      </td>
                      <td className="py-2 px-4 border-b text-center">
                        {s.mac || "—"}
                      </td>
                      <td className="py-2 px-4 border-b text-center">
                        {s.costo}
                      </td>
                      <td className="py-2 px-4 border-b text-center">
                        {s.status_user || "—"}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="text-center py-4 text-gray-500">
                      Sin servicios registrados.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Tabla de Deudas (detalle opcional, si tu hook expone `facturas`) */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Deudas del Cliente
          </h2>
          {deudas.length === 0 ? (
            <p className="text-gray-600">
              No hay detalle de deudas disponible. Resumen:{" "}
              {cliente.facturacion.facturas_nopagadas} factura(s), total{" "}
              {cliente.facturacion.total_facturas} S/.
            </p>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-gray-100 text-gray-700">
                      <th className="py-2 px-4 border-b">Factura</th>
                      <th className="py-2 px-4 border-b">Detalle</th>
                      <th className="py-2 px-4 border-b">Valor (S/)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {deudasPagina.map((deuda, idx) => (
                      <tr
                        key={`${deuda.IDFactura}-${idx}`}
                        className="text-gray-800"
                      >
                        <td className="py-2 px-4 border-b text-center">
                          {deuda.IDFactura}
                        </td>
                        <td className="py-2 px-4 border-b text-center">
                          {deuda.detalle}
                        </td>
                        <td className="py-2 px-4 border-b text-center">
                          {deuda.valor}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {totalPaginas > 1 && (
                <div className="flex justify-center mt-4 space-x-2">
                  <button
                    onClick={() => setPaginaActual((p) => Math.max(p - 1, 1))}
                    disabled={paginaActual === 1}
                    className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                  >
                    Anterior
                  </button>
                  {Array.from({ length: totalPaginas }).map((_, i) => (
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
            </>
          )}
        </div>
      </div>
    </section>
  );
};
