"use client";
import { cn } from "@/src/lib/utils";
import Link from "next/link";
import React from "react";

export const LinkBtn = ({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) => {
  return (
    <Link
      href={href ?? "/"}
      className={cn(
        "bg-[#252121] text-white py-[0.625rem] px-[1rem] leading-[1.625rem] rounded-[8px] hover:bg-[#3a3535] transition-colors duration-150 ",
        className
      )}
    >
      {children}
    </Link>
  );
};
