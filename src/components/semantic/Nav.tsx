import React from "react";
import { cn } from "@/src/lib/utils";
export const Nav = ({
  className,
  children,
  props,
}: {
  className?: string;
  children?: React.ReactNode | React.ReactNode[];
  props?: any;
}) => {
  return (
    <nav className={cn("nav", className)} {...props}>
      {children}
    </nav>
  );
};
