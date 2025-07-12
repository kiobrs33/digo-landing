// import { Banknote, Smartphone, Store } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { useWhatsapp } from "@/hooks/useWhatsapp";

// const paymentMethods = [
//   {
//     icon: <Smartphone size={32} className="text-secondary" />,
//     title: "Paga por Yape",
//     description:
//       "Realiza el pago escaneando nuestro QR desde la app de Yape. Ideal para pagos rápidos desde tu celular.",
//   },
//   {
//     icon: <Banknote size={32} className="text-secondary" />,
//     title: "Transferencia BCP",
//     description:
//       "Puedes hacer una transferencia directa a nuestra cuenta BCP. Recibirás los datos bancarios al solicitar el servicio.",
//   },
//   {
//     icon: <Store size={32} className="text-secondary" />,
//     title: "Depósito en Agentes",
//     description:
//       "Acércate a un agente o ventanilla BCP para hacer el depósito. Solo necesitas nuestro número de cuenta.",
//   },
// ];

// export const PaymentMethodsSection = () => {
//   const { sendMessageHandle } = useWhatsapp();

//   return (
//     <section id="pago" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
//             Formas de Pago
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Elige la opción de pago que más te convenga para activar tu servicio
//             de internet. ¡Fácil, rápido y seguro!
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
//           {paymentMethods.map((method, index) => (
//             <div
//               key={index}
//               className="text-center bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
//             >
//               <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-light mb-6 mx-auto">
//                 {method.icon}
//               </div>
//               <h3 className="text-xl font-bold text-primary mb-3">
//                 {method.title}
//               </h3>
//               <p className="text-gray-600">{method.description}</p>
//             </div>
//           ))}
//         </div>

//         <div className="text-center">
//           <Button
//             size="lg"
//             className="bg-secondary hover:bg-secondary-light"
//             onClick={() =>
//               sendMessageHandle(
//                 "Hola, quiero recibir los datos para realizar el pago del servicio."
//               )
//             }
//           >
//             Solicitar Datos de Pago
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// };

import pascuaImg from "@/assets/images/digo-pascua.jpg";
import jugueteImg from "@/assets/images/digo-juguete.jpg";
import logoBcp from "@/assets/images/logo-bcp.jpg";
import logoYape from "@/assets/images/logo-yape.png";
import qrYape from "@/assets/images/qr-yape.jpeg";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useWhatsapp } from "@/hooks/useWhatsapp";

// Información dinámica por método
const paymentMethods = [
  {
    key: "yape",
    image: logoYape,
    title: "Paga por Yape",
    description:
      "Realiza tu pago fácil y rápido con Yape. Ingresando al aplicativo desde tu celular.",
    modalContent: (
      <>
        <h2 className="font-semibold">PRIMERA OPCIÓN:</h2>
        <ul>
          <li>Paso 1: Ir a yape servicios</li>
          <li>
            Paso 2: Buscar: <strong>DIGO</strong>
          </li>
          <li>Paso 3: Ingresar DNI/CE/RUC</li>
          <li>Paso 4: Pagar</li>
        </ul>

        <h2 className="font-semibold mt-6">SEGUNDA OPCIÓN:</h2>
        <ul>
          <li>Paso 1: Scanear código QR</li>
          <li>Paso 3: Ingresar monto de su mensualidad y pagar</li>
        </ul>

        <p className="mt-2">
          <strong>IMPORTANTE!</strong> Reportar su pago al canal{" "}
          <strong>Oficial de DIGO 017012341</strong>
        </p>
        <div className="flex justify-center mt-4">
          <img
            src={qrYape}
            alt="QR Yape"
            className="w-64 h-64 object-contain rounded-lg"
          />
        </div>
      </>
    ),
  },
  {
    key: "bcp",
    image: logoBcp,
    title: "BCP Banca Móvil",
    description: "Realiza tu pago fácil y rápido con Banca Móvil BCP. ¡Fácil y sin complicaciones!",
    modalContent: (
      <div className="text-gray-700 space-y-2">
        <ul>
          <li>Paso 1: Ir a pagar servicios</li>
          <li>
            Paso 2: Buscar: <strong>DIGO</strong>
          </li>
          <li>Paso 3: Ingresar DNI/CE/RUC</li>
          <li>Paso 4: Pagar</li>
        </ul>

        <p className="mt-2">
          <strong>IMPORTANTE!</strong> Reportar su pago al canal{" "}
          <strong>Oficial de DIGO 017012341</strong>
        </p>
      </div>
    ),
  },
  {
    key: "agente",
    image: logoBcp,
    title: "Depósito en Agentes BCP",
    description:
      "Acércate a un agente o ventanilla BCP y realiza tu depósito. ¡Fácil, rápido y sin complicaciones!",
    modalContent: (
      <div className="text-gray-700 space-y-2">
        <h2 className="font-semibold">PRIMERA OPCIÓN:</h2>
        <ul>
          <li>Paso 1: Ir al agente </li>
          <li>
            Paso 2: Indicar pagar a: <strong>DIGO</strong>
          </li>
          <li>Paso 3: Brindar su DNI/CE/RUC</li>
          <li>Paso 4: Pagar</li>
        </ul>

        <h2 className="font-semibold mt-6">SEGUNDA OPCIÓN:</h2>
        <ul>
          <li>
            Paso 1: Pagar con el Nro de cuenta: <strong>2159940053091</strong>
          </li>
          <li>Paso 2: Brindar su DNI</li>
          <li>Paso 3: Pagar</li>
        </ul>

        <p className="mt-2">
          Para pagos desde otros BANCOS brindar CCI:{" "}
          <strong>00221500994005309123</strong>
        </p>

        <p className="mt-2">
          <strong>IMPORTANTE!</strong> Reportar su pago al canal{" "}
          <strong>Oficial de DIGO 017012341</strong>
        </p>
      </div>
    ),
  },
];

export const PaymentMethodsSection = () => {
  const { sendMessageHandle } = useWhatsapp();
  const [selectedMethod, setSelectedMethod] = useState<
    (typeof paymentMethods)[0] | null
  >(null);

  return (
    <section id="pago" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Formas de Pago
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Elige el método de pago que más se ajuste a ti. Contamos con
            opciones digitales y presenciales para tu comodidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {paymentMethods.map((method) => (
            <div
              key={method.key}
              className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
            >
              {/* <div className="w-20 h-20 mb-4 flex items-center justify-center rounded-full bg-gray-100 overflow-hidden">
                <img
                  src={method.image}
                  alt={method.title}
                  className="object-cover w-20 h-20 mb-4 flex items-center justify-center rounded-full"
                />
              </div> */}
              <img
                src={method.image}
                alt={method.title}
                className="object-cover w-20 h-20 mb-4 flex items-center justify-center rounded-2xl"
              />
              <h3 className="text-xl font-semibold text-primary mb-2">
                {method.title}
              </h3>
              <p className="text-gray-600 mb-4">{method.description}</p>
              <Button
                variant="secondary"
                onClick={() => setSelectedMethod(method)}
              >
                Ver Detalles
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary-light"
            onClick={() =>
              sendMessageHandle(
                "Hola, quiero recibir los datos para realizar el pago del servicio."
              )
            }
          >
            Solicitar Datos de Pago
          </Button>
        </div>
      </div>

      {/* Modal dinámico */}
      <Dialog
        open={!!selectedMethod}
        onOpenChange={(open) => {
          if (!open) setSelectedMethod(null);
        }}
      >
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle className="text-center">
              {selectedMethod?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4">{selectedMethod?.modalContent}</div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
