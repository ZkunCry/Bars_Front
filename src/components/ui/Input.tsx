import React from "react";
import { cn } from "@/src/lib/utils";

export const Input = ({
  className,
  props,
}: {
  className?: string;
  props?: any;
}) => {
  return <input className={cn("input", className)} {...props} />;
};
