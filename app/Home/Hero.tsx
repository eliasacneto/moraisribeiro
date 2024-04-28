import React from "react";

const Hero = () => {
  return (
    <div className="pt-[9.5rem] pb-[9.5rem] relative bg-cover bg-hero">
      <div className="w-[100%] h-[60vh] flex flex-col mt-20 items-center justify-center">
        <div className="w-[80%] text-center sm:text-left mx-auto items-center gap-[2rem]">
          <p className="text-[#B8967E] text-[18px]">
            Advocacia e Consultoria Jurídica
          </p>
          <h1 className="text-white text-[28px] my-4 sm:text-[35px] lg:text-[45px] xl:text-[60px] leading-[3rem] lg:leading-[4rem]">
            Somos <br />
            <span className="text-[#CC926A]">Morais & Ribeiro</span>
          </h1>
          <p className="text-wrap flex text-[20px] text-[#8B94A1] sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] my-4">
            Nosso compromisso é proporcionar assistência jurídica de excelência,
            eficaz e meticulosamente adaptada às necessidades específicas de
            cada cliente.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;