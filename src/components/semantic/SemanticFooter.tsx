import React from "react";
import { Container } from "../ui";
import Telegram from "@/public/telegram.svg";
import Vk from "@/public/vk.svg";
import Image from "next/image";
import Link from "next/link";
import { MapFooter } from "../features";
import Logo from "@/public/logowhite.svg";
export const SemanticFooter = () => {
  return (
    <footer className="bg-[#272727] pt-[5rem] pb-[1.5rem]">
      <Container>
        <div className="flex flex-col gap-[2rem]">
          <div className="flex flex-col justify-between md:flex-row gap-4">
            <div className="flex flex-col  text-white gap-[1rem]">
              <div className="flex-1">
                <Image
                  width={200}
                  height={118}
                  src={Logo}
                  alt="Логотип ООО Барс"
                />
                <span>г. Сургут, ​Бульвар Свободы, 4​, 1 этаж</span>
              </div>
              <div className="flex gap-[0.5rem]">
                <Image src={Telegram} alt="telegram" />
                <Image src={Vk} alt="vkontakte" />
              </div>
              <Link href={"tel:+73462241444"}> +7 (3462) 24-33-33</Link>
              <Link
                href={
                  "https://yandex.ru/maps/org/bars/1446683898/?ll=73.400159%2C61.248953&z=17.83"
                }
                target="_blank"
              >
                Мы на яндекс картах
              </Link>
              <Link
                href={
                  "https://2gis.ru/surgut/firm/5489290326837014?m=73.399677%2C61.24882%2F16"
                }
                target="_blank"
              >
                Мы в 2гис
              </Link>
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
