"use client";
import React from "react";
import { catalogMenuLinks } from "@/src/constants/catalogMenuLinks";
import { LinkBtn } from "./LinkBtn";
import { usePathname } from "next/navigation";
export const CatalogMenuLinks = () => {
  const pathname = usePathname();
  return catalogMenuLinks.map((link, idLink) => {
    return (
      <LinkBtn
        className={` ${
          pathname === link.link
            ? "bg-black text-white"
            : "bg-transparent text-black hover:bg-black hover:text-white"
        } border border-black rounded-[0.5rem] text-center`}
        key={idLink}
        href={link.link}
      >
        {link.title}
      </LinkBtn>
    );
  });
};
