
import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <Layout>
      <motion.div
        className="page-transition max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Acerca de Nosotros
          </h1>
          <p className="text-gray-600">
            Conozca más sobre nuestra misión y las herramientas que ofrecemos.
          </p>
        </div>

        <div className="prose prose-blue max-w-none">
          <p>
            Bienvenidos a <strong>Calculadora MX</strong>, una plataforma diseñada para profesionales, empresarios y contadores en México que necesitan herramientas de cálculo fiscal y financiero precisas y actualizadas.
          </p>
          
          <h2>Nuestra Misión</h2>
          <p>
            Nuestra misión es simplificar los cálculos fiscales y financieros para profesionales y empresas en México, proporcionando herramientas precisas, actualizadas y fáciles de usar que ayuden a tomar decisiones informadas y cumplir con las obligaciones fiscales.
          </p>
          
          <h2>Nuestras Herramientas</h2>
          <p>
            Ofrecemos una suite de calculadoras especializadas:
          </p>
          <ul>
            <li><strong>Calculadora de IVA:</strong> Permite agregar o desglosar el IVA de manera sencilla y precisa.</li>
            <li><strong>Calculadora de Retenciones:</strong> Calcula las retenciones de ISR e IVA para servicios profesionales y honorarios.</li>
            <li><strong>Convertidor de Divisas:</strong> Convierte entre dólares y pesos utilizando el tipo de cambio oficial del SAT.</li>
            <li><strong>Convertidor de Salarios:</strong> Transforma entre Unidades de Medida y Actualización (UMA) y pesos mexicanos.</li>
          </ul>
          
          <h2>Compromiso con la Precisión</h2>
          <p>
            Nos comprometemos a mantener nuestras calculadoras actualizadas de acuerdo con las leyes fiscales vigentes y a proporcionar resultados precisos. Sin embargo, recomendamos consultar con un profesional fiscal o contable para decisiones importantes.
          </p>
          
          <h2>Contacto</h2>
          <p>
            Si tiene alguna pregunta, sugerencia o comentario sobre nuestras herramientas, no dude en contactarnos. Valoramos sus comentarios y estamos comprometidos con la mejora continua de nuestros servicios.
          </p>
        </div>
      </motion.div>
    </Layout>
  );
};

export default About;
