import React from "react";

const Hero = () => {
  return (
    <div className="pt-[9.5rem] pb-8 xl:pb-[10rem] relative bg-cover bg-hero bg-85% lg:bg-cover-left">
      {/* Pseudo-elemento para aplicar opacidade no fundo em telas menores que es */}
      <div className="absolute inset-0 lg:hidden xl:hidden bg-black bg-opacity-85"></div>
      <div className="relative z-10 w-[100%] h-[60vh] flex flex-col mt-20 items-center justify-center">
        <div className="w-[80%] text-center sm:text-left mx-auto items-center gap-[2rem]">
          <p className="text-[#B8967E] text-[18px] antialiased">
            Advocacia e Consultoria Jurídica
          </p>
          <h1 className="text-white text-[40px] my-2 sm:text-[35px] lg:text-[35px] xl:text-[45px] leading-[3rem] lg:leading-[3rem]">
            Somos
          </h1>
          <h1 className="text-white text-[50px] mb-4 sm:text-[35px] lg:text-[45px] xl:text-[60px] leading-[3rem] lg:leading-[4rem]">
            <span className="text-[#8B94A1]">Morais & Ribeiro</span>
          </h1>
          <p className="text-wrap flex text-[18px] text-white antialiased sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[30%] my-4">
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
