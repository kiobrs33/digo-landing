import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MapPin, Search } from "lucide-react";
import { useWhatsapp } from "@/hooks/useWhatsapp";

const zonas = [
  "Jose Luis Bustamante Y Rivero",
  "Cerro Colorado",
  "Yanahuara",
  "Paucarpata",
  "Cercado",
];

const CoverageSection = () => {
  const [address, setAddress] = useState("");
  const [searched, setSearched] = useState(false);
  const [hasCoverage, setHasCoverage] = useState(false);
  const { sendMessageHandle } = useWhatsapp();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (address.trim()) {
      const found = zonas.some((zona) =>
        address.toLowerCase().includes(zona.toLowerCase())
      );
      setHasCoverage(found);
      setSearched(true);
    }
  };

  return (
    <section id="cobertura" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Consulta Cobertura
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprueba si tu dirección tiene cobertura de nuestra red de fibra
            óptica.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col md:flex-row gap-4"
              >
                <div className="relative flex-grow">
                  <MapPin
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                  <Input
                    placeholder="Ingresa tu dirección completa"
                    className="pl-10"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-primary hover:bg-primary-light flex gap-2 items-center"
                >
                  <Search size={18} />
                  <span>Comprobar</span>
                </Button>
              </form>

              {searched && (
                <div
                  className={`mt-6 p-4 rounded-md text-center ${
                    hasCoverage
                      ? "bg-green-50 border border-green-200 text-green-800"
                      : "bg-red-50 border border-red-200 text-red-800"
                  }`}
                >
                  {hasCoverage ? (
                    <>
                      <p className="font-medium">
                        ¡Buenas noticias! Tu zona tiene cobertura de Digo
                        Telecom.
                      </p>
                      <p className="text-green-600 mt-2">
                        Podemos programar tu instalación en los próximos 2-3
                        días.
                      </p>
                      <Button
                        className="mt-4 bg-secondary hover:bg-secondary-light"
                        onClick={() =>
                          sendMessageHandle(
                            "Hola, deseo contratar el servicio."
                          )
                        }
                      >
                        Contratar Ahora
                      </Button>
                    </>
                  ) : (
                    <>
                      <p className="font-medium">
                        Lo sentimos, aún no tenemos cobertura en tu zona.
                      </p>
                      <p className="text-red-600 mt-2">
                        Estamos ampliando nuestra red. Déjanos tu contacto y te
                        avisaremos cuando esté disponible.
                      </p>
                    </>
                  )}
                </div>
              )}
            </CardContent>
          </Card>

          <div className="mt-12 bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-primary mb-4">
              Zonas con cobertura
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {zonas.map((zona, index) => (
                <div
                  key={index}
                  className="bg-blue-50 rounded-md p-3 text-center"
                >
                  {zona}
                </div>
              ))}
            </div>
            <p className="mt-4 text-gray-500 text-center text-sm">
              * Estamos ampliando constantemente nuestra red. Si tu zona no
              aparece, verifica con tu dirección.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
