import React from "react";
import { cn } from "@/src/lib/utils";
export const Button = ({
  className,
  children,
  props,
}: {
  className?: string;
  children?: React.ReactNode;
  props?: any;
}) => {
  return (
    <button className={cn("button", className)} {...props}>
      {children}
    </button>
  );
};
