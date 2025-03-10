
import React from 'react';
import { Calculator, DollarSign, BarChart } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="w-full bg-blue-50/50 py-12 md:py-16">
      <div className="px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Acerca de Nuestras Herramientas
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Herramientas de cálculo precisas diseñadas específicamente para profesionales y empresas en México.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Calculator className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Calculadoras Fiscales</h3>
            <p className="text-gray-600">
              Realizamos cálculos precisos de IVA e ISR conforme a la legislación fiscal mexicana vigente.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <DollarSign className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Conversión de Divisas</h3>
            <p className="text-gray-600">
              Conversión entre dólares y pesos mexicanos utilizando el tipo de cambio oficial del SAT.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <BarChart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Conversión de Salarios</h3>
            <p className="text-gray-600">
              Conversión entre salarios mínimos y pesos, actualizada con los valores más recientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
