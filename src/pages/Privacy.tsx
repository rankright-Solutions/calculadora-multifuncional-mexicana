
import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';

const Privacy: React.FC = () => {
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
            Política de Privacidad
          </h1>
          <p className="text-gray-600">
            Información sobre cómo manejamos sus datos.
          </p>
        </div>

        <div className="prose prose-blue max-w-none">
          <p>
            En Calculadora MX, nos comprometemos a proteger su privacidad y manejar sus datos personales con responsabilidad. Esta política de privacidad explica cómo recopilamos, utilizamos y protegemos su información cuando utiliza nuestro sitio web y nuestras herramientas de cálculo.
          </p>
          
          <h2>Información que Recopilamos</h2>
          <p>
            Cuando utiliza nuestras calculadoras y herramientas, no recopilamos ni almacenamos ninguno de los datos o cifras que ingresa. Todos los cálculos se realizan en el navegador de su dispositivo, y la información no se envía a nuestros servidores.
          </p>
          <p>
            Sin embargo, podemos recopilar cierta información no personal cuando visita nuestro sitio web, como:
          </p>
          <ul>
            <li>Información sobre su navegador y dispositivo</li>
            <li>Dirección IP</li>
            <li>Páginas que visita en nuestro sitio</li>
            <li>Tiempo que pasa en cada página</li>
          </ul>
          
          <h2>Uso de Cookies</h2>
          <p>
            Utilizamos cookies y tecnologías similares para mejorar la experiencia del usuario y recopilar información sobre cómo se utiliza nuestro sitio web. Puede configurar su navegador para rechazar todas las cookies o para indicar cuándo se está enviando una cookie. Sin embargo, algunas funciones del sitio web pueden no funcionar correctamente si deshabilita las cookies.
          </p>
          
          <h2>Cómo Utilizamos su Información</h2>
          <p>
            Utilizamos la información que recopilamos para:
          </p>
          <ul>
            <li>Mejorar y optimizar nuestro sitio web y nuestras herramientas</li>
            <li>Analizar tendencias de uso y preferencias de los usuarios</li>
            <li>Detectar y prevenir problemas técnicos</li>
            <li>Desarrollar nuevas características y funcionalidades</li>
          </ul>
          
          <h2>Compartir Información</h2>
          <p>
            No vendemos, comerciamos ni transferimos de ninguna otra manera su información a terceros. Esto no incluye a terceros de confianza que nos ayudan a operar nuestro sitio web, siempre y cuando dichas partes acepten mantener esta información confidencial.
          </p>
          
          <h2>Seguridad de los Datos</h2>
          <p>
            Implementamos una variedad de medidas de seguridad para mantener la seguridad de su información personal. Sin embargo, ningún método de transmisión por Internet o método de almacenamiento electrónico es 100% seguro, y no podemos garantizar su absoluta seguridad.
          </p>
          
          <h2>Cambios a esta Política</h2>
          <p>
            Podemos actualizar nuestra política de privacidad de vez en cuando. Le notificaremos cualquier cambio publicando la nueva política de privacidad en esta página y, si los cambios son significativos, proporcionaremos un aviso más prominente.
          </p>
          
          <h2>Contacto</h2>
          <p>
            Si tiene alguna pregunta sobre esta política de privacidad, por favor contáctenos a través de la página de contacto en nuestro sitio web.
          </p>
          
          <p className="text-sm text-gray-500 mt-8">
            Última actualización: 1 de Junio de 2024
          </p>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Privacy;
