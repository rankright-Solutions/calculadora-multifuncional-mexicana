
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-50 border-t border-gray-100 py-8">
      <div className="px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Calculadora MX</h3>
            <p className="text-sm text-gray-600">
              Herramientas de cálculo para profesionales y empresas en México.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Calculadoras
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Acerca de Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Privacidad
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Legal</h3>
            <p className="text-sm text-gray-600">
              Los cálculos proporcionados son estimaciones y no constituyen asesoría fiscal o financiera.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Para más recursos fiscales, visite <a href="https://calculadorasat.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">CalculadoraSAT</a>.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-100">
          <p className="text-sm text-center text-gray-600">
            © {currentYear} Calculadora MX. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
