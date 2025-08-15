import React from "react";
import { Calculator } from "./Calculator";
import Image from "next/image";
import { ShapeBlocks } from "./ShapedBlocks";
import CalculatorProvider from "@/src/context/CalculatorContext";
export const CalculatorBlock = () => {
  return (
    <div className="flex md:flex-row flex-col w-full justify-between items-center md:items-start gap-5">
      <CalculatorProvider>
        <ShapeBlocks />
        <Calculator />
      </CalculatorProvider>
    </div>
  );
};
