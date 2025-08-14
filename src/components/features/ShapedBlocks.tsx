// import { useState } from "react";

import { ShapeBlock } from "./ShapeBlock";

export const ShapeBlocks = () => {
  return (
    <div className="flex w-full flex-wrap gap-3">
      <ShapeBlock shapeBlock={{ count: 1 }} />
      <ShapeBlock shapeBlock={{ count: 2 }} />

      <ShapeBlock shapeBlock={{ count: 3 }} />
      <ShapeBlock shapeBlock={{ count: 4 }} selected={true} />
    </div>
  );
};
