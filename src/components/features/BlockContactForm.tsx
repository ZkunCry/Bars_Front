import React from "react";
import { ContactForm } from "./ContactFrom";
export const BlockContactForm = () => {
  return (
    <div className="max-w-[540px] gap-[1.2rem] flex justify-between bg-[#ECECEE] p-[26px] rounded-[16px]">
      <div className="flex flex-col flex-1">
        <div>
          <h2 className="text-[clamp(1.5rem,3vw+0.5rem,2rem)] leading-[clamp(2rem,3.5vw+0.5rem,2.5rem)] font-extrabold">
            Не знаете, что выбрать?
          </h2>
          <p className="text-[clamp(1rem,1.5vw+0.2rem,1.125rem)] leading-[clamp(1.4rem,2vw+0.2rem,1.65rem)] mt-2">
            Мы поможем подобрать лучшее решение для вашего дома. Оставьте заявку
            — и мы подберём оптимальный вариант под ваши задачи и бюджет
          </p>
        </div>

        <ContactForm />
      </div>
    </div>
  );
};
