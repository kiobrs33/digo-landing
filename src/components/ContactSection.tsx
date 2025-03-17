
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Contacta con Nosotros</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Tienes dudas? Estaremos encantados de ayudarte. Rellena el formulario y nos pondremos en contacto contigo lo antes posible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nombre
                      </label>
                      <Input placeholder="Tu nombre" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Apellidos
                      </label>
                      <Input placeholder="Tus apellidos" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <Input type="email" placeholder="tu@email.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Teléfono
                      </label>
                      <Input placeholder="Tu número de teléfono" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Plan de interés
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona un plan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="basic">Básico - 100 Mbps</SelectItem>
                        <SelectItem value="standard">Estándar - 300 Mbps</SelectItem>
                        <SelectItem value="premium">Premium - 1 Gbps</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Mensaje
                    </label>
                    <Textarea placeholder="¿En qué podemos ayudarte?" rows={4} />
                  </div>
                  
                  <div>
                    <Button type="submit" className="w-full bg-secondary hover:bg-secondary-light">
                      Enviar Consulta
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
                  <h3 className="text-xl font-bold text-primary mb-6">Información de Contacto</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Phone size={20} className="text-secondary mr-4 mt-1" />
                      <div>
                        <h4 className="font-medium text-gray-900">Teléfono</h4>
                        <p className="text-gray-600">900 123 456</p>
                        <p className="text-sm text-gray-500 mt-1">Lun-Vie: 9:00-20:00</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail size={20} className="text-secondary mr-4 mt-1" />
                      <div>
                        <h4 className="font-medium text-gray-900">Email</h4>
                        <p className="text-gray-600">info@fibernet.com</p>
                        <p className="text-sm text-gray-500 mt-1">Respondemos en 24h</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <MapPin size={20} className="text-secondary mr-4 mt-1" />
                      <div>
                        <h4 className="font-medium text-gray-900">Oficina Central</h4>
                        <p className="text-gray-600">Calle Principal 123, 28001 Madrid</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-blue-50 rounded-md">
                  <p className="text-sm text-gray-600">
                    ¿Prefieres atención inmediata? Llámanos y uno de nuestros asesores te atenderá personalmente.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
