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
    width: "",
    height: "",
    mosquitoNet: false,
  });

  const [price, setPrice] = useState<number | null>(null);

  const handleChange = (key: keyof typeof form, value: string | boolean) => {
    const newForm = { ...form, [key]: value };
    setForm(newForm);
    calculatePrice(newForm);
  };

  // Цены за м² для разных профилей
  const PROFILE_PRICES: Record<string, number> = {
    "58mm": 7746.69,
    "70mm": 10242.58,
    "80mm": 12500.0,
  };
  const calculatePrice = (form) => {
    const { width, height, frameType } = form;

    if (!width || !height || !frameType) {
      setPrice(null);
      return;
    }

    try {
      const widthNum = parseFloat(width.replace(",", "."));
      const heightNum = parseFloat(height.replace(",", "."));

      if (
        isNaN(widthNum) ||
        isNaN(heightNum) ||
        widthNum <= 0 ||
        heightNum <= 0
      ) {
        setPrice(null);
        return;
      }

      const area = widthNum * heightNum;

      const basePrice = area * PROFILE_PRICES[frameType];

      let finalPrice = basePrice;

      if (form.windowType === "double") finalPrice *= 1.2;
      else if (form.windowType === "triple") finalPrice *= 1.4;
      else if (form.windowType === "balcony") finalPrice *= 1.6;

      if (form.material === "aluminum") finalPrice *= 1.3;

      if (form.glassType === "one-chamber") finalPrice *= 1.1;
      else if (form.glassType === "two-chamber") finalPrice *= 1.2;
      else if (form.glassType === "energy-saving") finalPrice *= 1.25;

      if (form.mosquitoNet) finalPrice += 3000;

      setPrice(Math.round(finalPrice));
    } catch (e) {
      setPrice(null);
    }
  };

  return (
    <div className="w-full md:max-w-[422px]  flex flex-col gap-6 ">
      <div className="space-y-5">
        <div className="flex flex-col gap-2">
          <label className="block text-sm font-medium text-gray-700">
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

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="block text-sm font-medium text-gray-700">
              Ширина
            </label>

            <input
              type="text"
              className="w-full border border-[#CACACA] rounded-lg p-3 pl-4"
              placeholder="Укажите ширину в метрах"
              value={form.width}
              onChange={(e) => handleChange("width", e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="block text-sm font-medium text-gray-700">
              Высота
            </label>

            <input
              type="text"
              className="w-full border border-[#CACACA] rounded-lg p-3 pl-4"
              placeholder="Укажите высоту в метрах"
              value={form.height}
              onChange={(e) => handleChange("height", e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="block text-sm font-medium text-gray-700">
            Материал
          </label>
          <CustomSelect
            options={[
              { value: "pvc", label: "ПВХ (пластик)" },
              { value: "aluminum", label: "Алюминий" },
            ]}
            value={form.material}
            placeholder={"Выберите материал"}
            onChange={(value) => handleChange("material", value)}
          />
        </div>

        {/* Вид рамы (профиль) */}
        <div className="flex flex-col gap-2">
          <label className="block text-sm font-medium text-gray-700">
            Профиль
          </label>
          <CustomSelect
            options={[
              { value: "58mm", label: "58 мм (3 камеры)" },
              { value: "70mm", label: "70 мм (5 камер)" },
              { value: "80mm", label: "80 мм (6 камер)" },
            ]}
            value={form.frameType}
            placeholder={"Выберите профиль"}
            onChange={(value) => handleChange("frameType", value)}
          />
        </div>

        {/* Вид пластика */}
        <div className="flex flex-col gap-2">
          <label className="block text-sm font-medium text-gray-700">
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

        {/* Вид стекла */}
        <div className="flex flex-col gap-2">
          <label className="block text-sm font-medium text-gray-700">
            Вид стекла
          </label>
          <CustomSelect
            options={[
              { value: "single", label: "Одинарное стекло (4 мм)" },
              { value: "one-chamber", label: "Однокамерное (2 стекла)" },
              { value: "two-chamber", label: "Двухкамерное (3 стекла)" },
              {
                value: "energy-saving",
                label: "Энергосберегающее (напыление на 3-е стекло)",
              },
            ]}
            value={form.glassType}
            placeholder={"Выберите вид стекла"}
            onChange={(value) => handleChange("glassType", value)}
          />
        </div>

        {/* Москитная сетка */}
        <div className="flex items-center gap-3 p-3  rounded-lg mt-2">
          <input
            type="checkbox"
            id="mosquito"
            className="h-5 w-5 accent-black cursor-pointer"
            checked={form.mosquitoNet}
            onChange={(e) => handleChange("mosquitoNet", e.target.checked)}
          />
          <label htmlFor="mosquito" className="text-gray-700 cursor-text">
            Добавить москитную сетку (+3000 руб)
          </label>
        </div>
      </div>

      <div className="mt-6 p-5 ">
        <div className="flex items-center  gap-3">
          <span className="text-[36px] font-medium text-gray-700">Цена</span>
          <div className="text-[1.1rem] text-left font-bold">
            {price !== null ? (
              <span>≈ {price.toLocaleString("ru-RU")} ₽</span>
            ) : (
              <span className="text-gray-400 inline-block">
                Заполните параметры
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
