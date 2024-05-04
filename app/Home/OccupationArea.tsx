import React from "react";
import Heading from "../components/Heading/Heading";
import Cards from "../components/Cards/Cards";

const OccupationArea = () => {
  return (
    <div className="pt-[5rem] pb-[5rem] bg-gray-100">
      {/* <Heading mainHeading="Conheça as nossas" subHeading="Áreas de Atuação" /> */}

      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[3rem] gap-[3rem] items-center">
        <Cards
          titleCard="Direito Civil Geral"
          textCard="É o ramo do direito que regula as relações pessoais e patrimoniais entre indivíduos em sociedade, abrangendo aspectos como contratos, propriedade, família e obrigações."
        />
        <Cards
          titleCard="Direito de Família"
          textCard="É o ramo do direito que trata das relações familiares, incluindo casamento, divórcio, guarda dos filhos, pensão alimentícia e sucessões."
        />
        <Cards
          titleCard="Direito Tributário"
          textCard="É o ramo do direito que regula a arrecadação de tributos (como impostos, taxas e contribuições) pelo Estado, bem como as relações entre o fisco e os contribuintes."
        />
        <Cards
          titleCard="Direito Empresarial"
          textCard="É o ramo do direito focado nas normas que regulamentam a atividade das empresas e dos empresários, incluindo falências, contratos comerciais e propriedade intelectual."
        />
        <Cards
          titleCard="Direito do Trabalho"
          textCard="É o ramo do direito que regula as relações de trabalho entre empregadores e empregados, abordando questões como contratos de trabalho, direitos trabalhistas, condições de trabalho, e resolução de disputas laborais."
        />
        <Cards
          titleCard="Direito do Consumidor"
          textCard="É o ramo do direito que protege os interesses dos consumidores, regulando as relações de consumo e assegurando o cumprimento de normas de proteção ao consumidor."
        />
        <Cards
          titleCard="Direito Criminal"
          textCard="É o ramo do direito que define condutas consideradas crimes e estabelece as penalidades aplicáveis a quem as pratica."
        />
        <Cards
          titleCard="Direito Previdenciário"
          textCard="É o ramo do direito que regula os sistemas de seguridade social, incluindo aposentadorias, pensões, auxílios e benefícios sociais, visando proteger os cidadãos em situações de vulnerabilidade."
        />
        <Cards
          titleCard="Direito Internacional"
          textCard="É o ramo do direito que trata das leis e normas que regulam as relações entre nações, abordando questões como tratados, diplomacia, conflitos e comércio internacional."
        />
      </div>
    </div>
  );
};

export default OccupationArea;
