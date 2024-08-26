"use client";
import { useState } from "react";

export default function FilterComponent() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    if (activeButton === buttonName) {
      setActiveButton(null); // Снимаем выделение, если кнопка уже активна
    } else {
      setActiveButton(buttonName); // Устанавливаем новую активную кнопку
    }
  };

  return (
    <div className="flex flex-col gap-[20px] p-[26px] h-fit border bg-[rgba(255,255,255,0.02)] rounded-[14px]">
      <p>Сортировать по:</p>
      <div className="flex flex-row flex-wrap gap-[10px] max-w-[320px]">
        <div
          onClick={() => handleButtonClick("Дата")}
          className={`flex items-center px-[15px] h-[42px] font-medium rounded-[34px] cursor-pointer transition duration-300 ease-in-out ${
            activeButton === "Дата"
              ? "bg-[#CCBAE4] text-black border"
              : "bg-[rgba(255,255,255,0.02)]  text-[rgba(255,255,255,0.6)] border"
          }`}
        >
          Дата
        </div>
        <div
          onClick={() => handleButtonClick("Рейтингу")}
          className={`flex items-center px-[15px] h-[42px] font-medium rounded-[34px] cursor-pointer transition duration-300 ease-in-out ${
            activeButton === "Рейтингу"
              ? "bg-[#CCBAE4]  text-black border"
              : "bg-[rgba(255,255,255,0.02)]  text-[rgba(255,255,255,0.6)] border"
          }`}
        >
          Рейтингу
        </div>
        <div
          onClick={() => handleButtonClick("Просмотрам")}
          className={`flex items-center px-[15px] h-[42px] font-medium rounded-[34px] cursor-pointer transition duration-300 ease-in-out ${
            activeButton === "Просмотрам"
              ? "bg-[#CCBAE4] text-black border"
              : "bg-[rgba(255,255,255,0.02)] text-[rgba(255,255,255,0.6)] border"
          }`}
        >
          Просмотрам
        </div>
        <div
          onClick={() => handleButtonClick("Названию")}
          className={`flex items-center px-[15px] h-[42px] font-medium rounded-[34px] cursor-pointer transition duration-300 ease-in-out ${
            activeButton === "Названию"
              ? "bg-[#CCBAE4] text-black border"
              : "bg-[rgba(255,255,255,0.02)]  text-[rgba(255,255,255,0.6)] border"
          }`}
        >
          Названию
        </div>
      </div>
    </div>
  );
}
