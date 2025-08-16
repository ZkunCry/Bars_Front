"use client";
import React, { useContext, useEffect, useState } from "react";
import { CustomSelect } from "./CustomSelect";
import { CalculatorContext } from "@/src/context/CalculatorContext";
const PROFILE_PRICES: Record<string, number> = {
  "58mm": 7746.69,
  "70mm": 10242.58,
  "80mm": 12500.0,
};
const defaultForm = {
  windowType: "",
  material: "",
  plasticType: "",
  frameType: "",
  glassType: "",
  width: "",
  height: "",
  mosquitoNet: false,
};
const multipliers = {
  windowType: {
    double: 1.2,
    triple: 1.4,
    balcony: 1.6,
  },
  material: {
    aluminum: 1.3,
  },
  glassType: {
    "one-chamber": 1.1,
    "two-chamber": 1.2,
    "energy-saving": 1.25,
  },
};
export const Calculator = () => {
  const { price: priceForWindow } = useContext(CalculatorContext);
  const [form, setForm] = useState(defaultForm);
  const [price, setPrice] = useState<number | null>(null);
  useEffect(() => {
    calculatePrice(form);
  }, [priceForWindow]);
  const handleChange = (key: keyof typeof form, value: string | boolean) => {
    const newForm = { ...form, [key]: value };
    setForm(newForm);
    calculatePrice(newForm);
  };

  const calculatePrice = (form: typeof defaultForm) => {
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

      // Применяем коэффициенты
      finalPrice *= multipliers.windowType[form.windowType] || 1;
      finalPrice *= multipliers.material[form.material] || 1;
      finalPrice *= multipliers.glassType[form.glassType] || 1;

      // Применяем доп. наценки
      if (form.mosquitoNet) {
        finalPrice += addons.mosquitoNet;
      }

      // Цена за доп. выбранное окно из контекста
      finalPrice += priceForWindow;

      setPrice(Math.round(finalPrice));
    } catch (e) {
      setPrice(null);
    }
  };

  return (
    <div className="w-full md:max-w-[422px]  flex flex-col gap-2 ">
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

      <div className="mt-1  ">
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
