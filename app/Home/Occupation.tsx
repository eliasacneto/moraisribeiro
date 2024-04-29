import Image from "next/image";
import React from "react";
import OccupationImg from "@/public/images/occupation.svg";
import Button from "../components/Button/button";

const Occupation = () => {
  return (
    <div className="pt-[9.5rem] pb-[9.5rem]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image src={OccupationImg} alt="imagem" />
        </div>
        <div className="md:w-1/2 md:pr-6">
          <h1 className="text-sm mb-3 text-[#C98264]">
            DEFENSORES DA JUSTIÇA E DO DIREITO
          </h1>
          <h2 className="text-3xl text-black font-bold mb-4">
            Áreas de atuação
          </h2>
          <div>
            <p className="text-[17px] text-gray-700 text-justify">
              Nossa atuação é focada na prestação de serviços jurídicos
              consultivos e contenciosos, atendendo tanto pessoas físicas quanto
              jurídicas. Especializamo-nos principalmente em questões de
              interesse empresarial, abrangendo processos administrativos e
              judiciais.
              <br />
              <br />
            </p>
            <p className="text-[17px] text-gray-700 text-justify">
              Nosso objetivo é orientar e representar nossos clientes com a
              máxima competência, garantindo estratégias legais personalizadas
              que visam a proteção de seus interesses e a maximização de seus
              resultados. Utilizamos uma abordagem integrada que combina rigor
              técnico com uma profunda compreensão das dinâmicas comerciais,
              proporcionando soluções jurídicas eficazes e inovadoras para
              enfrentar desafios complexos em um ambiente empresarial em
              constante mudança.
            </p>
            <Button>Entre em contato</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Occupation;
