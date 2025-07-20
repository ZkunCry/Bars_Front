import React from "react";
import { Container } from "../ui";
import Telegram from "@/public/telegram.svg";
import Vk from "@/public/vk.svg";
import Image from "next/image";
import Link from "next/link";
import { MapFooter } from "../features";

export const SemanticFooter = () => {
  return (
    <footer className="bg-[#272727] pt-[5rem] pb-[1.5rem]">
      <Container>
        <div className="flex flex-col gap-[2rem]">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col text-white gap-[1rem]">
              <div className="flex gap-[0.5rem]">
                <Image src={Telegram} alt="telegram" />
                <Image src={Vk} alt="vkontakte" />
              </div>
              <Link href={"tel:+73462241444"}>+7 (3462) 24-14-44</Link>
              <span>г. Сургут, ​Бульвар Свободы, 4​, 1 этаж</span>
            </div>
            <MapFooter />
          </div>
          <div className="border-t border-[#979797] pt-[1rem] text-white">
            <span>© 2025 Окна Барс - все права защищены.</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};
