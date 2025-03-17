
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MapPin, Search } from 'lucide-react';

const CoverageSection = () => {
  const [address, setAddress] = useState('');
  const [searched, setSearched] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (address.trim()) {
      setSearched(true);
    }
  };
  
  return (
    <section id="cobertura" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Consulta Cobertura</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprueba si tu dirección tiene cobertura de nuestra red de fibra óptica.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input
                    placeholder="Ingresa tu dirección completa"
                    className="pl-10"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <Button type="submit" className="bg-primary hover:bg-primary-light flex gap-2 items-center">
                  <Search size={18} />
                  <span>Comprobar</span>
                </Button>
              </form>
              
              {searched && (
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-md text-center">
                  <p className="text-green-800 font-medium">¡Buenas noticias! Tu zona tiene cobertura de FiberNet</p>
                  <p className="text-green-600 mt-2">Podemos programar tu instalación en los próximos 2-3 días.</p>
                  <Button className="mt-4 bg-secondary hover:bg-secondary-light">
                    Contratar Ahora
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
          
          <div className="mt-12 bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-primary mb-4">Zonas con cobertura</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 rounded-md p-3 text-center">Madrid Centro</div>
              <div className="bg-blue-50 rounded-md p-3 text-center">Barcelona</div>
              <div className="bg-blue-50 rounded-md p-3 text-center">Valencia</div>
              <div className="bg-blue-50 rounded-md p-3 text-center">Sevilla</div>
              <div className="bg-blue-50 rounded-md p-3 text-center">Zaragoza</div>
              <div className="bg-blue-50 rounded-md p-3 text-center">Málaga</div>
            </div>
            <p className="mt-4 text-gray-500 text-center text-sm">
              * Estamos ampliando constantemente nuestra red. Si tu zona no aparece, verifica con tu dirección.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
