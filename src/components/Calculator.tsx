
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CalculatorProps {
  title: string;
  description: string;
  children: ReactNode;
  icon?: ReactNode;
}

const Calculator: React.FC<CalculatorProps> = ({ title, description, children, icon }) => {
  return (
    <motion.div
      className="glass-card overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          {icon && <div className="mr-3 text-primary">{icon}</div>}
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        {children}
      </div>
    </motion.div>
  );
};

export default Calculator;
