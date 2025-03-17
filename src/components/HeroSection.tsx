
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6">
              Internet Rápido y Estable para tu Hogar o Empresa
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Disfruta de la mejor experiencia en línea con nuestra conexión de fibra óptica. Sin cortes, máxima velocidad y soporte técnico 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary-light flex items-center gap-2">
                <span>Ver Planes</span>
                <ArrowRight size={18} />
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary-light hover:text-white">
                Solicitar Información
              </Button>
            </div>
            <div className="mt-8 flex items-center text-sm text-gray-500">
              <Zap size={18} className="text-secondary mr-2" />
              <span>Instalación en 24-48 horas en zonas con cobertura</span>
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-10 flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 bg-primary rounded-full opacity-5 absolute -top-10 -right-10"></div>
              <div className="w-72 h-72 md:w-96 md:h-96 bg-secondary rounded-full opacity-5 absolute -bottom-10 -left-10"></div>
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600"
                alt="Fibra óptica de alta velocidad"
                className="rounded-2xl shadow-xl relative z-10 w-full max-w-md animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
