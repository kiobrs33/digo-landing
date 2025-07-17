import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin, AlertCircle } from "lucide-react";
import { digoInformation } from "@/data/constants";
import { useState } from "react";
import { axiosInstance } from "@/api/axiosInstance";

const schema = z.object({
  firstNames: z.string().min(1, "Nombre requerido"),
  lastNames: z.string().min(1, "Apellidos requeridos"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(1, "Teléfono requerido"),
  claimType: z.enum(["reclamo", "queja"], {
    required_error: "Selecciona una opción",
  }),
  documentType: z.enum(["dni", "ruc", "ce"], {
    required_error: "Selecciona un tipo de documento",
  }),
  documentNumber: z.string().min(1, "Requerido"),
  product: z.string().optional(),
  description: z.string().min(11, "Agrega una descripción"),
});

type FormData = z.infer<typeof schema>;

const LibroReclamaciones = () => {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await axiosInstance.post("/claim", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Respuesta:", response.data.data);

      reset();
      setSuccess(true);
      alert("¡Reclamo enviado correctamente!");
    } catch (error) {
      console.error(
        "Error al enviar reclamo:",
        error.response?.data || error.message
      );
      alert("Hubo un error al enviar tu reclamo.");
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Libro de Reclamaciones
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Puedes presentar tu reclamo o queja completando el siguiente
            formulario. Daremos seguimiento dentro de los plazos establecidos
            por la normativa vigente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nombre
                      </label>
                      <Input
                        {...register("firstNames")}
                        placeholder="Tu nombre"
                      />
                      {errors.firstNames && (
                        <p className="text-sm text-red-500">
                          {errors.firstNames.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Apellidos
                      </label>
                      <Input
                        {...register("lastNames")}
                        placeholder="Tus apellidos"
                      />
                      {errors.lastNames && (
                        <p className="text-sm text-red-500">
                          {errors.lastNames.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <Input
                        type="email"
                        {...register("email")}
                        placeholder="tu@email.com"
                      />
                      {errors.email && (
                        <p className="text-sm text-red-500">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Teléfono
                      </label>
                      <Input
                        {...register("phone")}
                        placeholder="Tu número de teléfono"
                      />
                      {errors.phone && (
                        <p className="text-sm text-red-500">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Tipo de Reclamación
                    </label>
                    <Select
                      onValueChange={(val: FormData["claimType"]) =>
                        setValue("claimType", val)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona una opción" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="reclamo">Reclamo</SelectItem>
                        <SelectItem value="queja">Queja</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.claimType && (
                      <p className="text-sm text-red-500">
                        {errors.claimType.message}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Tipo de Documento
                      </label>
                      <Select
                        onValueChange={(val: FormData["documentType"]) =>
                          setValue("documentType", val)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona un tipo de documento" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dni">DNI</SelectItem>
                          <SelectItem value="ruc">RUC</SelectItem>
                          <SelectItem value="ce">
                            Carné de Extranjería
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.documentType && (
                        <p className="text-sm text-red-500">
                          {errors.documentType.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        N° de Documento
                      </label>
                      <Input
                        {...register("documentNumber")}
                        placeholder="Ej: 12345678"
                      />
                      {errors.documentNumber && (
                        <p className="text-sm text-red-500">
                          {errors.documentNumber.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Detalles del Servicio o Producto
                    </label>
                    <Input
                      {...register("product")}
                      placeholder="Ej: Plan Fibra 100Mbps"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Descripción del Reclamo
                    </label>
                    <Textarea
                      {...register("description")}
                      placeholder="Escribe aquí los detalles de tu reclamo o queja"
                      rows={5}
                    />
                    {errors.description && (
                      <p className="text-sm text-red-500">
                        {errors.description.message}
                      </p>
                    )}
                  </div>

                  <div className="text-sm text-gray-500">
                    Al enviar este formulario confirmas que la información
                    proporcionada es veraz y autorizas su tratamiento conforme a
                    nuestra política de privacidad.
                  </div>

                  <div>
                    <Button
                      type="submit"
                      className="w-full bg-secondary hover:bg-secondary-light"
                    >
                      Enviar Reclamo
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="h-full">
              <CardContent className="p-6 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-red-600 mb-6 flex items-center gap-2">
                    <AlertCircle size={22} /> Información Legal
                  </h3>

                  <p className="text-sm text-gray-600 mb-6">
                    Según la normativa de protección al consumidor, este libro
                    está a tu disposición para presentar cualquier reclamo o
                    queja. Nos comprometemos a atenderte en un plazo máximo de
                    30 días calendario.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Phone size={20} className="text-secondary mr-4 mt-1" />
                      <div>
                        <h4 className="font-medium text-gray-900">Teléfono</h4>
                        <p className="text-gray-600">{digoInformation.phone}</p>
                        <p className="text-sm text-gray-500 mt-1">
                          {digoInformation.horario}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Mail size={20} className="text-secondary mr-4 mt-1" />
                      <div>
                        <h4 className="font-medium text-gray-900">Email</h4>
                        <p className="text-gray-600">{digoInformation.email}</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <MapPin size={20} className="text-secondary mr-4 mt-1" />
                      <div>
                        <h4 className="font-medium text-gray-900">Dirección</h4>
                        <p className="text-gray-600">
                          {digoInformation.adress}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LibroReclamaciones;
