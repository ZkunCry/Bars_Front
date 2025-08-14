import Image from "next/image";
import { SemanticHeader } from "@/src/components/semantic";
import { Container } from "@/src/components/ui";
import {
  LinkBtn,
  ContactForm,
  Calculator,
  CalculatorBlock,
} from "@/src/components/features";
import { Metadata } from "next";
import { jsonLd } from "@/src/schemas/main";
import Link from "next/link";

import Window from "@/public/window.png";
import WindowRotate from "@/public/window-rotate.png";
import Man from "@/public/man.png";

export const metadata: Metadata = {
  title: "Главная | Барс - Сургут",
  description: "Окна Барс — Пластиковые окна и остекление в Сургуте",
};
export default function Home() {
  console.log(
    "SERVER ENV:",
    `${
      process.env.NODE_ENV === "production"
        ? process.env.NEXT_STRAPI_API_PROD
        : process.env.NEXT_STRAPI_API_DEV
    }/categories`
  );
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      <section className="flex flex-col md:min-h-[795px] min-h-dvh bg-[url('/bg.png')] bg-cover bg-center relative pt-[97px] ">
        <SemanticHeader />
        <div className="absolute inset-0 bg-black/60 " />
        <div
          className="w-full text-white relative opacity-0  mt-[120px] animate-fade-in"
          style={{ animationDelay: "700ms" }}
        >
          <Container>
            <h1 className="text-[clamp(2rem,4.5vw+0.5rem,4rem)] font-extrabold leading-tight ">
              ОКНА, БАЛКОНЫ И ДВЕРИ
              <br />
              <span className="bg-blue-600 px-3 inline-block mt-2">
                В СУРГУТЕ
              </span>
            </h1>
            <p className="mt-4 text-[clamp(1rem,1.5vw+0.5rem,1.5rem)] text-gray-200">
              Установка качественных оконных конструкций
              <br />
              из ПВХ и алюминия
            </p>
          </Container>
        </div>
      </section>
      <section id="calculator" className="md:py-[5rem] py-[3rem]">
        <Container>
          <div className="flex justify-center items-center  ">
            <div className="flex flex-col gap-[2rem] bg-calculator w-full max-w-[1162px] p-[2rem] rounded-[1rem]">
              <div className="top">
                <h2 className="text-[clamp(1.5rem,2vw+0.75rem,2.25rem)] font-bold leading-[clamp(1.5rem,4vw+1rem,4.5rem)] ">
                  Рассчитайте стоимость здесь и сейчас
                </h2>
              </div>
              <div className="flex gap-5  ">
                <CalculatorBlock />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="md:py-[5rem] py-[3rem]">
        <Container>
          <div className="flex flex-col gap-[1.19rem]">
            <div>
              <h3 className="text-[clamp(1.5rem,2vw+0.75rem,2rem)] leading-[clamp(2rem,2vw+0.75rem,4.5rem)] font-bold">
                Выбирайте с душой — всё для уюта вашего дома и бизнеса
              </h3>
            </div>
            <div className="flex flex-col gap-[1.06rem]">
              <div className="flex flex-col md:flex-row gap-[1.06rem]">
                <div className="relative bg-[url('/windows.png')]  flex flex-1 md:min-h-[176px] min-h-[120px] bg-[#ECECEE] bottom rounded-[8px] p-[1rem] pb-[2rem] ">
                  <Link
                    href={"/catalog/windows"}
                    className="flex items-end absolute  bottom-[0] pb-[1rem] w-full h-full self-end text-[1.5rem] leading-[2rem]"
                  >
                    Окна
                  </Link>
                </div>
                <div className="relative bg-[url('/blinds.png')] flex flex-1 md:min-h-[176px] min-h-[120px] bg-[#ECECEE] bottom rounded-[8px] p-[1rem] pb-[2rem] ">
                  <Link
                    href={"/catalog/blinds"}
                    className="flex items-end absolute  bottom-[0] pb-[1rem] w-full h-full self-end text-[1.5rem] leading-[2rem]"
                  >
                    Жалюзи
                  </Link>
                </div>
                <div className="relative bg-[url('/partitions.png')] flex flex-1 md:min-h-[176px] min-h-[120px] bg-[#ECECEE] bottom rounded-[8px] p-[1rem] pb-[2rem] ">
                  <Link
                    href={"/catalog/partitions"}
                    className="flex items-end absolute  bottom-[0] pb-[1rem] w-full h-full self-end text-[1.5rem] leading-[2rem]"
                  >
                    Перегородки
                  </Link>
                </div>
              </div>
              <div className="relative flex flex-col md:flex-row gap-[1.06rem]">
                <div className="flex bg-[url('/doors.png')]  flex-1 md:min-h-[176px] min-h-[120px] bg-[#ECECEE] bottom rounded-[8px] p-[1rem] pb-[2rem] ">
                  <Link
                    href={"/catalog/doors"}
                    className="flex items-end absolute  bottom-[0] pb-[1rem] w-full h-full self-end text-[1.5rem] leading-[2rem]"
                  >
                    Двери
                  </Link>
                </div>
                <div className="relative bg-[url('/shutters.png')]  flex flex-1 md:min-h-[176px] min-h-[120px] bg-[#ECECEE] bottom rounded-[8px] p-[1rem] pb-[2rem] ">
                  <Link
                    href={"/catalog/shutters"}
                    className="flex items-end absolute  bottom-[0] pb-[1rem] w-full h-full self-end text-[1.5rem] leading-[2rem]"
                  >
                    Рольставни
                  </Link>
                </div>
                <div className="relative bg-[url('/balconies.png')] flex flex-1 md:min-h-[176px] min-h-[120px] bg-[#ECECEE] bottom rounded-[8px] p-[1rem] pb-[2rem] ">
                  <Link
                    href={"/catalog/balconies"}
                    className="flex items-end absolute  bottom-[0] pb-[1rem] w-full h-full self-end text-[1.5rem] leading-[2rem]"
                  >
                    Балконы
                  </Link>
                </div>
                <div className="relative bg-[url('/portals.png')] flex flex-1 md:min-h-[176px] min-h-[120px] bg-[#ECECEE] bottom rounded-[8px] p-[1rem] pb-[2rem] ">
                  <Link
                    href={"/catalog/portals"}
                    className="flex items-end absolute  bottom-[0] pb-[1rem] w-full h-full self-end text-[1.5rem] leading-[2rem]"
                  >
                    Порталы
                  </Link>
                </div>
              </div>
            </div>
            <LinkBtn className="self-end mt-[1.25rem]" href="/catalog">
              Смотреть весь каталог
            </LinkBtn>
          </div>
        </Container>
      </section>

      <section className="md:py-[5rem] py-[3rem] overflow-hidden">
        <Container>
          <div className="flex flex-col md:justify-between md:flex-row">
            <div className="flex flex-col md:flex-1 md:basis-[700px] gap-[1rem] max-h-[648px]">
              <div>
                <h3 className="text-[clamp(1.5rem,2vw+0.75rem,2rem)] leading-[clamp(2rem,2vw+0.75rem,2.5rem)] font-bold">
                  Почему «Барс» —{" "}
                  <span className="bg-blue-600 px-3 inline-block mt-2 text-white">
                    правильный выбор
                  </span>
                </h3>
              </div>
              <p className="text-[clamp(1rem,1.5vw+0.5rem,1.5rem)] leading-[2rem] mb-[1rem]">
                Мы заботимся о комфорте вашего дома и бизнеса — честно,
                профессионально и с любовью к делу
              </p>

              <div className="hidden relative w-[448px] h-[538px] md:block  ">
                <Image
                  src={WindowRotate}
                  alt="Окно перевернутое"
                  width={544}
                  height={400}
                  loading="lazy"
                  className="absolute bottom-[-120px] left-0 w-full h-full object-contain rotate-[-20deg]"
                />
              </div>
            </div>
            <div className="flex flex-col flex-1 basis-[534px] gap-[1rem]">
              <div className="flex gap-[1.5rem] p-[1rem] bg-[#ECECEE] rounded-[8px]">
                <div className="bg-white text-center py-[1rem] px-[1.5rem] rounded-[8px]">
                  <span className="text-[#908A8A] text-[clamp(2rem,6vw,3rem)] leading-[clamp(2.5rem,6.5vw,3.5rem)] font-bold">
                    1.
                  </span>
                </div>
                <p className="w-full text-[clamp(1rem,3vw+0.25rem,1.5rem)] leading-[clamp(1.25rem,3.5vw+0.25rem,2rem)] self-center">
                  Бесплатный замер
                </p>
              </div>
              <div className="flex gap-[1.5rem] p-[1rem] bg-[#ECECEE] rounded-[8px]">
                <div className="bg-white text-center py-[1rem] px-[1.5rem] rounded-[8px]">
                  <span className="text-[#908A8A] text-[clamp(2rem,6vw,3rem)] leading-[clamp(2.5rem,6.5vw,3.5rem)] font-bold">
                    2.
                  </span>
                </div>
                <p className="w-full text-[clamp(1rem,3vw+0.25rem,1.5rem)] leading-[clamp(1.25rem,3.5vw+0.25rem,2rem)]  self-center">
                  Гарантия 5 лет
                </p>
              </div>
              <div className="flex gap-[1.5rem] p-[1rem] bg-[#ECECEE] rounded-[8px]">
                <div className="bg-white text-center py-[1rem] px-[1.5rem] rounded-[8px]">
                  <span className="text-[#908A8A] text-[clamp(2rem,6vw,3rem)] leading-[clamp(2.5rem,6.5vw,3.5rem)] font-bold">
                    3.
                  </span>
                </div>
                <p className="w-full text-[clamp(1rem,3vw+0.25rem,1.5rem)] leading-[clamp(1.25rem,3.5vw+0.25rem,2rem)]  self-center">
                  Персональный подход
                </p>
              </div>
              <div className="flex gap-[1.5rem] p-[1rem] bg-[#ECECEE] rounded-[8px]">
                <div className="bg-white text-center py-[1rem] px-[1.5rem] rounded-[8px]">
                  <span className="text-[#908A8A] text-[clamp(2rem,6vw,3rem)] leading-[clamp(2.5rem,6.5vw,3.5rem)] font-bold">
                    4.
                  </span>
                </div>
                <p className="w-full text-[clamp(1rem,3vw+0.25rem,1.5rem)] leading-[clamp(1.25rem,3.5vw+0.25rem,2rem)]  self-center">
                  Рассрочка без %
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="md:py-[5rem] py-[3rem]">
        <Container>
          <div className="flex flex-col md:flex-row md:justify-between gap-[0.8rem] md:gap-0">
            <div className="flex flex-col md:flex-1 items-start  md:basis-[722px] text-[clamp(2rem,4.5vw+0.5rem,4rem)] leading-[clamp(3rem,4.5vw+0.5rem,5rem)]  ">
              <h1 className="  font-bold uppercase">
                надёжные окна <br /> и двери уже
              </h1>
              <h1 className="bg-blue-600 px-3 inline-block mt-2 text-white  font-bold uppercase">
                более 20 лет
              </h1>
            </div>
            <div className="flex flex-col md:flex-1 md:basis-[548px] gap-[0.5rem]">
              <div className="flex flex-col gap-[1rem] bg-[#EBEBEB] p-[1.5rem] pb-[2rem] rounded-[1rem]">
                <h4 className="text-[clamp(1.25rem,2vw+0.5rem,1.5rem)] leading-[clamp(1.6rem,2vw+0.6rem,2rem)] font-bold">
                  5000+ довольных клиентов
                </h4>
                <p className="text-[#353333] text-[clamp(1rem,1.5vw+0.2rem,1.13rem)] leading-[clamp(1.4rem,1.5vw+0.3rem,1.65rem)]">
                  За время нашей работы мы помогли тысячам людей сделать дома
                  теплее, уютнее и тише
                </p>
              </div>

              <div className="flex flex-col gap-[1rem] bg-[#EBEBEB] p-[1.5rem] pb-[2rem] rounded-[1rem]">
                <h4 className="text-[clamp(1.25rem,2vw+0.5rem,1.5rem)] leading-[clamp(1.6rem,2vw+0.6rem,2rem)] font-bold">
                  Работаем только по Сургуту и району
                </h4>
                <p className="text-[#353333] text-[clamp(1rem,1.5vw+0.2rem,1.13rem)] leading-[clamp(1.4rem,1.5vw+0.3rem,1.65rem)]">
                  Благодаря узкой географии мы можем быстро реагировать и
                  обеспечивать высокий уровень сервиса
                </p>
              </div>

              <div className="flex flex-col gap-[1rem] bg-[#EBEBEB] p-[1.5rem] pb-[2rem] rounded-[1rem]">
                <h4 className="text-[clamp(1.25rem,2vw+0.5rem,1.5rem)] leading-[clamp(1.6rem,2vw+0.6rem,2rem)] font-bold">
                  Проверенные специалисты
                </h4>
                <p className="text-[#353333] text-[clamp(1rem,1.5vw+0.2rem,1.13rem)] leading-[clamp(1.4rem,1.5vw+0.3rem,1.65rem)]">
                  Все монтажники и замерщики — квалифицированные сотрудники с
                  большим практическим опытом
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="md:py-[5rem] py-[3rem]">
        <Container>
          <div className="flex flex-col gap-[1rem]">
            <div>
              <h2 className="text-[2rem] leading-[4.5rem] font-extrabold">
                Отзывы клиентов
              </h2>
            </div>
            <div className="flex flex-col items-center justify-center p-10">
              <svg
                className="w-12 h-12 text-gray-400 mb-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path d="M17 8a5 5 0 11-10 0 5 5 0 0110 0z" />
                <path d="M2 21a9 9 0 0118 0H2z" />
              </svg>
              <p className="text-gray-600 text-center text-lg mb-2">
                Пока нет ни одного отзыва
              </p>
              {/* <p className="text-gray-400 text-sm text-center mb-2">
                Будьте первым, кто поделится мнением!
              </p>

              <CustomButton>Оставить отзыв</CustomButton> */}
            </div>
          </div>
        </Container>
      </section>
      <section className="flex justify-center items-center md:py-[5rem] py-[3rem] px-[1rem]">
        <div className="max-w-[1200px] gap-[1.2rem] flex justify-between bg-[#ECECEE] p-[26px] rounded-[16px]">
          <div className="flex-1 hidden md:block relative w-[543px] h-[420px]">
            <Image
              src={Man}
              alt="Мужчина мерит окно"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex flex-col flex-1">
            <div>
              <h2 className="text-[clamp(1.5rem,3vw+0.5rem,2rem)] leading-[clamp(2rem,3.5vw+0.5rem,2.5rem)] font-extrabold">
                Оставьте заявку — мы перезвоним в течение 15 минут
              </h2>
              <p className="text-[clamp(1rem,1.5vw+0.2rem,1.125rem)] leading-[clamp(1.4rem,2vw+0.2rem,1.65rem)] mt-2">
                Ответим на все вопросы, подберём подходящее решение и запишем на
                бесплатный замер
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
