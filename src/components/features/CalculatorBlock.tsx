import React from "react";
import { Calculator } from "./Calculator";
import Image from "next/image";
import { ShapeBlocks } from "./ShapedBlocks";
export const CalculatorBlock = () => {
  return (
    <div className="flex md:flex-row flex-col w-full justify-between items-center md:items-start gap-5">
      <div className="md:max-w-[602px] w-full flex  items-center justify-center  ">
        <div className="flex self-start">
          <ShapeBlocks />
        </div>
      </div>
      <Calculator />
    </div>
  );
};
