import React from "react";

const Card = ({ logo, name, change }) => {
  return (
    <div className="flex flex-col cursor-pointer transition-all duration-200 hover:bg-black-300 rounded-xl bg-black-100 px-3   py-5 h-[150px] justify-between">
      <img src={logo} alt={logo} className="h-[20px] w-fit pl-2" />
      <div className="flex flex-col gap-2">
        <span className="font-bold text-xs">{name}</span>
        <span
          className={`font-bold text-xs ${
            change > 0
              ? "text-green-500"
              : change < 0
              ? "text-red-500"
              : "text-white"
          }`}
        >
          {change} %
        </span>
      </div>
    </div>
  );
};

export default Card;
