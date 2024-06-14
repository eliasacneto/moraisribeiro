import { Metadata } from "next";
import React from "react";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import TeamDetails from "../components/TeamDetails/TeamDetails";
import Nik from "@/public/images/nik.svg";
import Joao from "@/public/images/joao.svg";
import Gust from "@/public/images/gustavo.svg";

import Footer from "../components/Footer/Footer";

export const metadata: Metadata = {
  title: "Nosso time - Morais & Ribeiro",
  description: "Advocacia e Consultoria Jurídica",
};

const Team = () => {
  return (
    <div>
      <SectionTitle
        title="Nossos Profissionais"
        subtitle="Acreditamos no poder da nossa equipe e sabemos que nada se constrói sozinho."
      />
      <div className="pt-[5rem] pb-[5rem]">
        <div className="w-[80%] mx-auto mt-[1rem] flex flex-col">
          <TeamDetails
            image={Nik}
            name={"Dra. Nikolly Morais Silva"}
            role={"Sócia"}
            mainDescription={
              "Dra. Nikolly Karoline Morais e Silva é uma advogada especializada em Direito Cível e Tributário, com formação pela Faculdade do Ministério Público e pós-graduações em Advocacia Cível e Direito Empresarial pela Faculdade Legale Educacional. Atualmente, ela também cursa pós-graduação em Direito Tributário. Certificada em negociação e elaboração de contratos, Dra. Nikolly possui ampla experiência em mediação de conflitos. Ela é especialmente focada em tributação federal, repetições de indébito e execuções fiscais, oferecendo uma advocacia proativa e estratégica para proteger os interesses de seus clientes."
            }
            toLink="Redes sociais:"
            social={["linkedin", "instagram", "whatsapp", "email"]}
            linkedinLink={"https://www.linkedin.com/in/nikollymorais/"}
            instagramLink={"https://www.instagram.com/nikollymoraisadv/"}
            whatsappLink={"#"}
            emailLink={"#"}
          />
          <hr />
          <TeamDetails
            image={Joao}
            name={"Dr. João Pedro Ribeiro"}
            role={"Sócio"}
            mainDescription={
              "Dr. João Pedro Ribeiro é um advogado especializado em Direito do Trabalho e Compliance, atendendo tanto empregados quanto empregadores. Com pós-graduação em Direito do Trabalho, ele é reconhecido por sua habilidade em auxiliar empresas a aderirem a regulamentos e padrões éticos, minimizando riscos legais. Dr. João possui expertise em casos de danos morais e materiais, defendendo os interesses de seus clientes com empatia e determinação para obter compensações justas. Ele também é certificado em LGPD, assegurando que seus clientes cumpram as normas de proteção de dados. Sua abordagem oferece orientação jurídica personalizada, ajustada às necessidades específicas de cada cliente."
            }
            toLink="Redes sociais:"
            social={["linkedin", "instagram", "whatsapp", "email"]}
            linkedinLink={"https://www.linkedin.com/in/joaopedrorrmoliveira/"}
            instagramLink={"https://www.instagram.com/joaorezenderibeiro/"}
            whatsappLink={"#"}
            emailLink={"#"}
          />
          <hr />
          <TeamDetails
            image={Gust}
            name={"Dr. Gustavo Santos Ribeiro"}
            role={"Sócio"}
            mainDescription={
              "Dr. Gustavo Santos Ribeiro é um advogado especializado em responsabilidade civil, danos morais e materiais, formado em Direito por uma universidade de renome e distinguido por sua excelência acadêmica. Ele possui especializações em Direito do Consumidor e Direito Processual Civil, áreas nas quais desenvolveu vasto conhecimento, especialmente em ações contra instituições financeiras, educacionais, revendedoras de veículos e companhias aéreas. Dr. Gustavo também é certificado para manejar casos de isenção de imposto de renda em situações de doença grave, evidenciando sua competência e comprometimento em atender às necessidades específicas de seus clientes."
            }
            toLink="Redes sociais:"
            social={["linkedin", "instagram", "whatsapp", "email"]}
            linkedinLink={
              "https://www.linkedin.com/in/gustavo-santos-ribeiro-31b652196/"
            }
            instagramLink={"https://www.instagram.com/gustavo_pleonasmo/"}
            whatsappLink={"#"}
            emailLink={"#"}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Team;
