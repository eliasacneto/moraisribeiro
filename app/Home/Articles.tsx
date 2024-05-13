import React from "react";
import Heading from "../components/Heading/Heading";
import Art1 from "@/public/images/article1.svg";
import Art2 from "@/public/images/article2.svg";
import ArticleView from "../components/Articles/ArticleView";

const Articles = () => {
  return (
    <div className="pt-[5rem] pb-[5rem]">
      <Heading mainHeading="Confira os nossos" subHeading="Artigos Recentes" />

      <div className="w-[80%] mx-auto mt-[1rem] flex flex-col">
        <ArticleView
          image={Art1}
          category="PJ ou CLT: Avaliando Vantagens e Desvantagens"
          author="Por: Dr João Pedro Ribeiro"
          description="A decisão entre trabalhar como Pessoa Jurídica (PJ) ou sob a forma da Consolidação das Leis do Trabalho (CLT) é crucial e deve ser cuidadosamente ponderada, levando em consideração diversos aspectos. O regime CLT oferece uma gama de benefícios e proteções para os trabalhadores, como férias remuneradas, décimo terceiro salário..."
          link="https://www.linkedin.com/pulse/pj-ou-clt-avaliando-vantagens-e-desvantagens-jo%25C3%25A3o-pedro-x2aef"
        />
        <hr className="mt-4 md:mt-0" />
        <ArticleView
          image={Art2}
          category="Exposição de Dados na Dark Web e suas Consequências Jurídicas: Um Alerta para a Segurança Digital"
          author="Por: Dra. Nikolly Morais Silva"
          description="A internet trouxe consigo inúmeras oportunidades, mas também desafios significativos, especialmente no que diz respeito à segurança dos dados. Uma das áreas mais preocupantes é a chamada 'Dark Web', um segmento oculto da internet onde atividades ilícitas muitas vezes florescem, incluindo a venda e troca de informações pessoais e sensíveis."
          link="https://www.linkedin.com/pulse/exposi%25C3%25A7%25C3%25A3o-de-dados-na-dark-web-e-suas-consequ%25C3%25AAncias-jur%25C3%25ADdicas-silva-fclof"
        />
      </div>
    </div>
  );
};

export default Articles;
