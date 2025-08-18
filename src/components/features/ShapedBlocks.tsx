"use client";
import { ShapeBlock } from "./ShapeBlock";
import { useContext, useState } from "react";
import Window1 from "@/src/assets/1window.png";
import Window2 from "@/src/assets/2window.png";
import Window3 from "@/src/assets/3window.png";
import Window4 from "@/src/assets/4window.png";

import Image, { StaticImageData } from "next/image";
import { CalculatorContext } from "@/src/context/CalculatorContext";

interface ShapeBlockType {
  count: number;
  img?: StaticImageData;
  price: number;
}

const shapedBlocks: ShapeBlockType[] = [
  { count: 1, img: Window1, price: 1100 },
  { count: 2, img: Window2, price: 2200 },
  { count: 3, img: Window3, price: 3300 },
  { count: 4, img: Window4, price: 4400 },
];

export const ShapeBlocks = () => {
  const [selectedBlock, setSelectedBlock] = useState<ShapeBlockType>(
    shapedBlocks[0]
  );
  const { setPrice } = useContext(CalculatorContext);
  const onClick = (block: ShapeBlockType) => {
    setPrice(block.price);
    setSelectedBlock(block);
  };

  return (
    <div className="md:max-w-[602px] flex-col gap-[30px] w-full flex">
      <div className="flex self-start">
        <div className="flex w-full flex-wrap gap-3">
          {shapedBlocks.map((block) => (
            <ShapeBlock
              key={block.count}
              shapeBlock={{
                count: block.count,
                selected: selectedBlock.count === block.count, // выделение
              }}
              onClick={() => onClick(block)}
            />
          ))}
        </div>
      </div>

      {/* Картинка выбранного блока */}
      <div className="px-[30px]">
        {selectedBlock?.img && (
          <Image
            className="w-full max-w-[468px] max-h-[251px] object-contain"
            src={selectedBlock.img}
            alt={`Окно ${selectedBlock.count}`}
          />
        )}
      </div>
    </div>
  );
};
