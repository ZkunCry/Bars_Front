"use client";
import React from "react";
import { cn } from "@/src/lib/utils";
import { Button } from "../ui";
export const CustomButton = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <Button
      className={cn(
        "bg-[#252121] text-white py-[0.625rem] px-[1rem] leading-[1.625rem] rounded-[8px] cursor-pointer hover:bg-[#3a3535] transition-colors duration-150 ",
        className
      )}
    >
      {children}
    </Button>
  );
};
