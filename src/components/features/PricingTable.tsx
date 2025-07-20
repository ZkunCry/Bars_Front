import type { PricingProps } from "@/src/types/pricing";
import React from "react";

export const PricingTable = ({ pricingList }: PricingProps) => {
  return (
    <div className="overflow-x-auto mt-[4rem]">
      <table className="min-w-full  text-sm text-gray-900">
        <thead className="bg-[#EFF1FE] text-left text-sm font-medium">
          <tr>
            <th className="px-4 py-3 rounded-l-[8px]">
              Установка по видам продукции
            </th>
            <th className="px-4 py-3">Разряд</th>
            <th className="px-4 py-3">Расценки за установку</th>
            <th className="px-4 py-3 rounded-r-[8px]">Примечание</th>
          </tr>
        </thead>
        <tbody>
          {pricingList.map((row, idx) => (
            <tr className="border-b border-[#E4E5E8]" key={idx}>
              <td className="px-4 py-3">{row.Name}</td>
              <td className="px-4 py-3">{row.rank}</td>
              <td className="px-4 py-3">{row.price} ₽</td>
              <td className="px-4 py-3">{row.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
