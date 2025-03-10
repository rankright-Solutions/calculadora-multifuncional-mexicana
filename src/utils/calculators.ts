
// Constants
export const IVA_RATE = 0.16; // 16% IVA
export const ISR_RETENTION_RATE = 0.10; // 10% ISR retention
export const IVA_RETENTION_RATE = 0.106667; // 10.6667% IVA retention

// IVA Calculator Functions
export const addIva = (amount: number): { subtotal: number, iva: number, total: number } => {
  const subtotal = amount;
  const iva = subtotal * IVA_RATE;
  const total = subtotal + iva;
  
  return { subtotal, iva, total };
};

export const extractIva = (amount: number): { subtotal: number, iva: number, total: number } => {
  const total = amount;
  const subtotal = total / (1 + IVA_RATE);
  const iva = total - subtotal;
  
  return { subtotal, iva, total };
};

// ISR and IVA Retention Calculator Functions
export const calculateRetentions = (
  amount: number, 
  retainIsr: boolean = true, 
  retainIva: boolean = true
): { subtotal: number, iva: number, isrRetention: number, ivaRetention: number, total: number } => {
  const subtotal = amount;
  const iva = subtotal * IVA_RATE;
  
  const isrRetention = retainIsr ? subtotal * ISR_RETENTION_RATE : 0;
  const ivaRetention = retainIva ? subtotal * IVA_RETENTION_RATE : 0;
  
  const total = subtotal + iva - isrRetention - ivaRetention;
  
  return { subtotal, iva, isrRetention, ivaRetention, total };
};

// Currency Converter - Dollar to Peso
export const dollarToPeso = (dollars: number, exchangeRate: number): number => {
  return dollars * exchangeRate;
};

export const pesoToDollar = (pesos: number, exchangeRate: number): number => {
  return pesos / exchangeRate;
};

// Minimum Wage to Peso Converter
export const minimumWageToPeso = (minWageUnits: number, minWageAmount: number): number => {
  return minWageUnits * minWageAmount;
};

export const pesoToMinimumWage = (pesos: number, minWageAmount: number): number => {
  return pesos / minWageAmount;
};

// Format currency
export const formatMxn = (amount: number): string => {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
};

export const formatUsd = (amount: number): string => {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
};
