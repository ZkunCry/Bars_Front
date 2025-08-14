import React from "react";
import { cn } from "@/src/lib/utils";
export const ShapeBlock = ({ shapeBlock, selected }) => {
  return (
    <div
      className={cn(
        "cursor-pointer flex basis-[140px] max-h-[120px] items-center justify-center w-60 h-48 border-transparent bg-white rounded-xl  border-2  hover:border-2 hover:border-blue-500 transition",
        selected ? "border-blue-500" : "border-transparent"
      )}
    >
      <div className="w-full flex items-center justify-center">
        <div className="flex max-w-[78px] flex-wrap">
          {Array.from({ length: shapeBlock.count }).map((_, index) => (
            <div
              key={index}
              className={cn(
                "w-[26px] h-[46px] border border-[#8D8888] ",
                selected ? "border-[#1E59D9]" : ""
              )}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
