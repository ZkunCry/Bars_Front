import React from "react";
import { cn } from "@/src/lib/utils";
export const Label = ({
  children,
  className,
  props,
}: {
  children: React.ReactNode;
  className?: string;
  props?: any;
}) => {
  return (
    <label className={cn("label", className)} {...props}>
      {children}
    </label>
  );
};
