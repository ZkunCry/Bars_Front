"use client";
import React, { useState } from "react";
import { CustomSelect } from "./CustomSelect";

export const Calculator = () => {
  const [form, setForm] = useState({
    windowType: "",
    material: "",
    plasticType: "",
    frameType: "",
    glassType: "",
  });

  const handleChange = (key: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="flex-1 grid grid-cols-1 gap-4">
      <div className="flex lg:flex-row flex-col lg:items-center items-start lg:gap-5">
        <label className="block lg:max-w-[120px] w-full text-sm font-medium mb-1 text-[1.13rem]">
          Тип окна
        </label>
        <CustomSelect
          options={[
            { value: "single", label: "Одностворчатое" },
            { value: "double", label: "Двустворчатое" },
            { value: "triple", label: "Трёхстворчатое" },
            { value: "balcony", label: "Балконный блок" },
          ]}
          value={form.windowType}
          placeholder={"Выберите тип окна"}
          onChange={(value) => handleChange("windowType", value)}
        />
      </div>

      <div className="flex lg:flex-row flex-col lg:items-center items-start lg:gap-5">
        <label className="block lg:max-w-[120px] w-full text-sm font-medium mb-1 text-[1.13rem]">
          Материал
        </label>
        <CustomSelect
          options={[
            { value: "pvc", label: "ПВХ (пластик)" },
            { value: "wood", label: "Дерево" },
            { value: "aluminum", label: "Алюминий" },
          ]}
          value={form.material}
          placeholder={"Выберите материал"}
          onChange={(value) => handleChange("material", value)}
        />
      </div>

      <div className="flex lg:flex-row flex-col lg:items-center items-start lg:gap-5">
        <label className="block lg:max-w-[120px] w-full text-sm font-medium mb-1 text-[1.13rem]">
          Вид пластика
        </label>
        <CustomSelect
          options={[
            { value: "white", label: "Белый" },
            { value: "laminated", label: "Ламинированный" },
            { value: "colored", label: "Цветной" },
          ]}
          value={form.plasticType}
          placeholder={"Выберите вид пластика"}
          onChange={(value) => handleChange("plasticType", value)}
        />
      </div>

      <div className="flex lg:flex-row flex-col lg:items-center items-start lg:gap-5">
        <label className="block lg:max-w-[120px] w-full text-sm font-medium mb-1 text-[1.13rem]">
          Вид рамы
        </label>
        <CustomSelect
          options={[
            { value: "standard", label: "Стандартная" },
            { value: "warm", label: "Тёплая (5 камер)" },
            { value: "reinforced", label: "Усиленная" },
          ]}
          value={form.frameType}
          placeholder={"Выберите вид рамы"}
          onChange={(value) => handleChange("frameType", value)}
        />
      </div>

      <div className="flex lg:flex-row flex-col lg:items-center items-start lg:gap-5">
        <label className="block lg:max-w-[120px] w-full text-sm font-medium mb-1 text-[1.13rem]">
          Вид стекла
        </label>
        <CustomSelect
          options={[
            { value: "single-glass", label: "Одинарное стекло" },
            { value: "double-glass", label: "Двухкамерный стеклопакет" },
            { value: "energy-saving", label: "Энергосберегающее" },
            { value: "triplex", label: "Триплекс" },
          ]}
          value={form.glassType}
          placeholder={"Выберите вид стекла"}
          onChange={(value) => handleChange("glassType", value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1 text-[1.13rem]">
          Ширина
        </label>
        <input
          type="text"
          className="w-full border rounded-md p-2"
          placeholder="Укажите ширину в метрах"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1 text-[1.13rem]">
          Высота
        </label>
        <input
          type="text"
          className="w-full border rounded-md p-2"
          placeholder="Укажите высоту в метрах"
        />
      </div>

      <div className="flex items-center gap-2 mt-2">
        <input type="checkbox" id="mosquito" className="accent-black" />
        <label htmlFor="mosquito" className="text-sm">
          Добавить москитную сетку
        </label>
      </div>

      <div className="mt-4 text-2xl font-semibold">
        Цена
        <span className="bg-white px-3 py-1 rounded-lg shadow-sm inline-block ml-2">
          ≈ 15 399 ₽
        </span>
      </div>
    </div>
  );
};
