"use client";
import { HTMLAttributes } from "react";
import { cn } from "@/src/lib/utils";
interface HeaderProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}
export const Header = ({ children, className, ...props }: HeaderProps) => {
  return (
    <header className={cn("header", className)} {...props}>
      {children}
    </header>
  );
};
