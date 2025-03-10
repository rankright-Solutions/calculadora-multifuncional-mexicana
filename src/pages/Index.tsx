
import React, { useState } from 'react';
import Layout from '../components/Layout';
import Calculator from '../components/Calculator';
import { motion } from 'framer-motion';
import { PercentIcon, DollarSign, TrendingUp, Calculator as CalcIcon } from 'lucide-react';
import { Tab } from '@headlessui/react';
import {
  addIva,
  extractIva,
  calculateRetentions,
  dollarToPeso,
  pesoToDollar,
  minimumWageToPeso,
  pesoToMinimumWage,
  formatMxn,
  formatUsd
} from '../utils/calculators';

const Index: React.FC = () => {
  // IVA Calculator State
  const [ivaMode, setIvaMode] = useState<'add' | 'extract'>('add');
  const [ivaAmount, setIvaAmount] = useState<string>('');
  const [ivaResult, setIvaResult] = useState<{ subtotal: number; iva: number; total: number } | null>(null);

  // Retention Calculator State
  const [retentionAmount, setRetentionAmount] = useState<string>('');
  const [retainIsr, setRetainIsr] = useState<boolean>(true);
  const [retainIva, setRetainIva] = useState<boolean>(true);
  const [retentionResult, setRetentionResult] = useState<{
    subtotal: number;
    iva: number;
    isrRetention: number;
    ivaRetention: number;
    total: number;
  } | null>(null);

  // Currency Converter State
  const [currencyInput, setCurrencyInput] = useState<string>('');
  const [currencyMode, setCurrencyMode] = useState<'dollarToPeso' | 'pesoToDollar'>('dollarToPeso');
  const [exchangeRate, setExchangeRate] = useState<string>('17.50');
  const [currencyResult, setCurrencyResult] = useState<{ input: number; output: number } | null>(null);

  // Minimum Wage Converter State
  const [wageInput, setWageInput] = useState<string>('');
  const [wageMode, setWageMode] = useState<'wageToMxn' | 'mxnToWage'>('wageToMxn');
  const [wageAmount, setWageAmount] = useState<string>('248.93');
  const [wageResult, setWageResult] = useState<{ input: number; output: number } | null>(null);

  // IVA Calculator Functions
  const calculateIva = () => {
    const amount = parseFloat(ivaAmount);
    if (isNaN(amount) || amount <= 0) return;
    
    if (ivaMode === 'add') {
      setIvaResult(addIva(amount));
    } else {
      setIvaResult(extractIva(amount));
    }
  };

  // Retention Calculator Functions
  const calculateRetention = () => {
    const amount = parseFloat(retentionAmount);
    if (isNaN(amount) || amount <= 0) return;
    
    setRetentionResult(calculateRetentions(amount, retainIsr, retainIva));
  };

  // Currency Converter Functions
  const convertCurrency = () => {
    const amount = parseFloat(currencyInput);
    const rate = parseFloat(exchangeRate);
    if (isNaN(amount) || amount <= 0 || isNaN(rate) || rate <= 0) return;
    
    if (currencyMode === 'dollarToPeso') {
      setCurrencyResult({
        input: amount,
        output: dollarToPeso(amount, rate)
      });
    } else {
      setCurrencyResult({
        input: amount,
        output: pesoToDollar(amount, rate)
      });
    }
  };

  // Minimum Wage Converter Functions
  const convertWage = () => {
    const amount = parseFloat(wageInput);
    const wage = parseFloat(wageAmount);
    if (isNaN(amount) || amount <= 0 || isNaN(wage) || wage <= 0) return;
    
    if (wageMode === 'wageToMxn') {
      setWageResult({
        input: amount,
        output: minimumWageToPeso(amount, wage)
      });
    } else {
      setWageResult({
        input: amount,
        output: pesoToMinimumWage(amount, wage)
      });
    }
  };

  return (
    <Layout>
      <motion.div 
        className="page-transition"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Calculadora MX
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Herramientas de cálculo fiscal y financiero para profesionales y empresas en México.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* IVA Calculator */}
          <Calculator 
            title="Calculadora de IVA" 
            description="Agrega o desglosa IVA al 16%"
            icon={<PercentIcon className="h-5 w-5" />}
          >
            <Tab.Group>
              <Tab.List className="flex space-x-1 rounded-xl bg-blue-100 p-1 mb-4">
                <Tab
                  className={({ selected }) =>
                    `w-full rounded-lg py-2 text-sm font-medium transition-all
                     ${selected 
                      ? 'bg-white text-blue-700 shadow'
                      : 'text-blue-700 hover:bg-white/30'
                    }`
                  }
                  onClick={() => setIvaMode('add')}
                >
                  Agregar IVA
                </Tab>
                <Tab
                  className={({ selected }) =>
                    `w-full rounded-lg py-2 text-sm font-medium transition-all
                     ${selected 
                      ? 'bg-white text-blue-700 shadow'
                      : 'text-blue-700 hover:bg-white/30'
                    }`
                  }
                  onClick={() => setIvaMode('extract')}
                >
                  Desglosar IVA
                </Tab>
              </Tab.List>
            </Tab.Group>

            <div className="mb-4">
              <label htmlFor="ivaAmount" className="block text-sm font-medium text-gray-700 mb-1">
                {ivaMode === 'add' ? 'Monto sin IVA' : 'Monto con IVA'}
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">$</span>
                <input
                  type="number"
                  id="ivaAmount"
                  className="calculator-input w-full pl-8"
                  placeholder="0.00"
                  value={ivaAmount}
                  onChange={(e) => setIvaAmount(e.target.value)}
                />
              </div>
            </div>

            <button 
              className="calculator-btn w-full mb-6" 
              onClick={calculateIva}
            >
              Calcular
            </button>

            {ivaResult && (
              <motion.div 
                className="space-y-3 border-t pt-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex justify-between">
                  <span className="text-gray-700">Subtotal:</span>
                  <span className="font-medium">{formatMxn(ivaResult.subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">IVA (16%):</span>
                  <span className="font-medium">{formatMxn(ivaResult.iva)}</span>
                </div>
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total:</span>
                  <span>{formatMxn(ivaResult.total)}</span>
                </div>
              </motion.div>
            )}
          </Calculator>

          {/* Retention Calculator */}
          <Calculator 
            title="Calculadora de Retenciones" 
            description="Cálculos de ISR e IVA para honorarios y servicios profesionales"
            icon={<CalcIcon className="h-5 w-5" />}
          >
            <div className="mb-4">
              <label htmlFor="retentionAmount" className="block text-sm font-medium text-gray-700 mb-1">
                Monto sin IVA
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">$</span>
                <input
                  type="number"
                  id="retentionAmount"
                  className="calculator-input w-full pl-8"
                  placeholder="0.00"
                  value={retentionAmount}
                  onChange={(e) => setRetentionAmount(e.target.value)}
                />
              </div>
            </div>

            <div className="flex space-x-4 mb-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="retainIsr"
                  className="h-4 w-4 text-primary border-gray-300 rounded"
                  checked={retainIsr}
                  onChange={(e) => setRetainIsr(e.target.checked)}
                />
                <label htmlFor="retainIsr" className="ml-2 block text-sm text-gray-700">
                  Retención ISR (10%)
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="retainIva"
                  className="h-4 w-4 text-primary border-gray-300 rounded"
                  checked={retainIva}
                  onChange={(e) => setRetainIva(e.target.checked)}
                />
                <label htmlFor="retainIva" className="ml-2 block text-sm text-gray-700">
                  Retención IVA (10.6667%)
                </label>
              </div>
            </div>

            <button 
              className="calculator-btn w-full mb-6" 
              onClick={calculateRetention}
            >
              Calcular
            </button>

            {retentionResult && (
              <motion.div 
                className="space-y-3 border-t pt-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex justify-between">
                  <span className="text-gray-700">Subtotal:</span>
                  <span className="font-medium">{formatMxn(retentionResult.subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">IVA (16%):</span>
                  <span className="font-medium">{formatMxn(retentionResult.iva)}</span>
                </div>
                {retainIsr && (
                  <div className="flex justify-between">
                    <span className="text-gray-700">Retención ISR (10%):</span>
                    <span className="font-medium text-red-600">-{formatMxn(retentionResult.isrRetention)}</span>
                  </div>
                )}
                {retainIva && (
                  <div className="flex justify-between">
                    <span className="text-gray-700">Retención IVA (10.6667%):</span>
                    <span className="font-medium text-red-600">-{formatMxn(retentionResult.ivaRetention)}</span>
                  </div>
                )}
                <div className="flex justify-between text-lg font-semibold pt-1 border-t">
                  <span>Total a pagar:</span>
                  <span>{formatMxn(retentionResult.total)}</span>
                </div>
              </motion.div>
            )}
          </Calculator>

          {/* Currency Converter */}
          <Calculator 
            title="Convertidor de Divisas" 
            description="Convertir entre dólares y pesos con el tipo de cambio del SAT"
            icon={<DollarSign className="h-5 w-5" />}
          >
            <Tab.Group>
              <Tab.List className="flex space-x-1 rounded-xl bg-blue-100 p-1 mb-4">
                <Tab
                  className={({ selected }) =>
                    `w-full rounded-lg py-2 text-sm font-medium transition-all
                     ${selected 
                      ? 'bg-white text-blue-700 shadow'
                      : 'text-blue-700 hover:bg-white/30'
                    }`
                  }
                  onClick={() => setCurrencyMode('dollarToPeso')}
                >
                  USD a MXN
                </Tab>
                <Tab
                  className={({ selected }) =>
                    `w-full rounded-lg py-2 text-sm font-medium transition-all
                     ${selected 
                      ? 'bg-white text-blue-700 shadow'
                      : 'text-blue-700 hover:bg-white/30'
                    }`
                  }
                  onClick={() => setCurrencyMode('pesoToDollar')}
                >
                  MXN a USD
                </Tab>
              </Tab.List>
            </Tab.Group>

            <div className="mb-4">
              <label htmlFor="exchangeRate" className="block text-sm font-medium text-gray-700 mb-1">
                Tipo de cambio
              </label>
              <div className="relative">
                <input
                  type="number"
                  id="exchangeRate"
                  className="calculator-input w-full"
                  placeholder="17.50"
                  value={exchangeRate}
                  onChange={(e) => setExchangeRate(e.target.value)}
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">Tipo de cambio para efectos fiscales (SAT)</p>
            </div>

            <div className="mb-4">
              <label htmlFor="currencyInput" className="block text-sm font-medium text-gray-700 mb-1">
                {currencyMode === 'dollarToPeso' ? 'Dólares (USD)' : 'Pesos (MXN)'}
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                  {currencyMode === 'dollarToPeso' ? '$' : '$'}
                </span>
                <input
                  type="number"
                  id="currencyInput"
                  className="calculator-input w-full pl-8"
                  placeholder="0.00"
                  value={currencyInput}
                  onChange={(e) => setCurrencyInput(e.target.value)}
                />
              </div>
            </div>

            <button 
              className="calculator-btn w-full mb-6" 
              onClick={convertCurrency}
            >
              Convertir
            </button>

            {currencyResult && (
              <motion.div 
                className="space-y-3 border-t pt-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex justify-between">
                  <span className="text-gray-700">
                    {currencyMode === 'dollarToPeso' ? 'Dólares:' : 'Pesos:'}
                  </span>
                  <span className="font-medium">
                    {currencyMode === 'dollarToPeso' ? formatUsd(currencyResult.input) : formatMxn(currencyResult.input)}
                  </span>
                </div>
                <div className="flex justify-between text-lg font-semibold">
                  <span>{currencyMode === 'dollarToPeso' ? 'Pesos:' : 'Dólares:'}</span>
                  <span>
                    {currencyMode === 'dollarToPeso' ? formatMxn(currencyResult.output) : formatUsd(currencyResult.output)}
                  </span>
                </div>
              </motion.div>
            )}
          </Calculator>

          {/* Minimum Wage Converter */}
          <Calculator 
            title="Convertidor de Salarios" 
            description="Convertir entre salarios mínimos y pesos"
            icon={<TrendingUp className="h-5 w-5" />}
          >
            <Tab.Group>
              <Tab.List className="flex space-x-1 rounded-xl bg-blue-100 p-1 mb-4">
                <Tab
                  className={({ selected }) =>
                    `w-full rounded-lg py-2 text-sm font-medium transition-all
                     ${selected 
                      ? 'bg-white text-blue-700 shadow'
                      : 'text-blue-700 hover:bg-white/30'
                    }`
                  }
                  onClick={() => setWageMode('wageToMxn')}
                >
                  UMA a Pesos
                </Tab>
                <Tab
                  className={({ selected }) =>
                    `w-full rounded-lg py-2 text-sm font-medium transition-all
                     ${selected 
                      ? 'bg-white text-blue-700 shadow'
                      : 'text-blue-700 hover:bg-white/30'
                    }`
                  }
                  onClick={() => setWageMode('mxnToWage')}
                >
                  Pesos a UMA
                </Tab>
              </Tab.List>
            </Tab.Group>

            <div className="mb-4">
              <label htmlFor="wageAmount" className="block text-sm font-medium text-gray-700 mb-1">
                Valor de la UMA
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">$</span>
                <input
                  type="number"
                  id="wageAmount"
                  className="calculator-input w-full pl-8"
                  placeholder="248.93"
                  value={wageAmount}
                  onChange={(e) => setWageAmount(e.target.value)}
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">Valor actual de la UMA: $248.93 MXN</p>
            </div>

            <div className="mb-4">
              <label htmlFor="wageInput" className="block text-sm font-medium text-gray-700 mb-1">
                {wageMode === 'wageToMxn' ? 'Unidades de Medida y Actualización (UMA)' : 'Pesos (MXN)'}
              </label>
              <div className="relative">
                {wageMode === 'mxnToWage' && (
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">$</span>
                )}
                <input
                  type="number"
                  id="wageInput"
                  className={`calculator-input w-full ${wageMode === 'mxnToWage' ? 'pl-8' : ''}`}
                  placeholder="0.00"
                  value={wageInput}
                  onChange={(e) => setWageInput(e.target.value)}
                />
              </div>
            </div>

            <button 
              className="calculator-btn w-full mb-6" 
              onClick={convertWage}
            >
              Convertir
            </button>

            {wageResult && (
              <motion.div 
                className="space-y-3 border-t pt-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex justify-between">
                  <span className="text-gray-700">
                    {wageMode === 'wageToMxn' ? 'UMA:' : 'Pesos:'}
                  </span>
                  <span className="font-medium">
                    {wageMode === 'wageToMxn' 
                      ? `${wageResult.input.toFixed(2)} UMA` 
                      : formatMxn(wageResult.input)
                    }
                  </span>
                </div>
                <div className="flex justify-between text-lg font-semibold">
                  <span>{wageMode === 'wageToMxn' ? 'Pesos:' : 'UMA:'}</span>
                  <span>
                    {wageMode === 'wageToMxn' 
                      ? formatMxn(wageResult.output) 
                      : `${wageResult.output.toFixed(4)} UMA`
                    }
                  </span>
                </div>
              </motion.div>
            )}
          </Calculator>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Index;
