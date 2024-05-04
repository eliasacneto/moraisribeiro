import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import LawIcon from "../../../public/images/lawHammer.png";
import Image from "next/image";

interface Props {
  image?: string;
  titleCard: string;
  textCard: string;
}

const Cards = ({ titleCard, textCard }: Props) => {
  return (
    <div className="p-7 border-2 text-center border-[#B8967E]/15 bg-white rounded-tr-[3rem] rounded-bl-[3rem] hover:border-2 hover:border-[#B8967E] hover:shadow-sm transition-all duration-500 md:min-h-64">
      <div className="flex flex-col items-center">
        <Image src={LawIcon} alt="icone de martelo" className="mb-3" />
        <h1 className="mb-3 text-[#192432] text-[20px]">{titleCard}</h1>
        <p className="text-[16px] text-[#8B94A1]">{textCard}</p>
      </div>
    </div>
  );
};

export default Cards;
