"use client";
import React from "react";
import { type MenuLinksProps } from "@/src/types/menuLinks";
import { links } from "@/src/constants/menuLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/src/lib/utils";

export const MenuLinks = ({
  colorLinksHover,
  colorLinks,
  closeMenu,
}: MenuLinksProps) => {
  const pathname = usePathname();
  const hover = colorLinksHover ?? "bg-white !text-black";
  const color = colorLinks ?? "text-white hover:bg-white hover:text-black";
  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };
  return (
    <ul
      className={`flex md:flex-row flex-col w-1/2 md:w-auto gap-[2.5rem] leading-[1.7] rounded-[8px] p-[0.5rem] `}
    >
      {links.map((link, idLink) => {
        return (
          <li
            key={idLink}
            className={cn(
              `px-[0.75rem] py-[0.25rem] ${
                isActive(link.link) && `${hover}`
              }  transition-colors duration-150 rounded-[8px]`,
              color
            )}
          >
            <Link
              className="text-[1.2rem] md:text-[1rem]"
              href={link.link}
              onClick={closeMenu}
            >
              {link.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
