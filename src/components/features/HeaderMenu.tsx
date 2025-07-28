"use client";
import { useState, useEffect } from "react";
import { Nav } from "../semantic";
import { MenuLinks } from "./MenuLinks";
import Link from "next/link";
import Image from "next/image";
import type { HeaderMenuProps } from "@/src/types/header-menu";

export const HeaderMenu = ({
  colorLinks,
  colorLinksHover,
  telColor,
  logoColor,
  telColorText,
  navBorder,
  logo,
}: HeaderMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);
  return (
    <>
      <div className="flex justify-between items-center text-white gap-4 py-[0.75rem]">
        <div className={`logo text-xl font-bold ${logoColor}`}>
          <Image src={logo} alt="Барс лого" />
        </div>

        <button
          className={`md:hidden block burger-btn cursor-pointer z-40 ${
            isOpen ? "open" : "close"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <Nav
          className={`border md:block hidden ${
            navBorder ?? "border-white"
          }   rounded-[8px] items-center gap-6`}
        >
          <MenuLinks
            colorLinksHover={colorLinksHover}
            colorLinks={colorLinks}
          />
        </Nav>
        <div
          className={`hidden md:flex justify-center items-center ${telColorText} rounded-[8px] px-[16px] py-[0.9rem]`}
          style={{ backgroundColor: telColor ?? "rgba(255, 255, 255, 0.2)" }}
        >
          <Link
            className="text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] text-center"
            href={"tel:+73462241444"}
          >
            +7 (3462) 24‒14‒44
          </Link>
        </div>
      </div>

      <div
        className={`fixed overflow-hidden top-0 left-0 right-0 z-30 p-6 pt-24 flex flex-col gap-6 items-center text-white  transition-transform duration-300 md:hidden ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Nav className="w-full flex flex-col items-center gap-6">
          <MenuLinks closeMenu={() => setIsOpen(false)} />
        </Nav>

        {/* Телефон внутри меню на мобильных */}
        <Link
          className="text-white text-[1rem] border border-white px-6 py-3 rounded-lg mt-4"
          href="tel:+73462241444"
        >
          +7 (3462) 24‒14‒44
        </Link>
      </div>
      <div
        className={`fixed inset-0 bg-black/95 h-dvh w-full backdrop-blur-lg z-20 transition-opacity duration-300 ease-in-out md:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />
    </>
  );
};
