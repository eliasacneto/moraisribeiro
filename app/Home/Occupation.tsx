import Image from "next/image";
import React from "react";
import OccupationImg from "@/public/images/occupation.svg";
import Button from "../components/Button/button";
import Link from "next/link";

const Occupation = () => {
  return (
    <div className="pt-10 pb-6 md:pt-20 md:pb-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between px-6">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="max-w-xs md:max-w-none mx-auto md:mx-0">
              <Image src={OccupationImg} alt="imagem" width={400} height={400} />
            </div>
          </div>
          <div className="md:w-1/2 md:pl-6">
            <h1 className="text-sm mb-3 uppercase font-bold text-[#C98264]">
              Defensores da justiça e do direito
            </h1>
            <h2 className="text-2xl md:text-5xl text-black font-bold mb-4">
              Áreas de atuação
            </h2>
            <div>
              <p className="text-base md:text-lg text-gray-700 text-justify">
                Nossa atuação é focada na prestação de serviços jurídicos
                consultivos e contenciosos, atendendo tanto pessoas físicas quanto
                jurídicas. Especializamo-nos principalmente em questões de
                interesse empresarial, abrangendo processos administrativos e
                judiciais.
                <br />
                <br />
              </p>
              <p className="text-base md:text-lg text-gray-700 text-justify pb-5">
                Nosso objetivo é orientar e representar nossos clientes com a
                máxima competência, garantindo estratégias legais personalizadas
                que visam a proteção de seus interesses e a maximização de seus
                resultados. Utilizamos uma abordagem integrada que combina rigor
                técnico com uma profunda compreensão das dinâmicas comerciais,
                proporcionando soluções jurídicas eficazes e inovadoras para
                enfrentar desafios complexos em um ambiente empresarial em
                constante mudança.
              </p>
              <Link href={"/areas"}>
                <Button>Conheça nossas áreas de atuação</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Occupation;
