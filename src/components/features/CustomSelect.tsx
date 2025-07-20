"use client";
import React, { useRef, useState, type ChangeEvent } from "react";
import { useClickOutside } from "@/src/hooks/useClickOutside";
import { SelectProps, type Option } from "@/src/types/select";
import { cn } from "@/src/lib/utils";
export const CustomSelect = ({
  options,
  value,
  placeholder,
  onChange,
  className,
}: SelectProps) => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, () => {
    setOpen(false);
  });
  const selectedOption = options.find((option) => option.value === value);
  const handleSelect = (option: Option) => {
    onChange(option.value);
    setOpen(false);
  };
  return (
    <div
      ref={ref}
      className={cn(
        "relative w-full min-w-[200px] font-sans text-[1.13rem]",
        className
      )}
    >
      <div
        onClick={() => setOpen(!isOpen)}
        className={`
          flex justify-between items-center
          py-[5px] px-3 
          border border-[#828282] rounded
           cursor-pointer
          ${value ? "text-gray-800" : "text-gray-500"}
        `}
      >
        <span
          className={` ${selectedOption ? "text-gray-800" : "text-gray-500"}`}
        >
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <svg
          className={`transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          width="12"
          height="7"
          viewBox="0 0 12 7"
          fill="none"
        >
          <path
            d="M1 1L6 6L11 1"
            stroke="#777"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {isOpen && (
        <div
          className="
          absolute top-full left-0 right-0 
          bg-white border border-[#D4D7DE] rounded 
          mt-1 shadow-lg z-50
        "
        >
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleSelect(option)}
              className={cn(
                "px-3 py-2 cursor-pointer transition-colors duration-150",
                value === option.value
                  ? "bg-blue-50 text-blue-700"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              )}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
