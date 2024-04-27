import React from "react";
import helpImg from "@/public/images/helpimg.svg";
import Image from "next/image";
import Button from "../components/Button/button";

const Help = () => {
  return (
    <div className="bg-[#0E0E0E]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <div className="md:w-1/2">
          <Image src={helpImg} alt="imagem" />
        </div>
        <div className="md:w-1/2 md:pr-6 mb-8 md:mb-0">
          <h1 className="text-[40px] text-center md:text-left text-white mb-3">
            Está buscando ajuda de um advogado?
          </h1>
          <div className="flex justify-center md:justify-start items-center">
            <Button>Fale conosco agora</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
