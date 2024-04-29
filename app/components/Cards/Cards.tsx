import React from "react";

interface Props {
  titleCard: string;
  textCard: string;
}

const Cards = ({ titleCard, textCard }: Props) => {
  return (
    <div
      className="p-7 border-2 text-center border-[#B8967E]/15 bg-white rounded-tr-[15px] rounded-bl-[15px] cursor-pointer hover:scale-105 hover:shadow-sm transition-all duration-500 md:h-[220px]"
    >
      <div>
        <h1 className="mb-3 text-[#192432] text-[20px]">{titleCard}</h1>
        <p className="text-[16px] text-[#8B94A1]">{textCard}</p>
      </div>
    </div>
  );
};

export default Cards;
