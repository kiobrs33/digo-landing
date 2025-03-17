
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">
              <span className="text-primary">Fiber</span>
              <span className="text-secondary">Net</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav>
              <ul className="flex space-x-6">
                <li><a href="#planes" className="text-gray-700 hover:text-primary transition-colors">Planes</a></li>
                <li><a href="#beneficios" className="text-gray-700 hover:text-primary transition-colors">Beneficios</a></li>
                <li><a href="#proceso" className="text-gray-700 hover:text-primary transition-colors">Proceso</a></li>
                <li><a href="#testimonios" className="text-gray-700 hover:text-primary transition-colors">Testimonios</a></li>
                <li><a href="#cobertura" className="text-gray-700 hover:text-primary transition-colors">Cobertura</a></li>
              </ul>
            </nav>
            <Button variant="default" className="bg-secondary hover:bg-secondary-light flex items-center gap-2">
              <Phone size={16} />
              <span>Contratar Ahora</span>
            </Button>
          </div>
          
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              <li><a href="#planes" className="block text-gray-700 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Planes</a></li>
              <li><a href="#beneficios" className="block text-gray-700 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Beneficios</a></li>
              <li><a href="#proceso" className="block text-gray-700 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Proceso</a></li>
              <li><a href="#testimonios" className="block text-gray-700 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Testimonios</a></li>
              <li><a href="#cobertura" className="block text-gray-700 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Cobertura</a></li>
              <li>
                <Button variant="default" className="w-full bg-secondary hover:bg-secondary-light flex items-center justify-center gap-2">
                  <Phone size={16} />
                  <span>Contratar Ahora</span>
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
