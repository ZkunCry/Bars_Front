"use client";
import { createContext, useState } from "react";

export const CalculatorContext = createContext({
  price: 0,
  setPrice: (price: number) => {},
});

const CalculatorProvider = ({ children }: { children: React.ReactNode }) => {
  const [price, setPrice] = useState(0);
  return (
    <CalculatorContext.Provider value={{ price, setPrice }}>
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorProvider;
