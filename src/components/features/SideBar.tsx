"use client";

import { categories } from "@/src/constants/products";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-full md:max-w-[208px] min-w-[150px] ">
      <div className="bg-gray-100 p-4 rounded-lg mb-[1rem] md:hidden block">
        <h2 className="font-extrabold text-lg text-gray-800">Категории</h2>
      </div>

      <ul className="flex gap-1 flex-row md:flex-col overflow-x-auto bg-gray-100 p-4 rounded-lg shadow-sm">
        {categories.map((category, index) => {
          const isActive = pathname
            .toLowerCase()
            .includes(category.href.toLowerCase());

          return (
            <li key={index} className="md:mb-1 last:mb-0">
              <Link
                href={"/catalog" + category.href}
                className={`block px-3 py-2 rounded transition-all ${
                  isActive
                    ? "bg-black text-white font-medium"
                    : "hover:bg-gray-200 text-gray-700"
                } whitespace-nowrap`}
              >
                {category.value}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
